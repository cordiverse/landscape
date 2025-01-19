import { Panel } from '@xyflow/react'
import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import styles from './Content.module.scss'

export interface ContentContextType {
  lastContent: ReactNode | null
  selectionContent: ReactNode | null
  selectionShow: boolean
  hoverContent: ReactNode | null
  hoverShow: boolean
  setSelectionContent: (value: ReactNode) => void
  setHoverContent: (value: ReactNode) => void
}

export const ContentContext = createContext<ContentContextType>(
  undefined as unknown as ContentContextType,
)

export const useContent = () => useContext(ContentContext)

export const Content = () => {
  const {
    selectionShow,
    selectionContent,
    hoverShow,
    hoverContent,
    lastContent,
  } = useContent()

  const show = selectionShow || hoverShow
  const renderContent = hoverContent || selectionContent || lastContent || <></>

  return (
    <Panel
      className={show ? styles['panel-show'] : styles['panel-hide']}
      position="top-right"
    >
      <div className={styles['container']}>{renderContent}</div>
    </Panel>
  )
}
