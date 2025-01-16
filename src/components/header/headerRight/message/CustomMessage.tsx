import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material'

export const MessageHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const SearchWrapper = styled(Paper)(({ theme }) => ({
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: '100%'
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1
}))

// Mock data for messages
// eslint-disable-next-line react-refresh/only-export-components
export const mockMessages = [
  {
    id: 1,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'John Doe',
    lastMessage: 'Hey, how are you doing?',
    time: '2m',
    unread: true
  },
  {
    id: 2,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Jane Smith',
    lastMessage: 'Did you see the latest update?',
    time: '1h',
    unread: false
  },
  {
    id: 3,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Mike Johnson',
    lastMessage: 'Lets meet up this weekend!',
    time: '3h',
    unread: true
  }
]