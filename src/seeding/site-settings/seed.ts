import { Payload } from 'payload'

import { SiteSettingsData, siteSettingsImageData } from './data'

export interface SeedSiteSettings {
  payload: Payload
  siteSettingsData: SiteSettingsData
}

export const seedSiteSettings = async ({
  payload,
  siteSettingsData,
}: SeedSiteSettings) => {
  try {
    const userImageResult = await payload.create({
      collection: 'media',
      data: { ...siteSettingsImageData.data },
      filePath: siteSettingsImageData.filePath,
    })

    const userDataWithImageId = JSON.stringify(siteSettingsData).replace(
      new RegExp(`\\$\\{\\{site_settings_image_1_id\\}\\}`, 'g'),
      userImageResult.id || '',
    )

    const finalSiteSettingsData: SiteSettingsData =
      JSON.parse(userDataWithImageId)

    const userResult = await payload.updateGlobal({
      slug: 'site-settings',
      data: finalSiteSettingsData,
    })
    return userResult
  } catch (error) {
    throw error
  }
}
