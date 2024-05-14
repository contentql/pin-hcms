import deepMerge from 'deepmerge'
import type { Field } from 'payload/types'

import blocks from '@/payload/blocks'

type BlocksField = (overrides?: Partial<Field>) => Field

export const blocksField: BlocksField = overrides => {
  return deepMerge<Field, Partial<Field>>(
    {
      name: 'blocks',
      type: 'blocks',
      blocks,
    },
    overrides || {},
  )
}
