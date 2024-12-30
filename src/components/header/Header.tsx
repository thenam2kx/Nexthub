import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'


const Header = () => {
  return (
    <Box sx={{
      height: (theme) => theme.nexthub.appHeader
    }}>
      <AppBar position="static" sx={{
        height: '100%',
        boxShadow: 'none'
      }}></AppBar>
    </Box>
  )
}

export default Header