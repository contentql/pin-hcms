import Blog1_1 from '@/components/sections/Blog1_1'
import { blocks } from '@/mockdata/blockList'
import { getLayouts } from '@/routers/blogs-router'
import { Blog } from '../../payload-types'

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

  console.log('queryDataaaaa', layoutData)

  if (!layoutData) return

        const Block = blocks.hasOwnProperty(slug)
        if (Block) {
          return <Blog1_1 key={slug} data={layoutData} />
        }

  return (
    <div>
   
       That url does not exist!!
      
    </div>
  )
}

export default RenderBlocks
