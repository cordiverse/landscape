import { Panel } from '@xyflow/react'
import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import styles from './Content.module.scss'

export interface ContentContextType {
  content: ReactNode | null
  show: boolean
  setContent: (value: ReactNode) => void
}

export const ContentContext = createContext<ContentContextType>(
  undefined as unknown as ContentContextType,
)

export const useContent = () => useContext(ContentContext)

export const Content = () => {
  const { content, show } = useContent()

  return (
    <Panel
      className={show ? styles['panel-show'] : styles['panel-hide']}
      position="top-right"
    >
      <div className={styles['container']}>{content}</div>
    </Panel>
  )
}
