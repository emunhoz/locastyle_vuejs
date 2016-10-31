import { routes as app } from '../app'

const root = [
  { path: '/', redirect: '/home' }
]

export default [ ...root, ...app ]
