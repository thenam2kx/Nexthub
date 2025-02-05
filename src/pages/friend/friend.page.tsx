import { useState } from 'react'
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Link } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import { Link as RouterLink } from 'react-router'

interface Friend {
  id: string
  name: string
  image: string
  mutualFriends: number
}

const mockFriends: Friend[] = [
  {
    id: '1',
    name: 'Phạm Dũng',
    image: 'https://picsum.photos/200/200',
    mutualFriends: 1
  },
  {
    id: '2',
    name: 'Vũ Kiên',
    image: 'https://picsum.photos/200/200',
    mutualFriends: 1
  },
  {
    id: '3',
    name: 'Nguyễn Thị Hằng',
    image: 'https://picsum.photos/200/200',
    mutualFriends: 1
  },
  {
    id: '4',
    name: 'Trần Văn Hùng',
    image: 'https://picsum.photos/200/200',
    mutualFriends: 1
  },
  {
    id: '5',
    name: 'Nguyễn Văn A',
    image: 'https://picsum.photos/200/200',
    mutualFriends: 1
  },
  {
    id: '6',
    name: 'Nguyễn Văn B',
    image: 'https://picsum.photos/200/200',
    mutualFriends: 1
  }
]

const FriendsPage = () => {
  const [friends, setFriends] = useState<Friend[]>(mockFriends)

  const handleRemove = (id: string) => {
    setFriends(friends.filter((friend) => friend.id !== id))
  }

  return (
    <Box sx={{ p: 3, flexGrow: 1 }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant='h6' component='h1'>
            Những người bạn có thể biết
          </Typography>
          <Link href='#' underline='none' sx={{ color: 'primary.main' }}>
            Xem tất cả
          </Link>
        </Box>

        <Grid container spacing={2}>
          {friends.map((friend) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={friend.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <CardMedia
                  component='img'
                  image={friend.image}
                  alt={friend.name}
                  sx={{
                    height: 200,
                    objectFit: 'cover'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, padding: 1 }}>
                  <Typography
                    variant='subtitle1'
                    component={RouterLink}
                    to={`/profile/${friend.id}`}
                    sx={{ fontWeight: 500, fontSize: '16px', textDecoration: 'none', color: 'inherit' }}
                  >
                    {friend.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ flexDirection: 'column', gap: 1, p: 1, '&.MuiCardActions-root>:not(style)~:not(style)': { margin: 0 } }}>
                  <Button
                    fullWidth
                    variant='contained'
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'primary.dark' }
                    }}
                  >
                    Thêm bạn bè
                  </Button>
                  <Button
                    fullWidth
                    variant='contained'
                    onClick={() => handleRemove(friend.id)}
                    sx={{
                      bgcolor: 'grey.700',
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'grey.500' }
                    }}
                  >
                    Gỡ
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FriendsPage