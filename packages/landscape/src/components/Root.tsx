import type { ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import type { ContentContextType } from './Content'
import { ContentContext } from './Content'
import { FlowCore } from './FlowCore'

export const Root = () => {
  const [content, setContentIntl] = useState<ReactNode | null>(null)
  const [show, setShow] = useState<boolean>(false)

  const setContent = useCallback((newContent: ReactNode | null) => {
    if (newContent) {
      setContentIntl(newContent)
      setShow(true)
    } else setShow(false)
  }, [])

  const contentContextValue = useMemo<ContentContextType>(
    () => ({
      content,
      show,
      setContent,
    }),
    [content, setContent, show],
  )

  return (
    <ContentContext.Provider value={contentContextValue}>
      <FlowCore />
    </ContentContext.Provider>
  )
}
