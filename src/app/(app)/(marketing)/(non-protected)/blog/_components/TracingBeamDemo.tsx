'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { TracingBeam } from './TracingBeam'
import { Blog, Media } from '~/payload-types'

export function TracingBeamDemo({ slug, data }: { slug: string; data: Blog }) {
  const date = new Date(data?.createdAt)
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`

  const readingTime = require('reading-time')
  const blogReadTime = readingTime(data?.description_html)

  return (
    <TracingBeam className='px-6'>
      <div className='max-w-4xl mx-auto antialiased pt-10 relative'>
        <div key={`content-0`} className='mb-10'>
          {/* <h2 className='bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
              {item.badge}
            </h2> */}

          <div className='text-sm   prose-sm dark:prose-invert'>
            {data?.blog_image && (
              <Image
                src={(data?.blog_image as Media)?.url || ''}
                alt={(data?.blog_image as Media)?.alt || ''}
                height='1000'
                width='1000'
                className='rounded-lg mb-10 object-cover'
              />
            )}
            <div className='flex justify-between border-b-[1px] border-black pb-10'>
              <div>
                <div>Author Jack</div>
                <div>Created on {formattedDate}</div>
              </div>
              <div>{blogReadTime.text}</div>
            </div>
            <p className={twMerge('text-3xl mb-10')}>{data?.title}</p>

            <div
              dangerouslySetInnerHTML={{
                __html: data?.description_html!,
              }}></div>
          </div>
        </div>
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: 'React',
    image: '',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: 'Changelog',
    image: '',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: 'Launch Week',
    image: '',
  },
]
