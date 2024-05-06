const Test1_1 = ({ title, sub_title, button_text }: any) => {
  return (
    <div>
      <div className='text-red-400'>{title}</div>
      <div className='text-blue-400'>{sub_title}</div>
      <button className='border'>{button_text}</button>
    </div>
  )
}

export default Test1_1
