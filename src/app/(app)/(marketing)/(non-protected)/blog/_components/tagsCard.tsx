// import Image width={10} height={10} from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Media, Tag } from '~/payload-types'
interface Tags extends Tag{
count:number
}
function TagsCard({ tags }: { tags: Tags[] }) {
    const getTagColors = (color:string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 '
    case 'gray':
      return 'bg-[#FCFDFC]'
    case 'red':
      return 'bg-red-100 '
    case 'green':
      return 'bg-green-100 '
    case 'yellow':
      return 'bg-yellow-100'
    case 'indigo':
      return 'bg-indigo-100'
    case 'purple':
      return 'bg-purple-100'
    case 'pink':
      return 'bg-pink-100'
    default:
      return 'bg-blue-100 '
  }
}
    const router=useRouter()
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <div className="w-full sticky top-24 mt-14 py-4 bg-white ">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">CATEGORIES</h5>
        </div>
        <div className="flow-root">
            <ul role="list">
                {tags?.map((tag,index)=>(
                    <li key={index} className='list-none relative'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={()=>router.push('/tag')}
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                            <motion.span
                                className={ `absolute inset-0 cursor-pointer block bg-[#e779c11a] rounded-md px-2`}
                                layoutId='hoverBackground'
                                initial={{ opacity: 0 }}
                                animate={{
                                opacity: 1,
                                transition: { duration: 0.15 },
                                }}
                                exit={{
                                opacity: 0,
                                transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                            )}
                        </AnimatePresence>
                        <div className="flex items-center cursor-pointer">
                            <div className="flex-shrink-0 cursor-pointer">
                                <Image width={10} height={10} className="w-12 h-12 rounded-full" src={(tag?.tagImage as Media)?.url || ''} alt="tag"/>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    {tag?.title}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}     
            </ul>
         </div>
    </div>
  )
}

export default TagsCard
