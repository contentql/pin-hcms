import configPromise from '@payload-config';
import { getPayload } from 'payload';

export const getLayouts = async ({ slug }: { slug: string }) => {
  const payload = await getPayload({
    config: configPromise,
  });

  try {
    const layoutData = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    console.log('layoutData', layoutData);

    return layoutData.docs.at(0)?.layout;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
