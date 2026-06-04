import Header from './header'
import { Outlet } from 'react-router'
import Footer from './footer'

function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout