import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const IntroProfile = () => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant='h6' gutterBottom>
        Giới thiệu
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        Hello! I'm John and this is my Facebook profile.
      </Typography>
      <Button variant='outlined'>
        Edit Details
      </Button>
    </Card>
  )
}

export default IntroProfile