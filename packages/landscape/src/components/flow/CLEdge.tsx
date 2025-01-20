import type { BaseEdgeProps, BezierEdgeProps } from '@xyflow/react'
import { getBezierPath, Position } from '@xyflow/react'
import { useCallback } from 'react'
import { useContent } from '../Content'
import styles from './CLEdge.module.scss'
import type { CLEdgeDataProps } from './types'

const BaseEdge = ({
  path,
  interactionWidth = 20,
  data,
  ...props
}: CLEdgeDataProps & BaseEdgeProps) => {
  const { setHover } = useContent()

  const handlePointerEnter = useCallback(() => {
    setHover(data?.content)
  }, [data?.content, setHover])

  const handlePointerLeave = useCallback(() => {
    setHover(null)
  }, [setHover])

  return (
    <>
      <path
        {...props}
        d={path}
        fill="none"
        className={`react-flow__edge-path ${props.className} ${data?.primary ? styles['primary'] : ''}`}
      />
      {interactionWidth && (
        <path
          d={path}
          fill="none"
          strokeOpacity={0}
          strokeWidth={interactionWidth}
          className="react-flow__edge-interaction"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        />
      )}
    </>
  )
}

export const CLEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
  style,
  markerEnd,
  markerStart,
  pathOptions,
  interactionWidth,
  data,
}: CLEdgeDataProps & BezierEdgeProps) => {
  const [path] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: pathOptions?.curvature,
  })

  return (
    <BaseEdge
      id={id}
      path={path}
      style={style}
      markerEnd={markerEnd}
      markerStart={markerStart}
      interactionWidth={interactionWidth}
      data={data}
    />
  )
}
