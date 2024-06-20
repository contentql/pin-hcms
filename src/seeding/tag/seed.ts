import { Payload } from 'payload'

import { TagPageData, TagsData, TagsImagesData } from './data'

export interface SeedTagPageAndTags {
  payload: Payload
  pageData: TagPageData
  tagsImagesData: TagsImagesData
}

export const seedTagPageAndTags = async ({
  payload,
  pageData,
  tagsImagesData,
}: SeedTagPageAndTags) => {
  try {
    const pageResult = await payload.create({
      collection: 'pages',
      data: pageData,
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
      JSON.stringify(tagsImagesResult),
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
