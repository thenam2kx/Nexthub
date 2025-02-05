import ModeSelect from '@/theme/ModeSelect'
import Box from '@mui/material/Box'
import CreateFeeds from './CreateFeeds'
import Post from './Post'
import Container from '@mui/material/Container'

const HomePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* <ModeSelect />
      <Container maxWidth='lg'>
        <CreateFeeds />
      </Container> */}
      <Post />
    </Box>
  )
}

export default HomePage