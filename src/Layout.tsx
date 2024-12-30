import { Outlet } from 'react-router'
import Box from '@mui/material/Box'
import Header from '@/components/header/Header'
import AsideLeft from '@/components/asideLeft/AsideLeft'
import AsideRight from '@/components/asideRight/AsideRight'


const Layout = () => {
  return (
    <Box component="section" sx={{
      width: '100vw',
      height: '100vh',
      bgcolor: 'background.default'
    }}>
      <Header />
      <Box sx={{
        display: 'flex'
      }}>
        <AsideLeft />
        <Box sx={{
          display: 'flex',
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0,
          padding: '8px 32px'
        }}>
          <Outlet />
        </Box>
        <AsideRight />
      </Box>
    </Box>
  )
}

export default Layout