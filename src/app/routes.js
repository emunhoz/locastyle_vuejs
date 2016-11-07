import { routes as home } from './pages/home'
import { routes as auth } from './pages/auth'
import { routes as plans } from './pages/plans'

export default [ ...auth, ...home, ...plans ]
