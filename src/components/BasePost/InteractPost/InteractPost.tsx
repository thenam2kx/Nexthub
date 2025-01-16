import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useAppDispatch } from '@/redux/hooks'
import { setOpenModalComment } from '@/redux/comment/comment.slice'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import { IPost } from '@/interface/post.interface'

const RenderFeelingPost = (feelings: string) => {
  switch(feelings) {
  case 'like':
    return <ThumbUpIcon sx={{ color: 'primary.main', fontSize: '18px' }} />
    break
  case 'love':
    return <FavoriteIcon sx={{ color: 'red', fontSize: '18px' }} />
    break
  case 'haha':
    return <EmojiEmotionsIcon sx={{ color: 'orange', fontSize: '18px' }} />
    break
  case 'sad':
    return <SentimentDissatisfiedIcon sx={{ color: '#eccc68', fontSize: '18px' }} />
    break
  case 'angry':
    return <FaceRetouchingNaturalIcon sx={{ color: '#ff7f50', fontSize: '18px' }} />
    break
  default:
    return <></>
  }
}


const InteractPost = ({ dataPost }: {dataPost: IPost}) => {
  const dispatch = useAppDispatch()

  let totalLike = 0
  let reactions: string[] = []
  if (dataPost?.reactions) {
    totalLike = Object.values(dataPost.reactions).reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
    )
    reactions = Object.keys(dataPost.reactions)
  }


  const handleOpenModalComment = () => {
    dispatch(setOpenModalComment())
  }

  return (
    <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {
          reactions.length > 0 &&
          reactions.map((item, index) => <Box key={index}>{RenderFeelingPost(item)}</Box>)
        }
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{
        '&:hover': { textDecoration: 'underline', cursor: 'pointer' }
      }}>
        {totalLike}
      </Typography>
      <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
        <Typography
          onClick={handleOpenModalComment}
          variant="body2"
          color="text.secondary"
          sx={{
            '&:hover': { textDecoration: 'underline', cursor: 'pointer' }
          }}
        >
          384 bình luận
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dataPost.shares} lượt chia sẻ
        </Typography>
      </Box>
    </Box>
  )
}

export default InteractPost