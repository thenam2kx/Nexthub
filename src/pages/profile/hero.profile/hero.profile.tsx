import { useState } from 'react'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Edit as EditIcon, Add as AddIcon } from '@mui/icons-material'
import CoverPhotoProfile from './cover.photo.profile'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

const HeroProfile = () => {
  const [value, setValue] = useState(0)
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const navigate = useNavigate()

  return (
    <>
      <CoverPhotoProfile />

      <Box sx={{ bgcolor: 'background.paper' }}>
        <Container>
          <Box sx={{ display: 'flex', gap: '12px' }}>
            <Box sx={{ position: 'relative', height: 0 }}>
              <Avatar
                alt='Profile Picture'
                src='https://picsum.photos/168/168'
                sx={{
                  width: 168,
                  height: 168,
                  border: '4px solid white',
                  top: -20,
                  left: 16,
                  cursor: 'pointer'
                }}
              />
            </Box>

            <Box sx={{
              ml: 2,
              mt: 3,
              mb: 3,
              display: 'flex',
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0,
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}>
              <Box>
                <Typography variant='h4' component='div' sx={{ fontSize: '32px' }}>
                  Mai Thế Nam 123
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' sx={{ fontSize: '16px' }}>
                  1.5K friends
                </Typography>
                <AvatarGroup total={24} sx={{
                  justifyContent: 'start',
                  fontSize: '16px',
                  '& .MuiAvatar-root': { height: '32px', width: '32px', fontSize: '16px' }
                }}>
                  <Avatar alt="Remy Sharp" src="https://picsum.photos/168/168" />
                  <Avatar alt="Travis Howard" src="https://picsum.photos/168/168" />
                  <Avatar alt="Agnes Walker" src="https://picsum.photos/168/168" />
                  <Avatar alt="Trevor Henderson" src="https://picsum.photos/168/168" />
                </AvatarGroup>
              </Box>

              <Stack direction='row' spacing={1}>
                <Button variant='contained' startIcon={<AddIcon />}>
                  Thêm vào tin
                </Button>
                <Button variant='outlined' startIcon={<EditIcon />}>
                  Sửa thông tin cá nhân
                </Button>
              </Stack>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label='profile tabs'>
              <Tab label='Bài viết' onClick={() => navigate('/profile')} />
              <Tab label='Giới thiệu' onClick={() => navigate('about')} />
              <Tab label='Bạn bè' onClick={() => navigate('friends')} />
              <Tab label='Ảnh' onClick={() => navigate('photos')} />
              <Tab label='Video' onClick={() => navigate('videos')} />
              <Tab label='Tin tức' onClick={() => navigate('news')} />
            </Tabs>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HeroProfile