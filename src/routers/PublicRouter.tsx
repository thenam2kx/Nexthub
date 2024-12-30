import Layout from '@/Layout'
import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'


const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter