import type { ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import type { ContentContextType } from './Content'
import { ContentContext } from './Content'
import { FlowCore } from './FlowCore'

export const Root = () => {
  const [lastContent, setLastContentIntl] = useState<ReactNode | null>(null)
  const [selectionContent, setSelectionContentIntl] =
    useState<ReactNode | null>(null)
  const [selectionShow, setSelectionShow] = useState<boolean>(false)
  const [hoverContent, setHoverContentIntl] = useState<ReactNode | null>(null)
  const [hoverShow, setHoverShow] = useState<boolean>(false)

  const setSelectionContent = useCallback((newContent: ReactNode | null) => {
    if (newContent) {
      setLastContentIntl(newContent)
      setSelectionContentIntl(newContent)
      setSelectionShow(true)
    } else {
      setSelectionContentIntl(null)
      setSelectionShow(false)
    }
  }, [])

  const setHoverContent = useCallback((newContent: ReactNode | null) => {
    if (newContent) {
      setLastContentIntl(newContent)
      setHoverContentIntl(newContent)
      setHoverShow(true)
    } else {
      setHoverContentIntl(null)
      setHoverShow(false)
    }
  }, [])

  const contentContextValue = useMemo<ContentContextType>(
    () => ({
      lastContent,
      selectionContent,
      selectionShow,
      hoverContent,
      hoverShow,
      setSelectionContent,
      setHoverContent,
    }),
    [
      hoverContent,
      hoverShow,
      lastContent,
      selectionContent,
      selectionShow,
      setHoverContent,
      setSelectionContent,
    ],
  )

  return (
    <ContentContext.Provider value={contentContextValue}>
      <FlowCore />
    </ContentContext.Provider>
  )
}
