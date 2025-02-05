import { useState } from 'react'
import { MoreVert as MoreVertIcon } from '@mui/icons-material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import List from '@mui/material/List'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

const FriendsProfile = () => {
  const [tabValue, setTabValue] = useState(0)
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, friendId: number) => {
    setMenuAnchorEl(event.currentTarget)
    setSelectedFriend(friendId)
  }

  const handleMenuClose = () => {
    setMenuAnchorEl(null)
    setSelectedFriend(null)
  }

  const friends = [
    { id: 1, name: 'Bùi Quốc Việt', mutualFriends: 2, avatar: '/placeholder.svg' },
    { id: 2, name: 'Nguyễn AS', mutualFriends: 1, avatar: '/placeholder.svg' },
    { id: 3, name: 'Đan Thư', mutualFriends: 2, avatar: '/placeholder.svg' },
    { id: 4, name: 'Tạo Nguyễn', mutualFriends: 1, avatar: '/placeholder.svg' },
    { id: 5, name: 'Phạm Thanh An', mutualFriends: 19, avatar: '/placeholder.svg' },
    { id: 6, name: 'Phạm Thanh An', mutualFriends: 19, avatar: '/placeholder.svg' }
  ]

  return (
    <Box py={3} sx={{ flexGrow: 1 }}>
      <Container>
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
          <Box component={'section'}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant='scrollable'
              scrollButtons='auto'
              sx={{ px: 2 }}
            >
              <Tab label='Tất cả bạn bè' sx={{ textTransform: 'none' }} />
              <Tab label='Đã thêm gần đây' sx={{ textTransform: 'none' }} />
              <Tab label='Tỉnh/Thành phố hiện tại' sx={{ textTransform: 'none' }} />
              <Tab label='Quê quán' sx={{ textTransform: 'none' }} />
            </Tabs>
          </Box>

          <List sx={{ p: 2, width: '100%' }}>
            <Grid container spacing={1}>
              {friends.map((friend) => (
                <Grid size={6}>
                  <ListItem key={friend.id} sx={{
                    mb: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    margin: 0,
                    gap: 1
                  }}>
                    <ListItemAvatar>
                      <Avatar
                        src={friend.avatar}
                        alt={friend.name}
                        variant="rounded"
                        sx={{ width: 64, height: 64 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={friend.name}
                      secondary={`${friend.mutualFriends} bạn chung`}
                      sx={{ '> .MuiListItemText-primary': { fontWeight: 500, fontSize: '16px' } }}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge='end' onClick={(e) => handleMenuOpen(e, friend.id)}>
                        <MoreVertIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Box>

        <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Yêu thích</MenuItem>
          <MenuItem onClick={handleMenuClose}>Chỉnh sửa danh sách bạn bè</MenuItem>
          <MenuItem onClick={handleMenuClose}>Bỏ theo dõi</MenuItem>
          <MenuItem onClick={handleMenuClose}>Hủy kết bạn</MenuItem>
        </Menu>
      </Container>
    </Box>
  )
}

export default FriendsProfile