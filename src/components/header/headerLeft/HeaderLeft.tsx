import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import SearchHub from './SearchHub'


const HeaderLeft = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', gap: '12px' }}>
      <Avatar sx={{ width: 40, height: 40 }} src='https://picsum.photos/200/300'>M</Avatar>
      <SearchHub />
    </Box>
  )
}

export default HeaderLeft