import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import IconButton from '@mui/material/IconButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { mockNotifications, NotificationFooter, NotificationHeader } from './CustomNotification'


const MenuList = () => {
  const [notifications, setNotifications] = useState(mockNotifications)

  const handleNotificationClick = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    )
    // eslint-disable-next-line no-console
    console.log(`Clicked notification ${id}`)
  }

  return (
    <Box>
      <NotificationHeader>
        <Typography variant="h6">Thông báo</Typography>
        <IconButton aria-label="More">
          <MoreHorizIcon />
        </IconButton>
      </NotificationHeader>
      <Divider />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {notifications.map((notification) => (
          <React.Fragment key={notification.id}>
            <ListItem
              alignItems="flex-start"
              onClick={() => handleNotificationClick(notification.id)}
              sx={{
                cursor: 'pointer',
                bgcolor: notification.isRead ? 'inherit' : 'action.hover',
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }}
            >
              <ListItemAvatar>
                <Avatar alt="User Avatar" src={notification.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={notification.content}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline', fontSize: '12px' }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {notification.time}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ margin: 0 }} />
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <NotificationFooter>
        <Typography color="primary" sx={{ cursor: 'pointer' }}>
          Xem tất cả
        </Typography>
      </NotificationFooter>
    </Box>
  )
}

const Notification = () => {

  return (
    <>
      <DropdownMenu
        Icon={<NotificationsIcon fontSize='medium'/>}
        DropdownMenu={<MenuList />}
        tooltip='Thông báo' />
    </>
  )
}

export default Notification