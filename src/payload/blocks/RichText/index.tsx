import type { RichTextType } from '@payload-types'

import type { AdditionalBlockProps } from '@/payload/blocks/Blocks'
import LexicalContent from '@/payload/blocks/ui/LexicalContent'

import Container from './Container'

export default function RichText({
  content,
  locale,
}: RichTextType & AdditionalBlockProps) {
  if (content?.root?.children?.length === 0) return null
  return (
    <section className='py-2 first:mt-2'>
      <Container>
        {/* <div className='prose dark:prose-invert md:prose-lg'> */}
        {/* @ts-ignore */}
        <LexicalContent
          childrenNodes={content?.root?.children as []}
          locale={locale}
          lazyLoadImages={false}
        />
        {/* </div> */}
      </Container>
    </section>
  )
}
