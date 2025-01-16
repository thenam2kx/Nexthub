import { styled } from '@mui/material'
import Box from '@mui/material/Box'

export const NotificationHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const NotificationFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  textAlign: 'center'
}))

export const mockNotifications = [
  {
    id: 1,
    avatar: '/path-to-avatar1.jpg',
    content: 'John Doe commented on your post',
    time: '2 hours ago',
    isRead: false
  },
  {
    id: 2,
    avatar: '/path-to-avatar2.jpg',
    content: 'Jane Smith liked your photo',
    time: '4 hours ago',
    isRead: true
  },
  {
    id: 3,
    avatar: '/path-to-avatar3.jpg',
    content: 'New friend request from Mike Johnson',
    time: '1 day ago',
    isRead: false
  }
]