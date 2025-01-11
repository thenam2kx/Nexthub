import { memo, useCallback, useMemo, useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { alpha, styled } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import {
  addLikeComment,
  addReply,
  deleteLikeComment
} from '@/redux/comment/comment.slice'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import RecommendIcon from '@mui/icons-material/Recommend'
import FormSend from '../FormSend/FormSend'
import { v4 as uuidv4 } from 'uuid'
import formatRelativeTime from '@/utils/formatTimeAgo'

const CustomButtonAction = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: 'none',
  fontWeight: 'bold',
  minWidth: 0,
  padding: '0 6px',
  fontSize: '12px'
}))

export interface IComment {
  id: string
  name: string
  timestamp?: string
  content: string
  avatar?: string
  likes: number
  replies?: IComment[]
}

interface IProps {
  data: IComment
  handleIsLiked?: () => void
  parentId: string
  nestingLevel ?: number
}

const CommentItem = memo(({ data, parentId, nestingLevel = 0 }: IProps) => {
  console.log('🚀 ~ Render-CommentItem')
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isReplying, setIsReplying] = useState<boolean>(false)
  const [showReplies, setShowReplies] = useState(false)

  const dispatch = useAppDispatch()

  const localReplies = useMemo(() => data.replies || [], [data.replies])

  const handleLike = useCallback(() => {
    if (isLiked) {
      setIsLiked(false)
      dispatch(deleteLikeComment(parentId))
    } else {
      dispatch(addLikeComment(parentId))
      setIsLiked(true)
    }
  }, [isLiked, dispatch, parentId])

  console.log(nestingLevel)


  const handleSubmit = useCallback((content: string) => {
    if (content.trim()) {
      const newReply = {
        id: uuidv4(),
        name: 'Current User',
        timestamp: Date.now(),
        content: content,
        avatar: '/placeholder.svg?height=40&width=40',
        likes: 0,
        replies: []
      }
      dispatch(addReply({ newReply, parentId: data.id }))
      setIsReplying(false)
    }
  }, [data.id, dispatch])

  return (
    <Box>
      <ListItem key={'comment.id'} alignItems='flex-start'>
        <ListItemAvatar sx={{ minWidth: 40 }}>
          <Avatar src={'comment.avatar'} sx={{ width: 32, height: 32 }} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant='subtitle2' fontWeight='bold'>
              {data.name}
            </Typography>
          }
          secondary={
            <Typography
              variant='body2'
              color='textSecondary'
              sx={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
            >
              {data.content}
            </Typography>
          }
          sx={{
            bgcolor: (theme) => alpha(theme.palette.common.black, 0.05),
            borderRadius: 3,
            p: '6px 12px',
            flex: 'none'
          }}
        />
      </ListItem>

      <Box display='flex' alignItems='center' ml={7} mt={-1} gap={2}>
        <Stack direction='row' spacing={1} >
          <Typography variant='body2' color='text.secondary' sx={{ fontSize: '12px' }}>
            {formatRelativeTime(+data.timestamp!)}
          </Typography>
          <CustomButtonAction
            size='small'
            onClick={handleLike}
            sx={{ color: isLiked ? 'primary.main' : 'inherit' }}
          >
            Thích
          </CustomButtonAction>
          <CustomButtonAction size='small' onClick={() => setIsReplying(!isReplying)}>
            Phản hồi
          </CustomButtonAction>
        </Stack>
        {
          data?.likes > 0 && (
            <Chip
              color='primary'
              variant='outlined'
              label={data.likes}
              size='small'
              sx={{ border: 'none' }}
              icon={<RecommendIcon fontSize='small' sx={{ color: 'primary.main' }} />}
            />
          )
        }
      </Box>
      {
        isReplying &&
        <FormSend
          avatarUrl='https://example.com/my-avatar.jpg'
          placeholder='Viết bình luận của bạn...'
          onSubmit={handleSubmit}
          showIcons={true}
          isFocus={true}
          styleContainer={{ paddingLeft: nestingLevel >= 2 ? 2 : 5 }}
        />
      }

      <Button
        size='small'
        onClick={() => setShowReplies((prev) => !prev)}
        sx={{ ml: 6, textTransform: 'none' }}
      >
        {showReplies ? 'Ẩn phản hồi' : 'Xem phản hồi'}
      </Button>

      {showReplies && localReplies?.map(reply => (
        <Box ml={nestingLevel >= 2 ? 0 : 5} mt={1} key={reply.id}>
          <CommentItem data={reply} parentId={reply.id} nestingLevel ={nestingLevel + 1} />
        </Box>
      ))}
    </Box>
  )
})

export default CommentItem