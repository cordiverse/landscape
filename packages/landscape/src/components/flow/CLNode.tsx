import { Handle, Position } from '@xyflow/react'
import type { HTMLAttributes } from 'react'
import { forwardRef, useCallback } from 'react'
import { useContent } from '../Content'
import styles from './CLNode.module.scss'
import type { CLNodeProps } from './types'

export const CLBaseNode = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & CLNodeProps
>(({ ...props }, ref) => {
  const { setHover } = useContent()

  const handlePointerEnter = useCallback(() => {
    setHover(props.data.content)
  }, [props.data.content, setHover])

  const handlePointerLeave = useCallback(() => {
    setHover(null)
  }, [setHover])

  return (
    <div
      ref={ref}
      tabIndex={0}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className=" react-flow__background react-flow__node-default"
      {...props}
    />
  )
})

CLBaseNode.displayName = 'CLBaseNode'

const CLNodeContent = (props: CLNodeProps) => (
  <div className={styles['content-vertical-container']}>
    <div className={styles['content-horizontal-container']}>
      {props.data.icon && (
        <>
          <img className={styles['icon']} src={`/${props.id}.png`} />
          <div className={styles['header-separator']} />
        </>
      )}

      <span>{props.data.title}</span>
    </div>
  </div>
)

export const CLNode = (props: CLNodeProps) => (
  <CLBaseNode {...props}>
    <CLNodeContent {...props} />
    <Handle type="source" isConnectable={false} position={Position.Top} />
    <Handle type="target" isConnectable={false} position={Position.Bottom} />
  </CLBaseNode>
)

CLNode.displayName = 'CLNode'

export const CLTopNode = (props: CLNodeProps) => (
  <CLBaseNode {...props}>
    <CLNodeContent {...props} />
    <Handle type="target" isConnectable={false} position={Position.Bottom} />
  </CLBaseNode>
)

CLTopNode.displayName = 'CLNode'

export const CLBottomNode = (props: CLNodeProps) => (
  <CLBaseNode {...props}>
    <CLNodeContent {...props} />
    <Handle type="source" isConnectable={false} position={Position.Top} />
  </CLBaseNode>
)

CLBottomNode.displayName = 'CLNode'
