import { styled, alpha } from '@mui/material/styles'
import VideoCall from '@mui/icons-material/VideoCall'
import Image from '@mui/icons-material/Image'
import EmojiEmotions from '@mui/icons-material/EmojiEmotions'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

const CustomButtonFeeds = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  flex: 1,
  whiteSpace: 'nowrap'
}))

const CreateFeeds = () => {
  return (
    <Card sx={{ maxWidth: 'auto', mx: 'auto' }}>
      <CardContent sx={{ '&:last-child': { padding: '16px' } }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar
            src='https://picsum.photos/200/200'
            alt='User avatar'
            sx={{ width: 40, height: 40 }}
          />
          <TextField
            fullWidth
            placeholder='Nam ơi, bạn đang nghĩ gì thế?'
            variant='outlined'
            sx={{
              flexDirection: 'unset',
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                bgcolor: (theme) => alpha(theme.palette.common.black, 0.05),
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.common.black, 0.1)
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                }
              },
              '& .MuiOutlinedInput-input' : { py: 1 },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent'
              }
            }}
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <CustomButtonFeeds startIcon={<VideoCall sx={{ color: '#f3425f' }} />}>
            Video trực tiếp
          </CustomButtonFeeds>
          <CustomButtonFeeds startIcon={<Image sx={{ color: '#45bd62' }} />}>
            Ảnh/video
          </CustomButtonFeeds>
          <CustomButtonFeeds startIcon={<EmojiEmotions sx={{ color: '#f7b928' }} />} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            Cảm xúc/hoạt động
          </CustomButtonFeeds>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CreateFeeds