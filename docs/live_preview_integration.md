### Live Preview in Admin Panel and Frontend Integration

#### Admin Panel:

- Easily integrated into the content editing interface `admin panel` it will
  create a new tab called live preview.
- Real-time updates reflect changes made in the content editor.
- Renders the content using frontend components and styles.
- Refer
  [payload documentation](https://payloadcms.com/docs/live-preview/overview) for
  more info.
- Need to update the `url` config when need live preview tab for a new
  collection.
- You have to return the frontend url of where the collection data is using.

#### Example:

```tsx
livePreview: {
      url: ({ data, collectionConfig, locale }) => {
        const baseUrl = env.NEXT_PUBLIC_PUBLIC_URL

        if (collectionConfig?.slug === 'blogs') {
          return `${baseUrl}/blog/${data.slug}`
        } else {
          return `${baseUrl}/${data.slug}${locale ? `?locale=${locale.code}` : ''}`
        }
      },
      collections: ['pages', 'blogs'],
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    }
```

#### Frontend Integration using `useLivePreview` Hook:

- Initialized within React components to fetch live preview data.
- Configured with parameters like initialData, server URL and depth of data.
- Enables dynamic rendering of content based on the preview state.

#### Example:

```tsx
import { env } from '@env'
import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

const LivePreviewComponent = () => {
  const { data: livePreviewData } = useLivePreview({
    initialData: null,
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  return (
    <div>
      {livePreviewData ? (
        <p>{livePreviewData.title}</p>
      ) : (
        <p>Loading live preview...</p>
      )}
    </div>
  )
}

export default LivePreviewComponent
```
