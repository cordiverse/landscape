import styles from './ContentTitle.module.scss'

export interface ContentTitleProps {
  id: string
  title: string
  href: string
  icon?: boolean | undefined
}

export const ContentTitle = ({ id, title, icon, href }: ContentTitleProps) => (
  <div className={styles['container']}>
    <h1 className={styles['title']}>
      {href ? (
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {title}
        </a>
      ) : (
        title
      )}
    </h1>
    {icon && (
      <>
        <div className={styles['separator']} />
        {href ? (
          <a target="_blank" rel="noopener noreferrer" href={href}>
            <img className={styles['icon']} src={`/${id}.png`} />
          </a>
        ) : (
          <img className={styles['icon']} src={`/${id}.png`} />
        )}
      </>
    )}
  </div>
)
