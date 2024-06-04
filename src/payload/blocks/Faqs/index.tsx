import { FaqsType } from '@payload-types'

const Faqs = (data: FaqsType) => {
  return (
    <div>
      <div className=' mx-auto mb-14 bg-white px-5'>
        <div className='flex flex-col items-center'>
          <h2 className='mt-5 font-bold tracking-tight sm:text-xl md:text-3xl lg:text-5xl'>
            {data?.title}
          </h2>
          <p className='mt-3 text-lg text-neutral-500'>{data?.sub_title}</p>
        </div>
        <div className='mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200'>
          {data?.questions?.map((question, index) => (
            <div key={index} className='py-5'>
              <details className='group'>
                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                  <span> {question?.question}</span>
                  <span className='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shapeRendering='geometricPrecision'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      width='24'>
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                  {question?.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
