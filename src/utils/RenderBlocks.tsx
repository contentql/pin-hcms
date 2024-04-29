import { blocks } from '@/mockdata/blockList'
import { Blog } from '@/payload-types'
import { getLayouts } from '@/routers/blogs-router'

// import { useQuery } from '@tanstack/react-query';

interface RenderBlocksProps {
  slug: string
  layout?: Blog['layout'] // layout should be an array of objects conforming to the Page["layout"] type
}

const RenderBlocks: React.FC<RenderBlocksProps> = async ({ slug }) => {
  //   const payload = await getPayload({
  //     config: configPromise,
  //   });
  //   const { docs: pageData } = await payload.find({
  //     collection: 'blogs',
  //     where: {
  //       slug: {
  //         equals: slug,
  //       },
  //     },
  //   });
  //   console.log('queryData', pageData);

  //   const { data: layoutData } = useQuery({
  //     queryKey: [`/api/${slug}`, 'get'],
  //     queryFn: async () => getLayouts({ slug }),
  //   });

  const layoutData = await getLayouts({ slug })

  console.log('queryData', layoutData)

  if (!layoutData) return

  return (
    <div>
      {layoutData?.map((block, index) => {
        const Block = blocks[block.blockType]
        if (Block) {
          return <Block key={index} {...block} />
        }
      })}
    </div>
  )
}

export default RenderBlocks
