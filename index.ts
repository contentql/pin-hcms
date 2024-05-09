// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Cards } from './Cards'
import { Cards_Block } from './Cards/block'

export const blocksJSX = {
  Cards: Cards,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {

  Cards_Block: Cards_Block,

}
