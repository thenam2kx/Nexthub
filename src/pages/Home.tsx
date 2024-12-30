import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ModeSelect from '@/theme/ModeSelect'

const Home = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <ModeSelect />
      </Stack>
    </Box>
  )
}

export default Home