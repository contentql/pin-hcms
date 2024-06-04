import { PricingType } from '@payload-types'

const Pricing = (data: PricingType) => {
  return (
    <div className='relative w-full border-t border-gray-200 py-8 md:py-10 xl:px-0'>
      <div
        id='pricing'
        className='container mx-auto flex h-full w-full flex-col items-center'>
        <h2 className='my-5 text-base font-medium uppercase tracking-tight text-indigo-500'>
          {data?.title}
        </h2>
        <h3 className='mt-2 w-full max-w-2xl px-5 text-center text-2xl font-black leading-tight text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0'>
          {data?.subtitle}
        </h3>

        <div className='mx-auto max-w-full sm:px-8 md:max-w-full'>
          <div className='relative flex flex-col items-center  gap-2 sm:flex-row'>
            {data?.pricingCards?.map(plan => (
              <div
                key={plan.id}
                className={`relative z-0 my-8 min-h-full w-11/12 max-w-sm rounded-lg border border-gray-200  sm:my-5 ${
                  plan.highlight ? 'shadow-lg' : ''
                }`}>
                {plan?.highlight && (
                  <div className='rounded-t bg-indigo-500 py-4 text-center text-sm font-semibold uppercase leading-none tracking-wide text-white'>
                    Most Popular
                  </div>
                )}
                <div className='overflow-hidden rounded-lg bg-white text-black shadow-sm'>
                  <div className='sm:text-md mx-auto mt-5 block max-w-sm px-8 text-left text-sm text-black lg:px-6'>
                    <h3 className='p-3 text-center text-lg font-bold uppercase tracking-wide'>
                      {plan?.title}
                    </h3>
                    <h4 className='flex items-center justify-center pb-6 text-center text-4xl font-bold text-gray-900'>
                      <span className='-ml-2 mr-1 text-lg text-gray-700'>
                        $
                      </span>
                      {plan?.price}
                    </h4>
                    <p className='text-sm text-gray-600'>{plan.description}</p>
                  </div>

                  <div className='mt-8 flex flex-wrap px-6'>
                    <ul>
                      {plan?.features?.map((feature, index) => (
                        <li key={index} className='flex items-center'>
                          <div className='rounded-full fill-current p-2 text-green-500'>
                            <svg
                              className='h-6 w-6 align-middle'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'>
                              <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                              <polyline points='22 4 12 14.01 9 11.01'></polyline>
                            </svg>
                          </div>
                          <span className='ml-3 text-lg text-gray-700'>
                            {feature?.feature as string}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex items-center p-8 uppercase'>
                    <a
                      href='#_'
                      className='mt-3 block w-full rounded bg-gray-900 px-6 py-4 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-600'>
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
