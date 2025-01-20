import type {
  Edge,
  EdgeChange,
  EdgeProps,
  Node,
  NodeChange,
  NodeProps,
} from '@xyflow/react'
import type { ReactNode } from 'react'

export interface CLNodeData {
  title: string
  content: ReactNode
  icon?: boolean | undefined

  [K: string]: unknown
}

export interface CLEdgeData {
  primary?: boolean | undefined
  content?: ReactNode | undefined

  [K: string]: unknown
}

export type CLNodeType = Node<CLNodeData>
export type CLNodeChange = NodeChange<CLNodeType>
export type CLNodeProps = NodeProps<CLNodeType>
export type CLEdgeType = Edge<CLEdgeData>
export type CLEdgeChange = EdgeChange<CLEdgeType>
export type CLEdgeProps = EdgeProps<CLEdgeType>
export interface CLEdgeDataProps {
  data?: CLEdgeData | undefined
}
