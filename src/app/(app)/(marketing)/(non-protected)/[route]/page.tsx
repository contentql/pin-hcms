import RenderBlocks from '@/blocks/RenderBlocks'

const page = ({ params }: { params: { route: string } }) => {
  const { route } = params
  return <RenderBlocks slug={route} />
}

export default page
