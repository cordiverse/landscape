import type { DefaultEdgeOptions, NodeTypes, ProOptions } from '@xyflow/react'
import {
  applyNodeChanges,
  Background,
  BackgroundVariant,
  ReactFlow,
} from '@xyflow/react'
import { useCallback, useState } from 'react'
import { About } from './About'
import { Content } from './Content'
import styles from './FlowCore.module.scss'
import { edges, initialNodes } from './data'
import { CLBaseNode, CLBottomNode, CLNode, CLTopNode } from './flow/CLNode'
import type { CLNodeChange } from './flow/types'

const nodeTypes: NodeTypes = {
  CLBaseNode,
  CLNode,
  CLBottomNode,
  CLTopNode,
} as const

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
}

const proOptions: ProOptions = {
  hideAttribution: true,
}

export const FlowCore = () => {
  const [nodes, setNodes] = useState(initialNodes)

  const onNodesChange = useCallback(
    (changes: CLNodeChange[]) => {
      const filteredChanges = changes.filter((x) => x.type !== 'remove')
      if (!filteredChanges.length) return
      setNodes((nds) => applyNodeChanges(filteredChanges, nds))
    },
    [setNodes],
  )

  return (
    <div className={styles['container']}>
      <ReactFlow
        colorMode="dark"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        nodesConnectable={false}
        fitView
        proOptions={proOptions}
      >
        <Content />
        <About />
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  )
}
