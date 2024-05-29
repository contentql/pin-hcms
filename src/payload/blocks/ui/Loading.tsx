function Loading() {
  return (
    <div className='dark:green flex h-screen items-center justify-center space-x-2 bg-transparent'>
      <div className='h-5 w-5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]'></div>
      <div className='h-5 w-5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]'></div>
      <div className='h-5 w-5 animate-bounce rounded-full bg-blue-600'></div>
      <div className='h-5 w-5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.20s]'></div>
    </div>
    // <div className='flex justify-center items-center content-center height-screen width-[100%]'>
    //   <div className='border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600' />
    // </div>
  )
}

export default Loading
