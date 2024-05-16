// 'use client'

// import { Blog } from '@payload-types'

// import { trpc } from '@/trpc/client'

// const BlogList = ({ blogs }: { blogs: Blog[] }) => {
//   const { data: blogsData } = trpc.blog.getAllBlogs.useQuery(undefined, {
//     initialData: blogs,
//   })

//   return (
//     <div className='flex items-center justify-center gap-5 h-full w-full'>
//       {blogsData?.map((blog, index) => (
//         <div
//           key={index}
//           className='max-w-sm p-6 w-80 h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
//           <a href={`/blog/${blog?.slug}`}>
//             <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//               {blog?.name}
//             </h5>
//           </a>
//           <div
//             className='mb-3 font-normal text-gray-700 dark:text-gray-400'
//             // TODO: We should remove this kind of code
//             dangerouslySetInnerHTML={{
//               __html: blog?.description_html as string,
//             }}></div>
//           <a
//             href={`/blog/${blog?.slug}`}
//             className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
//             Read more
//             <svg
//               className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
//               aria-hidden='true'
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 14 10'>
//               <path
//                 stroke='currentColor'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M1 5h12m0 0L9 1m4 4L9 9'
//               />
//             </svg>
//           </a>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default BlogList
