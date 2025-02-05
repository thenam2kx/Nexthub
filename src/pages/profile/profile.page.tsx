import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import PhotoProfile from './photo.profile'
import IntroProfile from './intro.profile'
import CreateFeeds from '../home/CreateFeeds'


const ProfilePage = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {/* Left Columns */}
          <Grid size={{ xs: 12, md: 5 }}>
            <IntroProfile />
            <PhotoProfile />
          </Grid>

          {/* Right columns */}
          <Grid size={{ xs: 12, md: 7 }}>
            <CreateFeeds />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProfilePage