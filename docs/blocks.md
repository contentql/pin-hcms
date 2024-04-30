# Blocks configuration and usage

1. Create block folder, name it as component name in src/blocks.
2. Create `index.tsx` file and `block.ts` file in the folder.
3. Tsx file is our component and ts file is block.
4. Write schema according to the component in the block.
5. Create `index.ts` file in blocks folder keep all the blocks in the `blocks`
   object and all the components in the `blocksJsx` object.
6. Now in pages collection create `layout` field with type blocks and give above
   blocks object values here. Then display layouts in the admin panel.
7. Create `RenderBlock.tsx` file in blocks.
8. Create root page as `[[…slug]]`
9. It consists `generateStaticParams` function to generate static pages in build
   time.
10. Another function `page` takes parameters as params, from it take slug. for
    home page slug doesn’t exist write condition to return `home_slug`.
11. From this slug we can get pageData from payload by using where clause.
12. Return RenderBlock component give props as `pageData layout` and `slug`.
13. RenderBlock component consist trpc or payload to get layout data for page
    dynamic purpose.
14. Map the layout data return `block` which is our component comes from
    `blocksJsx` object and give props to the component.
15. The existing blocks in the page will render.
