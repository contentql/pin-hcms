import { NextRequest, NextResponse } from 'next/server'

import { sendMessageToClient } from '@/lib/clients'

export async function POST(req: NextRequest) {
  const event = await req.json()

  // Assuming event contains client ID
  const clientId = event.clientId
  sendMessageToClient(clientId, JSON.stringify({ message: event.message }))

  return NextResponse.json({ received: true })
}
