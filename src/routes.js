import Introduction from './components/introduction/introduction'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Education from './components/education/education'
import FAQ from './components/FAQ/faq'

const routes = [
  { path: '/', redirect: '/Introduction'},
  { path: '/Introduction', name: 'Introduction', component: Introduction},
  { path: '/Skills', name: 'Skills', component: Skills},
  { path: '/Projects', name: 'Projects', component: Projects},
  { path: '/Education', name: 'Education', component: Education},
  { path: '/FAQ', name: 'FAQ', component: FAQ}
]

export default routes;
