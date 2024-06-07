export const GET = async () => {
  return Response.json({ envTest: process.env.TEST })
}
