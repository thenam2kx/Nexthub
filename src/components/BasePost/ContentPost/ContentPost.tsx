import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useState } from 'react'
import { IPost } from '@/interface/post.interface'


const ContentPost = ({ dataPost }: {dataPost: IPost}) => {
  const [showAllText, setShowAllText] = useState(false)

  return (
    <CardContent sx={{
      color: 'white',
      padding: '0',
      maxHeight: '680px',
      minHeight:
        dataPost?.images &&
        dataPost?.images?.length === 0 &&
        dataPost.content.length < 350
          ? '350px' : 'auto',
      display:
        dataPost?.images &&
        dataPost?.images?.length === 0 &&
        dataPost.content.length < 350
          ? 'flex'
          : 'inline-block',
      alignItems:
        dataPost?.images &&
        dataPost?.images?.length === 0 &&
        dataPost.content.length < 350
          ? 'center'
          : 'normal',
      justifyContent:
        dataPost?.images &&
        dataPost?.images?.length === 0 &&
        dataPost.content.length < 350
          ? 'center' : 'normal'
    }}>
      {
        dataPost.content &&
        dataPost.content.length > 0 &&
        <Typography
          variant="h6"
          sx={{
            padding: '4px 8px',
            textAlign:
              dataPost?.images &&
              dataPost?.images?.length === 0 &&
              dataPost.content.length < 350
                ? 'center' : 'left',
            fontSize:
              dataPost?.images &&
              dataPost?.images?.length === 0 &&
              dataPost.content.length < 350
                ? '20px' : '14px',
            fontWeight:
              dataPost?.images &&
              dataPost?.images?.length === 0 &&
              dataPost.content.length < 350
                ? '600' : '400'
          }}
        >
          {
            dataPost?.content?.length > 350 && showAllText === false
              ?
              dataPost?.content?.slice(0, 400)
              :
              dataPost?.content
          }
          {
            dataPost?.content?.length > 350 &&
            <Box
              onClick={() => setShowAllText(!showAllText)}
              sx={{
                width: 'fit-content',
                fontSize: '14px',
                fontWeight: 500,
                '&:hover': { textDecoration: 'underline', cursor: 'pointer' }
              }}
            >
              { showAllText ? 'Ẩn bớt' : ' ...Xem thêm' }
            </Box>
          }
        </Typography>
      }

      {
        dataPost.images &&
        dataPost.images.length > 0 &&
        <ImageList sx={{ width: '100%', maxHeight: '500px' }} cols={3}>
          {
            dataPost.images.map((item, index) => (
              <ImageListItem key={index} sx={{ cursor: 'pointer' }}>
                <img
                  srcSet={item}
                  src={item}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList>
      }
    </CardContent>
  )
}

export default ContentPost