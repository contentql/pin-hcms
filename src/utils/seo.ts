import {
  GenerateDescription,
  GenerateImage,
  GenerateTitle,
  GenerateURL,
} from 'node_modules/@payloadcms/plugin-seo/dist/types'

export const generateTitle: GenerateTitle = (data: any) => {
  const title = `${data?.doc?.title.value || ''}`

  return title
}

export const generateDescription: GenerateDescription = (data: any) => {
  const description = `${data?.doc?.short_desc?.value || ''}`

  return description
}

export const generateImage: GenerateImage = (data: any) => {
  const image = `${data?.doc?.img?.value || ''}`

  return image
}

export const generateURL: GenerateURL = (data: any) => {
  const url = `https://pin-lottery-production.up.railway.app/${data?.locale ? data?.locale + '/' : ''}${data?.slug || ''}/${data?.id || ''}`

  return url
}
