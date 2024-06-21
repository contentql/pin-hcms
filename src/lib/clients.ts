type Client = {
  id: string
  res: any
}

const clients: Client[] = []

// the res object here is the writer, so now we can use it in our webhook
// look at the sendMessageToClient function below
export function addClient(id: string, res: any): void {
  clients.push({ id, res })
}

export function removeClient(id: string): void {
  const index = clients.findIndex(client => client.id === id)
  if (index !== -1) {
    clients.splice(index, 1)
  }
}

export function sendMessageToClient(id: string, message: string): void {
  const client = clients.find(client => client.id === id)
  if (client) {
    client.res.write(`data: ${message}\n\n`)
  }
}

export function getClientsCount(): number {
  return clients.length
}
