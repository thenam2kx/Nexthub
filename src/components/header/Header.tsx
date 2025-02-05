import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Account from './headerRight/Account'
import Message from './headerRight/message/Message'
import Options from './headerRight/Options'
import Notification from './headerRight/notification/Notification'
import HeaderMain from './headerMain/HeaderMain'
import HeaderLeft from './headerLeft/HeaderLeft'

const Header = () => {
  return (
    <Box sx={{
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 99,
      width: '100%',
      height: (theme) => theme.nexthub.appHeader
    }}>
      <AppBar position="static" sx={{
        height: '100%',
        boxShadow: 'none',
        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#192734' : '#ffffff'
      }}>
        <Box sx={{
          padding: '0 12px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box><HeaderLeft /></Box>

          <Box><HeaderMain /></Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Options />
            <Message />
            <Notification />
            <Account />
          </Box>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Header