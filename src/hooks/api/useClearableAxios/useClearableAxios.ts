import React from 'react'

import { AxiosPromise, AxiosRequestConfig } from 'axios'
import useAxios, { ResponseValues, RefetchOptions, Options } from 'axios-hooks'

export const useClearableAxios = <TResponse = unknown, TError = unknown>(config: AxiosRequestConfig | string, options?: Options): [
  ResponseValues<TResponse, TError>,
  // eslint-disable-next-line no-shadow
  (config?: AxiosRequestConfig, options?: RefetchOptions) => AxiosPromise<TResponse>,
  () => void,
] => {
  const initialState: ResponseValues<TResponse, TError> = React.useMemo(() => ({
    data: undefined,
    loading: false,
    error: undefined,
    response: undefined,
  }), [])

  const [useAxiosSate, refetch] = useAxios<TResponse, TError>(config, options)
  const [state, setState] = React.useState<ResponseValues<TResponse, TError>>(initialState)

  React.useEffect(() => {
    // do not update the state if te same error is rolled back form useAxios state
    setState(useAxiosSate)
  }, [useAxiosSate])

  // axios-hooks do not have possibility to clear whole state
  const clear = React.useCallback(() => {
    setState({ ...initialState })
  }, [initialState])

  // this function seems to be regenerating every render so memoization was needed
  // eslint-disable-next-line no-shadow
  const refetchMemoized = React.useCallback((config?: AxiosRequestConfig | undefined, options?: RefetchOptions | undefined) => {
    clear()
    return refetch(config, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [state, refetchMemoized, clear]
}

export default useClearableAxios
export * from 'axios-hooks'
export * from 'axios'
