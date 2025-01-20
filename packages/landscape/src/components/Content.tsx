import { Panel } from '@xyflow/react'
import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import styles from './Content.module.scss'

export interface ContentContextType {
  selectionContent: ReactNode | null
  lastSelectionContent: ReactNode | null
  hoverContent: ReactNode | null
  lastHoverContent: ReactNode | null
  setSelection: (value: ReactNode) => void
  setHover: (value: ReactNode) => void
}

export const ContentContext = createContext<ContentContextType>(
  undefined as unknown as ContentContextType,
)

export const useContent = () => useContext(ContentContext)

export const Content = () => {
  const {
    lastSelectionContent,
    selectionContent,
    lastHoverContent,
    hoverContent,
  } = useContent()

  const show = selectionContent || hoverContent
  const renderContent =
    hoverContent ||
    selectionContent ||
    lastSelectionContent ||
    lastHoverContent ||
    null

  return (
    <Panel
      className={show ? styles['panel-show'] : styles['panel-hide']}
      position="top-right"
    >
      {renderContent}
    </Panel>
  )
}
