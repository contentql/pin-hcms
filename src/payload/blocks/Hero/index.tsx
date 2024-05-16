import { MovingBorderDemo } from '../ui/button'

const Hero = () => {
  return (
    <div className='relative z-50 mt-40 pointer-events-none select-none flex justify-center flex-col items-center'>
      <h1 className='md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none'>
        Background cell animation <br />
        with framer motion
      </h1>
      <br />
      {/* <TextGenerateEffect words='This is a subtitle for hero section' /> */}
      <br />
      <MovingBorderDemo buttonName='show more' />
    </div>
  )
}

export default Hero
