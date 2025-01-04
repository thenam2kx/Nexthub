import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined'
import Close from '@mui/icons-material/Close'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import ShareOutlined from '@mui/icons-material/ShareOutlined'
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined'

const Post = () => {
  return (
    <Card sx={{ maxWidth: 680, mx: 'auto', mt: 2 }}>
      <CardHeader
        avatar={
          <Avatar src="/placeholder.svg" alt="TOP Comments" />
        }
        action={
          <>
            <IconButton>
              <MoreHoriz />
            </IconButton>
            <IconButton>
              <Close />
            </IconButton>
          </>
        }
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
              TOP Comments
            </Typography>
            <VerifiedIcon sx={{ color: '#1976d2', fontSize: 16 }} />
          </Box>
        }
        subheader={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="body2" color="text.secondary">
              19 phút
            </Typography>
            <Typography variant="body2" color="text.secondary">
              · 🌐
            </Typography>
          </Box>
        }
      />

      <CardContent sx={{ bgcolor: 'black', color: 'white', textAlign: 'center', py: 8 }}>
        <Typography variant="h6">
          Nói gì thì nói Thái nó vẫn là anh cả của bóng đá Đông Nam Á, mình bậc cha mẹ nên dạy từ từ =)))))
        </Typography>
      </CardContent>

      <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/placeholder.svg" alt="Haha" style={{ width: 20, height: 20 }} />
          <img src="/placeholder.svg" alt="Like" style={{ width: 20, height: 20 }} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          TOP Comments và 7,3K người khác
        </Typography>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            384 bình luận
          </Typography>
          <Typography variant="body2" color="text.secondary">
            36 lượt chia sẻ
          </Typography>
        </Box>
      </Box>

      <CardActions sx={{ justifyContent: 'space-between', borderTop: 1, borderColor: 'divider' }}>
        <Button
          startIcon={<ThumbUpOutlined />}
          sx={{ flex: 1, color: 'text.secondary' }}
        >
          Thích
        </Button>
        <Button
          startIcon={<ChatBubbleOutlineOutlined />}
          sx={{ flex: 1, color: 'text.secondary' }}
        >
          Bình luận
        </Button>
        <Button
          startIcon={<ShareOutlined />}
          sx={{ flex: 1, color: 'text.secondary' }}
        >
          Chia sẻ
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post