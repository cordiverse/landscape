import type { ReactNode } from 'react'
import styles from './ActionLink.module.scss'

export interface ActionLinkProps {
  href?: string | undefined
  children: ReactNode
}

export const ActionLink = ({ href, children }: ActionLinkProps) => (
  <a
    className={styles['a']}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)
