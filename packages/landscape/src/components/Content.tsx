import { Panel } from '@xyflow/react'
import type { ReactNode } from 'react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
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

  const showCtl = Boolean(selectionContent || hoverContent)
  const renderContent =
    hoverContent ||
    selectionContent ||
    lastSelectionContent ||
    lastHoverContent ||
    null

  const [showRender, setShowRender] = useState(false)
  const [showOpacity, setShowOpacity] = useState(false)

  useEffect(() => {
    if (showCtl) {
      // Immediately enable render
      setShowRender(true)
      // When show, enable opacity after 50 ms
      setTimeout(() => setShowOpacity(true), 50)
    } else {
      // When hide, immediately disable opacity
      setShowOpacity(false)
    }
  }, [showCtl])

  const handleTransitionEnd = useCallback(() => {
    // When hide, safely disable render
    if (!showCtl) setShowRender(false)
  }, [showCtl])

  return showRender ? (
    <Panel
      className={showOpacity ? styles['panel-show'] : styles['panel-hide']}
      position="top-right"
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles['container']}>
        <div className={styles['container-inner']}>{renderContent}</div>
      </div>
    </Panel>
  ) : null
}
