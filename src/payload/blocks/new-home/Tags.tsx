/* eslint-disable @next/next/no-img-element */
const Tags = () => {
  return (
    <section className='bg-gray-800 pb-40 pt-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-24 flex flex-wrap justify-center text-center'>
          <div className='w-full px-4 lg:w-6/12'>
            <h2 className='text-4xl font-semibold text-white'>
              Explore Our Blog Tags
            </h2>
            <p className='m-4 text-lg leading-relaxed text-gray-300'>
              Discover the topics that are trending in our blog. Click on a tag
              to explore related posts.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
            <div className='px-6'>
              <img
                alt='React'
                src={'https://www.svgrepo.com/show/303500/react-1-logo.svg'}
                className='mx-auto max-w-full rounded-full shadow-lg'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-white'>React JS</h5>
                <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                  Front-End Development
                </p>
              </div>
            </div>
          </div>
          <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
            <div className='px-6'>
              <img
                alt='Next.js'
                src={
                  'https://pbs.twimg.com/profile_images/1645688598375854080/nqUAmhWs_400x400.jpg'
                }
                className='mx-auto max-w-full rounded-full shadow-lg'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-white'>Next JS</h5>
                <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                  Server-Side Rendering
                </p>
              </div>
            </div>
          </div>
          <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
            <div className='px-6'>
              <img
                alt='Payload CMS'
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQHjhJJLForezIi0Vz4usaXT9etgacpdibia7P31HPwJeUFr1cVM1WmLZY1qqU8hU6MM&usqp=CAU'
                }
                className='mx-auto max-w-full rounded-full shadow-lg'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-white'>Payload CMS</h5>
                <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                  Content Management
                </p>
              </div>
            </div>
          </div>
          <div className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
            <div className='px-6'>
              <img
                alt='Auth.js'
                src={
                  'https://pbs.twimg.com/profile_images/1370357699372810243/94fjvw_p_400x400.png'
                }
                className='mx-auto max-w-full rounded-full shadow-lg'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-white'>Auth JS</h5>
                <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                  Authentication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tags
