import { useAppSelector } from '@/redux/hooks'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import CommentItem from './CommentItem'
import { IPost } from '@/interface/post.interface'

const Comment = ({ dataPost }: {dataPost: IPost}) => {
  const listComments = useAppSelector(state => state.comment.listComments)
  console.log(dataPost.comments)
  return (
    <>
      <Divider />
      {
        listComments.map(item => (
          <Box key={item.id}>
            <CommentItem
              key={item.id}
              data={item}
              parentId={item.id}
              nestingLevel={0}
            />
          </Box>
        ))
      }
    </>
  )
}

export default Comment