import { FaqsType } from '~/payload-types'

const Faqs = (data: FaqsType) => {
  return (
    <div>
      <div className=' mx-auto px-5 bg-white py-10'>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold sm:text-xl md:text-3xl lg:text-5xl mt-5 tracking-tight'>
            {data?.title}
          </h2>
          <p className='text-neutral-500 text-lg mt-3'>{data?.sub_title}</p>
        </div>
        <div className='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
          {data?.questions?.map((question, index) => (
            <div key={index} className='py-5'>
              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span> {question?.question}</span>
                  <span className='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shape-rendering='geometricPrecision'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      viewBox='0 0 24 24'
                      width='24'>
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
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
