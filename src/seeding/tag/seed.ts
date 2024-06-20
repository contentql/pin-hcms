import { Payload } from 'payload'

import {
  TagPageData,
  TagsData,
  tagPageData,
  tagPageImageData,
  tagsData,
  tagsImagesData,
} from './data'

export interface SeedTagPageAndTags {
  payload: Payload
}

export const seedTagPageAndTags = async ({ payload }: SeedTagPageAndTags) => {
  try {
    const tagPageImageResult = await payload.create({
      collection: 'media',
      data: { ...tagPageImageData.data },
      filePath: tagPageImageData.filePath,
    })

    const tagPageDataWithImageId = JSON.stringify(tagPageData).replace(
      new RegExp(`\\$\\{\\{tag_page_image_1_id\\}\\}`, 'g'),
      tagPageImageResult.id || '',
    )

    const finalTagPageData: TagPageData = JSON.parse(tagPageDataWithImageId)

    const pageResult = await payload.create({
      collection: 'pages',
      data: finalTagPageData,
    })

    const tagsImagesResult = await Promise.all(
      tagsImagesData.map(
        async tagImageData =>
          await payload.create({
            collection: 'media',
            data: { ...tagImageData.data },
            filePath: tagImageData.filePath,
          }),
      ),
    )

    const tagsDataWithImageIds = tagsImagesResult.reduce(
      (acc, tagImage, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{tag_image_${index + 1}_id\\}\\}`, 'g'),
          tagImage.id || '',
        ),
      JSON.stringify(tagsData),
    )

    const finalTagsData: TagsData = JSON.parse(tagsDataWithImageIds)

    const tagsResult = await Promise.all(
      finalTagsData.map(
        async finalTagData =>
          await payload.create({
            collection: 'tags',
            data: finalTagData,
          }),
      ),
    )

    return tagsResult
  } catch (error) {
    throw error
  }
}
