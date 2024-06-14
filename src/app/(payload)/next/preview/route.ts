import { env } from '@env'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

const payloadToken = 'payload-token'

export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string
      }
    }
  },
): Promise<Response> {
  const token = req.cookies.get(payloadToken)?.value
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')
  const secret = searchParams.get('secret')

  if (!url) {
    return new Response('No URL provided', { status: 404 })
  }

  if (!token) {
    new Response('You are not allowed to preview this page', { status: 403 })
  }

  const payload = await getPayloadHMR({
    config: configPromise,
  })

  // validate the Payload token
  // const userReq = await fetch(`${env.NEXT_PUBLIC_PUBLIC_URL}/api/users/me`, {
  //   headers: {
  //     Authorization: `JWT ${token}`,
  //   },
  // })

  // const userRes = await userReq.json()

  const { user } = await payload.auth({ headers: req.headers })

  if (!user) {
    draftMode().disable()
    return new Response('You are not allowed to preview this page', {
      status: 403,
    })
  }

  if (secret !== env.NEXT_PRIVATE_DRAFT_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  draftMode().enable()

  redirect(`${url}?draft=${draftMode().isEnabled}`)
}
