// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import Page1, { Page1_Block } from './Page1'
import Test1_1, { Test1_1_Block } from './Test1_1'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,
}
