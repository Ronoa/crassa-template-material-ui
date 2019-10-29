import { useEffect, useRef } from 'react'

export const useComponentDidMount = func => useEffect(func, [])

export const useComponentWillMount = func => {
  let willMount = useRef(true)

  if(willMount.current)
    func()

  useComponentDidMount(() => {
    willMount.current = false
  })
}
