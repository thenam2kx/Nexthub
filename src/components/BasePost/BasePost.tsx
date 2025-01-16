import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import VerifiedIcon from '@mui/icons-material/Verified'
import Close from '@mui/icons-material/Close'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import ActionsPost from './ActionsPost/ActionsPost'
import { useAppSelector } from '@/redux/hooks'
import formatRelativeTime from '@/utils/formatTimeAgo'
import InteractPost from './InteractPost/InteractPost'
import ContentPost from './ContentPost/ContentPost'

const HeaderActions = () => {
  return (
    <>
      <IconButton>
        <MoreHoriz />
      </IconButton>
      <IconButton>
        <Close />
      </IconButton>
    </>
  )
}


const BasePost = () => {
  const dataPosts = useAppSelector(state => state.post.listPost)

  return (
    <>
      {
        dataPosts.map(dataPost => (
          <Card key={dataPost.id} component={'article'} sx={{ maxWidth: '680px', mx: 'auto', mt: 2 }}>
            <CardHeader
              avatar={
                <Avatar src="/placeholder.svg" alt="TOP Comments" />
              }
              action={<HeaderActions />}
              title={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                    {dataPost.user.name}
                  </Typography>
                  <VerifiedIcon sx={{ color: '#1976d2', fontSize: 14 }} />
                </Box>
              }
              subheader={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', fontWeight: 600 }}>
                    {formatRelativeTime(+dataPost.createdAt)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                    · 🌐
                  </Typography>
                </Box>
              }
              sx={{ padding: '8px' }}
            />
            <ContentPost dataPost={dataPost} />
            <InteractPost dataPost={dataPost} />
            <ActionsPost dataPost={dataPost} postId={dataPost.id} />
          </Card>
        ))
      }
    </>
  )
}

export default BasePost