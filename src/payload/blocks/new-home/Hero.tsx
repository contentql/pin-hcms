import { ChefHat, Layers, Ratio, Ship } from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative flex h-auto min-h-[116vh] w-full flex-col items-center justify-center bg-black pt-10 lg:pt-40'>
      <div className='absolute left-[50%] top-[24%] h-[20%] w-[20%] -translate-x-1/2 rounded-full bg-sky-500 blur-[110px]'></div>
      <h1 className='w-full max-w-2xl text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl'>
        Bring Your
      </h1>
      <h1 className='mt-3 w-full max-w-2xl text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl'>
        Dream into <span className='text-sky-500'>Reality</span>
      </h1>
      <p className='mt-10 max-w-xl text-center text-sky-200 lg:text-xl'>
        We increase revenue and maintain sustainable growth of your business
        through powerful website of next js
      </p>
      <button className='mt-16 rounded-md bg-sky-500 px-5 py-3 text-black transition hover:bg-sky-600'>
        Book a Meeting
      </button>
      <div className='mt-10 flex items-center justify-center gap-5 text-sm font-semibold uppercase text-white lg:text-xl'>
        <div className='h-0.5 w-6 rounded-full bg-sky-500 lg:h-1.5 lg:w-12'></div>
        trusted by amazing brands
        <div className='h-0.5 w-6 rounded-full bg-sky-500 lg:h-1.5 lg:w-12'></div>
      </div>
      <div className='mx-2 my-2 flex h-auto w-[80%] flex-wrap items-center justify-center gap-5 rounded-3xl md:flex md:flex-row lg:mx-auto lg:my-10 lg:h-24 lg:gap-14 lg:bg-zinc-900'>
        <div className='flex h-auto w-auto items-center justify-center gap-4 text-sm font-bold text-white md:text-xl lg:text-2xl'>
          <Layers size={24} /> Layers
        </div>
        <div className='flex h-auto w-auto items-center justify-center gap-4 text-sm font-bold text-white md:text-xl lg:text-2xl'>
          <Ship size={24} /> Quotient
        </div>
        <div className='flex h-auto w-auto items-center justify-center gap-4 text-sm font-bold text-white md:text-xl lg:text-2xl'>
          <Ratio size={24} /> HoruGlass
        </div>
        <div className='flex h-auto w-auto items-center justify-center gap-4 text-sm font-bold text-white md:text-xl lg:text-2xl'>
          <Ratio size={24} /> Beneto
        </div>
        <div className='flex h-auto w-auto items-center justify-center gap-4 text-sm font-bold text-white md:text-xl lg:text-2xl'>
          <ChefHat size={24} /> ChefHat
        </div>
      </div>
    </section>
  )
}

export default Hero
