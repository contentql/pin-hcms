// add your blocks code here
import { blocksJSX } from '.'

import { getBlogBySlug } from '@/routers/blogs-router'

interface RenderBlocksProps {
  slug: string
}

const RenderBlocks: React.FC<RenderBlocksProps> = async slug => {
  const blogData = await getBlogBySlug(slug as any)
  const Block = blocksJSX[slug]
  if (Block) return <Block key={slug} data={blogData} />

  return <h2>slug does not exist</h2>
}

export default RenderBlocks
