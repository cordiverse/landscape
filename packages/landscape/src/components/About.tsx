import { Panel } from '@xyflow/react'
import styles from './About.module.scss'

export const About = () => (
  <Panel position="bottom-left">
    <div className={styles['text']}>
      Cordis Landscape {__DEFINE_CL_APP_VERSION_STRING__} |{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ilharp/landscape"
      >
        GitHub
      </a>{' '}
      | Built with{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://reactflow.dev">
        React Flow
      </a>
      {window.__CL_BEIAN__ && (
        <>
          {' '}
          |{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://beian.miit.gov.cn/"
          >
            {window.__CL_BEIAN__}
          </a>
        </>
      )}
    </div>
  </Panel>
)
