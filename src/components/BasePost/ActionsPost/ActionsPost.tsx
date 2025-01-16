import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import ShareOutlined from '@mui/icons-material/ShareOutlined'
import FeelingPost from './FeelingPost'
import CommentPost from './CommentPost'
import { IPost } from '@/interface/post.interface'

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.secondary,
  flex: 1
}))

const styleCardAction = {
  justifyContent: 'space-between',
  borderTop: 1,
  borderColor: 'divider',
  padding: '2px'
}

const ActionsPost = ({ postId, dataPost }: {postId: string, dataPost: IPost}) => {

  return (
    <CardActions sx={styleCardAction}>
      <FeelingPost postId={postId} />

      <CommentPost dataPost={dataPost} />


      <CustomButton startIcon={<ShareOutlined />}>
        Chia sẻ
      </CustomButton>

    </CardActions>
  )
}

export default ActionsPost