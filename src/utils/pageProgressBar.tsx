'use client'

import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'

// Import nProgress default styles

const PageLoader = () => {
  useEffect(() => {
    nProgress.configure({ showSpinner: false })
    //@ts-ignore
    const handleAnchorClick = event => {
      const targetUrl = event.currentTarget.href
      const currentUrl = window.location.href
      if (targetUrl !== currentUrl) {
        nProgress.start()
      }
    }

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll('a[href]')
      anchorElements.forEach(anchor =>
        anchor.addEventListener('click', handleAnchorClick),
      )
    }

    const mutationObserver = new MutationObserver(handleMutation)
    mutationObserver.observe(document, { childList: true, subtree: true })

    const handlePopState = () => {
      nProgress.done()
    }

    window.addEventListener('popstate', handlePopState)

    const originalPushState = window.history.pushState
    window.history.pushState = function () {
      nProgress.done()
      //@ts-ignore
      return originalPushState.apply(window.history, arguments)
    }

    const originalReplaceState = window.history.replaceState
    window.history.replaceState = function () {
      nProgress.done()
      //@ts-ignore
      return originalReplaceState.apply(window.history, arguments)
    }

    return () => {
      mutationObserver.disconnect()
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return null // No need for a visible div for the progress bar
}

export default PageLoader
