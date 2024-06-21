'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { sendMessageToClient } from '@/lib/clients'
import { trpc } from '@/trpc/client'
import { CLIENT_ID } from '@/trpc/router/seed'

const notifyClient = (message: string) => {
  sendMessageToClient(CLIENT_ID, message)
}

export function PageNotFound() {
  const [seedingStatus, setSeedingStatus] = useState<string[]>([])
  const [dots, setDots] = useState('')
  const [loading, setLoading] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  const { mutate: seedUserMutation } = trpc.seed.user.useMutation()
  const { mutate: seedTagPageMutation } = trpc.seed.tagPageAndTags.useMutation()
  const { mutate: seedBlogPageMutation } =
    trpc.seed.blogPageAndBlogs.useMutation()
  const { mutate: seedHomePageMutation } = trpc.seed.homePage.useMutation()

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const eventSource = new EventSource(`/api/sse/${CLIENT_ID}`)

    eventSource.onmessage = event => {
      const data = event.data && JSON.parse(event?.data)

      setSeedingStatus(prev => [...prev, data])

      if (data.success) {
        setLoading(false)
        eventSource.close()
      }
    }

    eventSource.onerror = () => {
      setLoading(false)
      eventSource.close()
    }

    return () => {
      eventSource.close()
    }
  }, [])

  const seedData = async () => {
    setLoading(true)
    setSeedingStatus([])

    notifyClient('Starting the demo data loading process...')

    seedUserMutation()
    seedTagPageMutation()
    seedBlogPageMutation()
    seedHomePageMutation()

    notifyClient(
      'The demo data loading process has been successfully completed.',
    )
  }

  return (
    <section>
      <div className='bg-black text-white'>
        <div className='flex h-screen'>
          <div className='m-auto text-center'>
            <div>{/* Some Svg */}</div>
            <p className='mb-4 p-2 text-sm text-[#45a6e9] md:text-base'>
              The stuff you were looking for doesn&apos;t exist
            </p>
            {pathname === '/' ? (
              loading ? (
                <>
                  <div className='absolute left-0 top-0 w-full'>
                    <div className='h-1.5 w-full overflow-hidden bg-pink-100'>
                      <div className='h-full w-full origin-left-right animate-progress bg-[#45a6e9]'></div>
                    </div>
                  </div>
                  <motion.div
                    className='mt-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}>
                    <AnimatePresence mode='wait'>
                      <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className='text-2xl font-bold'>
                        {seedingStatus.map((message, index) => (
                          <p key={index}>{message}</p>
                        ))}
                        {dots}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </>
              ) : (
                <button
                  onClick={() => seedData()}
                  className='rounded border border-[#45a6e9] bg-transparent px-4 py-2 text-[#45a6e9] shadow hover:border-transparent hover:bg-[#45a6e9] hover:text-white hover:shadow-lg'>
                  Load demo data
                </button>
              )
            ) : (
              <button
                onClick={() => router.refresh()}
                className='rounded border border-[#45a6e9] bg-transparent px-4 py-2 text-[#45a6e9] shadow hover:border-transparent hover:bg-[#45a6e9] hover:text-white hover:shadow-lg'>
                Refresh page
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
