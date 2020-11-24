import { NextRouter } from 'next/router'

export const goBackIfPossible = (router: NextRouter) => (fallbackPath?: string) => {
  if(!router) return

  if(window.history.length > 2){
    router.back()
  }else{
    fallbackPath && router.push(fallbackPath)
  }
}

export default goBackIfPossible
