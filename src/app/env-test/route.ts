export const GET = async () => {
  return Response.json({
    envTest: process.env.TEST,
    systemVariableTest: process.env.VERCEL_URL,
  })
}
