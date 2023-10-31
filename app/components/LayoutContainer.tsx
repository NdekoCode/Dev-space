'use client'

import { FC, PropsWithChildren, useEffect } from "react"
type ContainerProps = PropsWithChildren<{}>
const LayoutContainer:FC<ContainerProps> = ({children})=>{
    useEffect(() => {
        import('preline')
      }, [])
    return <>{children}</>
}
export default LayoutContainer;