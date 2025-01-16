import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Popover from '@mui/material/Popover'
import { useAppDispatch } from '@/redux/hooks'
import IconButton from '@mui/material/IconButton'
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { handleDisLikePost, handleLikePost, handleReactionPost } from '@/redux/post/post.slice'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import { CustomButton } from './ActionsPost'


const listFeeling = [
  {
    id: '1',
    icon: <ThumbUpIcon sx={{ color: 'primary.main', fontSize: '24px', cursor: 'pointer' }}/>,
    title: 'Thích',
    slug: 'like'
  },
  {
    id: '22',
    icon: <FavoriteIcon sx={{ color: '#ff4757', fontSize: '24px', cursor: 'pointer' }} />,
    title: 'Yêu thích',
    slug: 'love'
  },
  {
    id: '33',
    icon: <EmojiEmotionsIcon sx={{ color: 'orange', fontSize: '24px', cursor: 'pointer' }} />,
    title: 'Haha',
    slug: 'sad'
  },
  {
    id: '4',
    icon: <SentimentDissatisfiedIcon sx={{ color: '#eccc68', fontSize: '24px', cursor: 'pointer' }} />,
    title: 'Buồn',
    slug: 'like'
  },
  {
    id: '5',
    icon: <FaceRetouchingNaturalIcon sx={{ color: '#ff7f50', fontSize: '24px', cursor: 'pointer' }} />,
    title: 'Phần nộ',
    slug: 'angry'
  }
]

const FeelingPost = ({ postId }: {postId: string}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const dispatch = useAppDispatch()

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const handleLike = () => {
    if (!isLiked) {
      dispatch(handleLikePost())
    } else {
      dispatch(handleDisLikePost())
    }
    setIsLiked(!isLiked)
  }

  const handleFeeling = (slug: string) => {
    // console.log('felling is: ', title, postId)
    dispatch(handleReactionPost({ slug, postId }))
    handlePopoverClose()
  }

  return (
    <>
      <CustomButton
        onClick={handleLike}
        startIcon={ isLiked ? <ThumbUpIcon /> : <ThumbUpOutlined />}
        sx={{ color: isLiked ? 'primary.main' : 'text.secondary' }}

        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
      >
        Thích
      </CustomButton>

      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        disableRestoreFocus
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        sx={{
          pointerEvents: 'auto',
          '& .MuiPopover-paper': { borderRadius: '50px' }
        }}
      >
        <Stack spacing={1} direction="row" sx={{ padding: '4px 4px' }}>
          {
            listFeeling && listFeeling.length > 0 && listFeeling.map(item => (
              <Tooltip key={item.id} title={item.title} placement='top'>
                <IconButton onClick={() => handleFeeling(item.slug)}>
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))
          }
        </Stack>
      </Popover>
    </>
  )
}

export default FeelingPost