import { useMediaQuery } from 'react-responsive'

export function useResponsive() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTablet,
    isMobile,
    isRetina,
  }
}
