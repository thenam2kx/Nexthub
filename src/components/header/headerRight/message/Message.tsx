import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu'
import InboxIcon from '@mui/icons-material/Inbox'
import { Badge, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { MessageHeader, mockMessages, SearchWrapper, StyledInputBase } from './CustomMessage'


const MenuList = () => {
  const [messages, setMessages] = useState(mockMessages);

  const handleMessageClick = (id: number) => {
    setMessages(prevMessages =>
      prevMessages.map(message =>
        message.id === id ? { ...message, unread: false } : message
      )
    )
    // eslint-disable-next-line no-console
    console.log(`Clicked message ${id}`)
  }

  return (
    <>
      <MessageHeader>
        <Typography variant="h6">Tin nhắn</Typography>
        <IconButton size="small">
          <MoreHorizIcon />
        </IconButton>
      </MessageHeader>
      <Box sx={{ p: 2 }}>
        <SearchWrapper>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <StyledInputBase
            placeholder="Search Messenger"
            inputProps={{ 'aria-label': 'search messenger' }}
          />
        </SearchWrapper>
      </Box>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {messages.map((message) => (
          <React.Fragment key={message.id}>
            <ListItem
              alignItems="flex-start"
              onClick={() => handleMessageClick(message.id)}
              sx={{
                cursor: 'pointer',
                bgcolor: message.unread ? 'action.hover' : 'inherit',
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }}
            >
              <ListItemAvatar>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  color={message.unread ? 'primary' : 'default'}
                >
                  <Avatar alt={message.name} src={message.avatar} />
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="text.primary"
                    sx={{ fontWeight: message.unread ? 'bold' : 'normal' }}
                  >
                    {message.name}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', mr: 1 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {message.lastMessage}
                    </Typography>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      · {message.time}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  )
}

const Message = () => {

  return (
    <>
      <DropdownMenu
        Icon={<InboxIcon fontSize='medium' />}
        DropdownMenu={<MenuList />}
        tooltip='Tin nhắn' />
    </>
  )
}

export default Message