function Loading() {
  return (
    <div className='flex space-x-2 justify-center items-center bg-transparent h-screen dark:green'>
      <div className='h-5 w-5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-5 w-5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-5 w-5 bg-blue-600 rounded-full animate-bounce'></div>
      <div className='h-5 w-5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.20s]'></div>
    </div>
    // <div className='flex justify-center items-center content-center height-screen width-[100%]'>
    //   <div className='border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600' />
    // </div>
  )
}

export default Loading
