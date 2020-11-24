import React from 'react'

import { useRouter } from 'next/router'

import qs from 'qs'

export const useQsParams = (defaultParams: Record<string, any>, page: string) => {
  const router = useRouter()
  const isInitialMount = React.useRef(true)

  const search = typeof window === 'undefined' ? '' : window.location.search

  const qsParams = qs.parse(search, { ignoreQueryPrefix: true })
  const initialParams = { ...defaultParams, ...qsParams }
  const [params, setParams] = React.useState<Record<string, any>>(initialParams)

  // on page change reset to page defaults
  // but not on initial component mount
  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    setParams(defaultParams)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(defaultParams), page])

  React.useEffect(() => {
    router.push(qs.stringify(params, { addQueryPrefix: true }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)])

  return [params, setParams] as const
}

export default useQsParams
