// 'use client'

// import { FeatureTabTypes, Media } from '@payload-types'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { useState } from 'react'

// import { cn } from '@/utils/cn'

// type Tab = {
//   heading?: string | null | undefined
//   title?: string | null | undefined
//   image?: string | Media | null | undefined
//   id?: string | null | undefined
// }

// export const Tabs = ({
//   tabs: propTabs,
//   containerClassName,
//   activeTabClassName,
//   tabClassName,
//   contentClassName,
// }: {
//   tabs: FeatureTabTypes['tabs']
//   containerClassName?: string
//   activeTabClassName?: string
//   tabClassName?: string
//   contentClassName?: string
// }) => {
//   const [active, setActive] = useState<Tab>(propTabs?.at(0)!)
//   const [tabs, setTabs] = useState<FeatureTabTypes['tabs']>(propTabs)

//   const moveSelectedTabToTop = (idx: number) => {
//     const newTabs = [...propTabs!]
//     const selectedTab = newTabs.splice(idx, 1)
//     newTabs.unshift(selectedTab[0])
//     setTabs(newTabs)
//     setActive(newTabs[0])
//   }

//   const [hovering, setHovering] = useState(false)

//   return (
//     <>
//       <div
//         className={cn(
//           'flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar min-w-full w-full',
//           containerClassName,
//         )}>
//         {propTabs?.map((tab, idx) => (
//           <button
//             key={tab.title}
//             onClick={() => {
//               moveSelectedTabToTop(idx)
//             }}
//             onMouseEnter={() => setHovering(true)}
//             onMouseLeave={() => setHovering(false)}
//             className={cn('relative px-4 py-2 rounded-full', tabClassName)}
//             style={{
//               transformStyle: 'preserve-3d',
//             }}>
//             {active?.title === tab?.title && (
//               <motion.div
//                 layoutId='clickedbutton'
//                 transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
//                 className={cn(
//                   'absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ',
//                   activeTabClassName,
//                 )}
//               />
//             )}

//             <span className='relative block text-black dark:text-white'>
//               {tab.title}
//             </span>
//           </button>
//         ))}
//       </div>
//       <FadeInDiv
//         tabs={tabs}
//         active={active}
//         key={active?.title as string}
//         hovering={hovering}
//         className={cn('mt-32', contentClassName)}
//       />
//     </>
//   )
// }

// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering,
// }: {
//   className?: string
//   key?: string
//   tabs: FeatureTabTypes['tabs']
//   active: Tab
//   hovering?: boolean
// }) => {
//   const isActive = (tab: Tab) => {
//     return tab?.title === tabs?.at(0)?.title
//   }
//   return (
//     <div className='relative w-full h-full'>
//       {tabs?.map((tab, idx) => (
//         <motion.div
//           key={tab?.title}
//           layoutId={tab?.title as string}
//           style={{
//             scale: 1 - idx * 0.1,
//             top: hovering ? idx * -50 : 0,
//             zIndex: -idx,
//             opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 40, 0] : 0,
//           }}
//           className={cn('w-full h-full absolute top-0 left-0', className)}>
//           <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-[#BDDCFF] to-[#F0F7FF]'>
//             <p>{tab?.heading}</p>
//             <Image
//               src={(tab?.image as Media)?.url as string}
//               alt='dummy image'
//               width='1000'
//               height='1000'
//               className='object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
//             />
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }
