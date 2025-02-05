import { Outlet } from 'react-router'
import Box from '@mui/material/Box'
import Header from '@/components/header/Header'


const Layout = () => {

  return (
    <Box component="section" sx={{
      width: '100%',
      height: '100vh',
      bgcolor: 'background.default'
    }}>
      <Header />
      <Box sx={{
        display: 'flex'
      }}>
        <Box sx={{
          display: 'flex',
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default Layout