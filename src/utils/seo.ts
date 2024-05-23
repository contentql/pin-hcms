import { env } from '@env'
import {
  GenerateDescription,
  GenerateImage,
  GenerateTitle,
  GenerateURL,
} from 'node_modules/@payloadcms/plugin-seo/dist/types'

export const generateTitle: GenerateTitle = (data: any) => {
  const title =
    typeof data?.doc?.title?.value === 'string'
      ? data?.doc?.title?.value
      : typeof data?.title === 'string'
        ? data.title
        : ''

  return title
}

export const generateTitlePrompt: GenerateTitle = (data: any) => {
  const title =
    typeof data?.doc?.title?.value === 'string'
      ? data?.doc?.title?.value
      : typeof data?.title === 'string'
        ? data.title
        : ''

  return `Generate a SEO title for a blog post with a joke or sense of humor in it for ${title}`
}

export const generateDescription: GenerateDescription = (data: any) => {
  const description =
    typeof data?.doc?.description?.value === 'string'
      ? data?.doc?.description?.value
      : ''

  return description
}

export const generateDescriptionPrompt: GenerateDescription = (data: any) => {
  const description =
    typeof data?.doc?.description?.value === 'string'
      ? data?.doc?.description?.value
      : ''

  return `Generate a SEO description for a blog post with a joke or sense of humor in it for ${description}`
}

export const generateImage: GenerateImage = (data: any) => {
  const image =
    typeof data?.doc?.img?.value === 'string' ? data?.doc?.img?.value : ''

  return image
}

export const generateURL: GenerateURL = (data: any) => {
  const url = `${env.NEXT_PUBLIC_PUBLIC_URL}/${data?.locale ? data?.locale + '/' : ''}${data?.collectionSlug || data?.docConfig?.slug || ''}/${data?.id || ''}`

  return url || ''
}
