import { styled } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import FormSend from '../FormSend/FormSend'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addComment, setOpenModalComment } from '@/redux/comment/comment.slice'
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined'
import Comment from '../Comment/Comment'
import { IPost } from '@/interface/post.interface'

const POST_COMMENT_HEADER = '56px'
const POST_COMMENT_FOOTER = '70px'

const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.secondary,
  flex: 1
}))


const CommentPost = ({ dataPost }: {dataPost: IPost}) => {
  const dispatch = useAppDispatch()

  const isOpenModalComment = useAppSelector(
    state => state.comment.isOpenModalComment
  )

  // Handle open modal comment
  const handleOpen = () => {
    dispatch(setOpenModalComment())
  }

  // Handle close modal comment
  const handleClose = () => {
    dispatch(setOpenModalComment())
  }

  const handlePostComment = (content: string) => {
    const dataComment = {
      id: uuidv4(),
      name: 'user 1',
      timestamp: Date.now(),
      content: content,
      avatar: 'https://picsum.photos/200/200',
      likes: 0,
      replies: []
    }
    dispatch(addComment(dataComment))
  }

  return (
    <>
      <CustomButton startIcon={<ChatBubbleOutlineOutlined />} onClick={handleOpen}>
        Bình luận
      </CustomButton>

      <Modal
        open={isOpenModalComment}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: 600 },
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '8px',
          overflow: 'hidden',
          height: 'calc(100vh - 100px)'
        }}>
          <Typography sx={{
            fontSize: '20px',
            fontWeight: 600,
            textAlign: 'center',
            padding: '12px 0'
          }}>
            Bài viết của IIG Vietnam
          </Typography>
          <Box sx={{
            height: `calc(100% - ${POST_COMMENT_HEADER} - ${POST_COMMENT_FOOTER})`,
            overflowY: 'auto',
            scrollBehavior: 'smooth'
          }}>
            <Comment dataPost={dataPost} />
          </Box>

          <FormSend
            avatarUrl='https://example.com/my-avatar.jpg'
            placeholder='Viết bình luận của bạn...'
            onSubmit={handlePostComment}
            showIcons={true}
          />
        </Box>
      </Modal>
    </>
  )
}

export default CommentPost