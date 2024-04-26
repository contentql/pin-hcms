import RenderBlocks from '@/utils/RenderBlocks';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

const Page = async ({ params }: { params: { slug: string[] } }) => {
  // const { slug } = params

  const slug = params.slug?.at(0) || 'index';

  const payload = await getPayload({
    config: configPromise,
  });

  const { docs: pageData } = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return (
    <div>
      <RenderBlocks slug={slug} />
    </div>
  );
};

export default Page;
