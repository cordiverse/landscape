import styles from './AdapterTable.module.scss'

export const AdapterTable = () => (
  <div className={styles['adapter-table']}>
    <a className={styles['adapter']}>钉钉</a>
    <a className={styles['adapter']}>Discord</a>
    <a className={styles['adapter']}>KOOK</a>
    <a className={styles['adapter']}>飞书</a>
    <a className={styles['adapter']}>LINE</a>
    <a className={styles['adapter']}>邮件</a>
    <a className={styles['adapter']}>Matrix</a>
    <a className={styles['adapter']}>QQ</a>
    <a className={styles['adapter']}>Slack</a>
    <a className={styles['adapter']}>Telegram</a>
    <a className={styles['adapter']}>微信公众号</a>
    <a className={styles['adapter']}>企业微信</a>
    <a className={styles['adapter']}>米游社</a>
    <a className={styles['adapter']}>WhatsApp</a>
    <a className={styles['adapter']}>Zulip</a>
  </div>
)
