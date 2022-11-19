import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './components/Loading'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Archive = Loadable({
  loader: () => import(/* webpackChunkName: "archive" */ './pages/Archive'),
  loading: Loading,
})

const Posts = Loadable({
  loader: () => import(/* webpackChunkName: "posts" */ './pages/Posts'),
  loading: Loading,
})

const Guidelines = Loadable({
  loader: () => import(/* webpackChunkName: "posts" */ './pages/Guidelines'),
  loading: Loading,
})

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './pages/About'),
  loading: Loading,
})

const Animations = Loadable({
  loader: () =>
    import(/* webpackChunkName: "animations" */ './pages/Animations'),
  loading: Loading,
})

const Animation = Loadable({
  loader: () => import(/* webpackChunkName: "animation" */ './pages/Animation'),
  loading: Loading,
})

const ProMembership = Loadable({
  loader: () =>
    import(/* webpackChunkName: "promembership" */ './pages/ProMembership'),
  loading: Loading,
})

const Terms = Loadable({
  loader: () =>
    import(/* webpackChunkName: "terms" */ './pages/FooterDocs/Terms'),
  loading: Loading,
})

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './pages/Profile'),
  loading: Loading,
})

const Post = Loadable({
  loader: () => import(/* webpackChunkName: "post" */ './pages/Post'),
  loading: Loading,
})

const ForgotPassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "forgotpassword" */ './components/ForgotPassword'
    ),
  loading: Loading,
})

const ResetPassword = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "resetpassword" */ './components/ResetPassword'
    ),
  loading: Loading,
})

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './components/Login'),
  loading: Loading,
})

const Discord = Loadable({
  loader: () => import(/* webpackChunkName: "discord" */ './pages/Discord'),
  loading: Loading,
})

const SignupRoot = Loadable({
  loader: () =>
    import(/* webpackChunkName: "signuproot" */ './components/SignupRoot'),
  loading: Loading,
})

const SettingsRoot = Loadable({
  loader: () =>
    import(/* webpackChunkName: "settingsroot" */ './components/Settings'),
  loading: Loading,
})

const GettingStarted = Loadable({
  loader: () =>
    import(/* webpackChunkName: "gettingstarted" */ './pages/GettingStarted'),
  loading: Loading,
})

const Instructor = Loadable({
  loader: () =>
    import(/* webpackChunkName: "instructor" */ './pages/Instructor'),
  loading: Loading,
})

const FourOhFour = Loadable({
  loader: () =>
    import(/* webpackChunkName: "fourohfour" */ './components/FourOhFour'),
  loading: Loading,
})

const PrivacyPolicy = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "privacypolicy" */ './pages/FooterDocs/PrivacyPolicy'
    ),
  loading: Loading,
})
const Pro = Loadable({
  loader: () => import(/* webpackChunkName: "pro" */ './pages/Pro'),
  loading: Loading,
})
const PremiumSignup = Loadable({
  loader: () =>
    import(/* webpackChunkName: "premiumsignup" */ './pages/PremiumSignup'),
  loading: Loading,
})

const Support = Loadable({
  loader: () =>
    import(/* webpackChunkName: "support" */ './pages/FooterDocs/Support'),
  loading: Loading,
})

const Instructors = Loadable({
  loader: () =>
    import(/* webpackChunkName: "instructors" */ './pages/Instructors'),
  loading: Loading,
})

const CompanyAdmin = Loadable({
  loader: () =>
    import(/* webpackChunkName: "companyadmin" */ './pages/CompanyAdmin'),
  loading: Loading,
})

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "admin" */ './pages/Admin'),
  loading: Loading,
})

const App = () => (
  <>
    <div className='min-h-content'>
      <Route path='/' component={Nav} />
      <Switch>
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/' component={Animations} />
        <Route exact path='/' component={Animations} />
        <Route path='/adm' component={CompanyAdmin} />
        <Route path='/post/:slug' component={Post} />
        <Route path='/discord' component={Discord} />
        <Route exact path='/ProMembership' component={ProMembership} />
        <Route path='/signup' component={SignupRoot} />
        <Route path='/animation/:id/:submission' component={Animation} />
        <Route path='/gettingstarted' component={GettingStarted} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='/resetpassword' component={ResetPassword} />
        <Route path='/instructors' component={Instructors} />
        <Route path='/login' component={Login} />
        <Route path='/profile/:username' component={Profile} />
        <Route path='/settings' component={SettingsRoot} />
        <Route path='/admin' component={Admin} />
        <Route path='/instructor' component={Instructor} />
        <Route path='/about' component={About} />
        <Route path='/termsofservice' component={Terms} />
        <Route path='/privacypolicy' component={PrivacyPolicy} />
        <Route path='/pro' component={Pro} />
        <Route path='/premiumsignup' component={PremiumSignup} />
        <Route path='/support' component={Support} />
        <Route path='/archive' component={Archive} />
        <Route path='/guidelines' component={Guidelines} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
    <Footer />
  </>
)

export default App
