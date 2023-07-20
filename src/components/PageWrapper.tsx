import { useIsMobile } from '#root/hooks/useIsMobile'
import { FC } from 'react'

type Props = {
  children: any
  customStyle?: any
}

export const PageWrapper: FC<Props> = ({ children, customStyle }) => {
  const isMobile = useIsMobile()
  return <div style={{ paddingTop: isMobile ? '20%' : '10%', ...customStyle }}>{children}</div>
}
