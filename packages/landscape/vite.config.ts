import react from '@vitejs/plugin-react'
import type { SpawnOptions } from 'node:child_process'
import { spawn } from 'node:child_process'
import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'

const DEFAULT_VERSION_CODE = '0'
const DEFAULT_VERSION_STRING = '"v0.0.0 (0)"'

// @ts-expect-error mdx plugin issue?
// eslint-disable-next-line import/no-default-export
export default defineConfig(async () => {
  const [_, versionString] = await buildVersion()

  return {
    plugins: [
      {
        enforce: 'pre',
        ...mdx({}),
      },
      react({
        include: /\.(jsx|js|mdx|md|tsx|ts)$/,
      }),
    ],

    define: {
      __DEFINE_CL_APP_VERSION_STRING__: versionString,
    },
  }
})

const buildVersion = () =>
  Promise.all([
    spawnOutput('git', ['describe', '--tags', '--dirty']),
    spawnOutput('git', ['rev-list', '--count', 'HEAD']),
  ])
    .then((x) => x.map((y) => y.trim()))
    .then(([x, y]) => [y, `"${x} (${y})"`])
    .catch(() => [DEFAULT_VERSION_CODE, DEFAULT_VERSION_STRING])

export async function spawnOutput(
  command: string,
  args?: ReadonlyArray<string>,
  options?: SpawnOptions,
): Promise<string> {
  const parsedArgs = args ?? []
  const parsedOptions: SpawnOptions = Object.assign<
    SpawnOptions,
    SpawnOptions,
    SpawnOptions | undefined
  >({}, { stdio: 'pipe', shell: true }, options)
  const child = spawn(command, parsedArgs, parsedOptions)
  let stdout = ''
  if (!child.stdout)
    throw new Error(`cannot get stdout of ${command} ${parsedArgs.join(' ')}`)
  child.stdout.on('data', (x) => (stdout += x))
  return new Promise<string>((resolve, reject) => {
    child.on('close', (x) => {
      // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
      if (x) reject(x)
      else resolve(stdout)
    })
  })
}
