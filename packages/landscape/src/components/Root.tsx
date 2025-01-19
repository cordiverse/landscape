import type { ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import type { ContentContextType } from './Content'
import { ContentContext } from './Content'
import { FlowCore } from './FlowCore'

export const Root = () => {
  const [selectionContent, setSelectionContent] = useState<ReactNode | null>(
    null,
  )
  const [lastSelectionContent, setLastSelectionContent] =
    useState<ReactNode | null>(null)
  const [hoverContent, setHoverContent] = useState<ReactNode | null>(null)
  const [lastHoverContent, setLastHoverContent] = useState<ReactNode | null>(
    null,
  )

  const setSelection = useCallback(
    (newContent: ReactNode | null) => {
      setSelectionContent(newContent)
      if (newContent) setLastSelectionContent(newContent)
      if (!hoverContent) setLastHoverContent(null)
    },
    [hoverContent],
  )

  const setHover = useCallback(
    (newContent: ReactNode | null) => {
      setHoverContent(newContent)
      if (newContent) setLastHoverContent(newContent)
      if (!selectionContent) setLastSelectionContent(null)
    },
    [selectionContent],
  )

  const contentContextValue = useMemo<ContentContextType>(
    () => ({
      selectionContent,
      lastSelectionContent,
      hoverContent,
      lastHoverContent,
      setSelection,
      setHover,
    }),
    [
      selectionContent,
      lastSelectionContent,
      hoverContent,
      lastHoverContent,
      setSelection,
      setHover,
    ],
  )

  return (
    <ContentContext.Provider value={contentContextValue}>
      <FlowCore />
    </ContentContext.Provider>
  )
}
