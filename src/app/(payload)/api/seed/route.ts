import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { NextRequest } from 'next/server'

import { seedUser } from '@/seeding/user/seed'

// import { addClient, removeClient } from '@/lib/clients'

export async function GET(req: NextRequest, context: any) {
  //   const id = context.params.id.toString()

  const payload = await getPayloadHMR({ config: configPromise })

  const { readable, writable } = new TransformStream()
  const writer = writable.getWriter()
  const encoder = new TextEncoder()

  writer.write(encoder.encode('data: Seeding process started \n\n'))

  const data = seedUser({ payload })

  writer.write(encoder.encode('data: Seeding process completed \n\n'))

  writer.close()

  //   const clientId = id

  // for now, we are saving the details in RAM, here we can replace with REDIS if needed
  // with this addClient function, now we have access to the original writer in our RAM
  // For more info, you can look into @/lib/client.ts file
  //   addClient(clientId, {
  //     write: (message: string) => writer.write(encoder.encode(message)),
  //     end: () => writer.close(),
  //   })

  req.signal.addEventListener('abort', () => {
    // removeClient(clientId)
    writer.close()
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
