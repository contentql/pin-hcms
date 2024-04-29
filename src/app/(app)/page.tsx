
import RenderBlocks from '@/blocks/RenderBlocks'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  return (
    <div>
       <RenderBlocks slug={slug} /> 
      
    </div>
  )
}

export default Page
