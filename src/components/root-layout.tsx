import Header from './header'
import { Outlet } from 'react-router'
import Footer from './footer'

function RootLayout() {
  return (
    <div>
      <Header />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout