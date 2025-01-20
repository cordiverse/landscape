import type { CLEdgeType, CLNodeType } from './flow/types'

import MdxCirno from '../contents/cirno.mdx'
import MdxCordisKoishi from '../contents/cordis-koishi.mdx'
import MdxCordis from '../contents/cordis.mdx'
import MdxIroha from '../contents/iroha.mdx'
import MdxKoishi from '../contents/koishi.mdx'
import MdxMinato from '../contents/minato.mdx'
import MdxSatori from '../contents/satori.mdx'
import MdxSchemastery from '../contents/schemastery.mdx'
import MdxYakumo from '../contents/yakumo.mdx'

export const initialNodes: CLNodeType[] = [
  {
    id: 'schemastery',
    type: 'CLBottomNode',
    position: { x: 425, y: 550 },
    data: { title: 'Schemastery', content: <MdxSchemastery /> },
  },
  {
    id: 'cirno',
    type: 'CLBottomNode',
    position: { x: 762.5, y: 175 },
    data: { title: 'Cirno （建设中）', content: <MdxCirno /> },
  },
  {
    id: 'cordis',
    type: 'CLNode',
    position: { x: 625, y: 450 },
    data: { title: 'Cordis', content: <MdxCordis />, icon: true },
  },
  {
    id: 'iroha',
    type: 'CLNode',
    position: { x: 825, y: 350 },
    data: { title: 'Iroha', content: <MdxIroha /> },
  },
  {
    id: 'yakumo',
    type: 'CLNode',
    position: { x: 562.5, y: 275 },
    data: { title: 'Yakumo', content: <MdxYakumo /> },
  },
  {
    id: 'minato',
    type: 'CLNode',
    position: { x: 300, y: 200 },
    data: { title: 'Minato', content: <MdxMinato /> },
  },
  {
    id: 'satori',
    type: 'CLNode',
    position: { x: 500, y: 100 },
    data: { title: 'Satori', content: <MdxSatori />, icon: true },
  },
  {
    id: 'koishi',
    type: 'CLTopNode',
    position: { x: 700, y: 0 },
    data: { title: 'Koishi', content: <MdxKoishi />, icon: true },
  },
] as const

export const initialEdges: CLEdgeType[] = [
  {
    id: 'schemastery-cordis',
    type: 'CLEdge',
    source: 'schemastery',
    target: 'cordis',
  },
  {
    id: 'schemastery-yakumo',
    type: 'CLEdge',
    source: 'schemastery',
    target: 'yakumo',
  },
  {
    id: 'schemastery-minato',
    type: 'CLEdge',
    source: 'schemastery',
    target: 'minato',
  },
  {
    id: 'schemastery-satori',
    type: 'CLEdge',
    source: 'schemastery',
    target: 'satori',
  },
  {
    id: 'schemastery-koishi',
    type: 'CLEdge',
    source: 'schemastery',
    target: 'koishi',
  },
  { id: 'cordis-iroha', type: 'CLEdge', source: 'cordis', target: 'iroha' },
  { id: 'cordis-yakumo', type: 'CLEdge', source: 'cordis', target: 'yakumo' },
  { id: 'cordis-minato', type: 'CLEdge', source: 'cordis', target: 'minato' },
  { id: 'cordis-satori', type: 'CLEdge', source: 'cordis', target: 'satori' },
  {
    id: 'cordis-koishi',
    type: 'CLEdge',
    source: 'cordis',
    target: 'koishi',
    data: {
      primary: true,
      content: <MdxCordisKoishi />,
    },
  },
  { id: 'cirno-satori', type: 'CLEdge', source: 'cirno', target: 'satori' },
  { id: 'cirno-koishi', type: 'CLEdge', source: 'cirno', target: 'koishi' },
  { id: 'iroha-yakumo', type: 'CLEdge', source: 'iroha', target: 'yakumo' },
  {
    id: 'iroha-koishi',
    type: 'CLEdge',
    source: 'iroha',
    target: 'koishi',
    data: { primary: true },
  },
  { id: 'yakumo-minato', type: 'CLEdge', source: 'yakumo', target: 'minato' },
  { id: 'yakumo-satori', type: 'CLEdge', source: 'yakumo', target: 'satori' },
  {
    id: 'yakumo-koishi',
    type: 'CLEdge',
    source: 'yakumo',
    target: 'koishi',
    data: { primary: true },
  },
  { id: 'minato-satori', type: 'CLEdge', source: 'minato', target: 'satori' },
  {
    id: 'minato-koishi',
    type: 'CLEdge',
    source: 'minato',
    target: 'koishi',
    data: { primary: true },
  },
  {
    id: 'satori-koishi',
    type: 'CLEdge',
    source: 'satori',
    target: 'koishi',
    data: { primary: true },
  },
] as const
