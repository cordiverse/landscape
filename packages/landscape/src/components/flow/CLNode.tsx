import { Handle, Position } from '@xyflow/react'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'
import type { CLNodeProps } from './types'

export const CLBaseNode = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & CLNodeProps
>(({ ...props }, ref) => (
  <div
    ref={ref}
    tabIndex={0}
    className=" react-flow__background react-flow__node-default"
    {...props}
  />
))

CLBaseNode.displayName = 'CLBaseNode'

export const CLNode = (props: CLNodeProps) => (
  <CLBaseNode {...props}>
    {props.data.label}
    <Handle type="source" isConnectable={false} position={Position.Top} />
    <Handle type="target" isConnectable={false} position={Position.Bottom} />
  </CLBaseNode>
)

CLNode.displayName = 'CLNode'

export const CLTopNode = (props: CLNodeProps) => (
  <CLBaseNode {...props}>
    {props.data.label}
    <Handle type="target" isConnectable={false} position={Position.Bottom} />
  </CLBaseNode>
)

CLTopNode.displayName = 'CLNode'

export const CLBottomNode = (props: CLNodeProps) => (
  <CLBaseNode {...props}>
    {props.data.label}
    <Handle type="source" isConnectable={false} position={Position.Top} />
  </CLBaseNode>
)

CLBottomNode.displayName = 'CLNode'
