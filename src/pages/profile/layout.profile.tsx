import Box from '@mui/material/Box'
import { Outlet } from 'react-router'
import HeroProfile from './hero.profile/hero.profile'

const LayoutProfile = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeroProfile />
      <Outlet />
    </Box>
  )
}

export default LayoutProfile