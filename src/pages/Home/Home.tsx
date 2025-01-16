import ModeSelect from '@/theme/ModeSelect'
import Box from '@mui/material/Box'
import CreateFeeds from './CreateFeeds'
import Post from './Post'

const Home = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <ModeSelect />
      <CreateFeeds />
      <Post />
    </Box>
  )
}

export default Home