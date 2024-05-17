import { PricingType } from '~/payload-types'

const pricingPlans = [
  {
    id: 1,
    title: 'Basic Plan',
    price: 48,
    description:
      'In our basic plan you can take advantage of all these features below.',
    features: [
      'Awesome Feature',
      'And Another Cool Feature',
      'One More Feature',
    ],
    buttonText: 'Select This Plan',
    highlight: false,
  },
  {
    id: 5,
    title: 'Basic Plan',
    price: 48,
    description:
      'In our basic plan you can take advantage of all these features below.',
    features: [
      'Awesome Feature',
      'And Another Cool Feature',
      'One More Feature',
    ],
    buttonText: 'Select This Plan',
    highlight: false,
  },
  {
    id: 5,
    title: 'Basic Plan',
    price: 48,
    description:
      'In our basic plan you can take advantage of all these features below.',
    features: [
      'Awesome Feature',
      'And Another Cool Feature',
      'One More Feature',
    ],
    buttonText: 'Select This Plan',
    highlight: false,
  },
  {
    id: 5,
    title: 'Basic Plan',
    price: 48,
    description:
      'In our basic plan you can take advantage of all these features below.',
    features: [
      'Awesome Feature',
      'And Another Cool Feature',
      'One More Feature',
    ],
    buttonText: 'Select This Plan',
    highlight: false,
  },
]

const Pricing = (data: PricingType) => {
  return (
    <div className='relative h-screen px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0'>
      <div
        id='pricing'
        className='container flex flex-col items-center h-full w-full mx-auto'>
        <h2 className='my-5 text-base font-medium tracking-tight text-indigo-500 uppercase'>
          {data?.title}
        </h2>
        <h3 className='w-full max-w-2xl px-5 px-8 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0'>
          {data?.subtitle}
        </h3>

        <div className='max-w-full mx-auto md:max-w-6xl sm:px-8'>
          <div className='relative flex flex-col items-center  gap-2 block sm:flex-row'>
            {data?.pricingCards?.map(plan => (
              <div
                key={plan.id}
                className={`relative min-h-full z-0 w-11/12 max-w-sm my-8 border border-gray-200 rounded-lg  sm:my-5 ${
                  plan.highlight ? 'shadow-lg' : ''
                }`}>
                {plan?.highlight && (
                  <div className='py-4 text-sm font-semibold leading-none tracking-wide text-center text-white uppercase bg-indigo-500 rounded-t'>
                    Most Popular
                  </div>
                )}
                <div className='overflow-hidden text-black bg-white rounded-lg shadow-sm'>
                  <div className='block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6'>
                    <h3 className='p-3 text-lg font-bold tracking-wide text-center uppercase'>
                      {plan?.title}
                    </h3>
                    <h4 className='flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900'>
                      <span className='mr-1 -ml-2 text-lg text-gray-700'>
                        $
                      </span>
                      {plan?.price}
                    </h4>
                    <p className='text-sm text-gray-600'>{plan.description}</p>
                  </div>

                  <div className='flex flex-wrap px-6 mt-8'>
                    <ul>
                      {plan?.features?.map((feature, index) => (
                        <li key={index} className='flex items-center'>
                          <div className='p-2 text-green-500 rounded-full fill-current'>
                            <svg
                              className='w-6 h-6 align-middle'
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
                  <div className='flex items-center block p-8 uppercase'>
                    <a
                      href='#_'
                      className='block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-green-600'>
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
