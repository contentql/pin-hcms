'use client'

import { Slide, ToastContainer, ToastContainerProps } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastContainerConfigProps extends ToastContainerProps {}

const ToastConfig: React.FC<ToastContainerConfigProps> = props => {
  const { ...additionalProps } = props

  const toastifyConfig: ToastContainerProps = {
    toastClassName: 'custom-toast',
    bodyClassName: 'custom-toast-body',
    progressClassName: 'custom-toast-progress',
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    closeButton: true,
    limit: 5,
    transition: Slide,
    theme: 'colored',
    ...additionalProps,
  }

  // Override console.error
  // This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
  // @link https://github.com/recharts/recharts/issues/3615
  const error = console.error
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  return <ToastContainer {...toastifyConfig} />
}

export default ToastConfig
