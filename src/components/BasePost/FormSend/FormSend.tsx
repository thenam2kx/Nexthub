import { useCallback, useState } from 'react'
import { alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Image from '@mui/icons-material/Image'
import InsertEmoticon from '@mui/icons-material/InsertEmoticon'
import SendIcon from '@mui/icons-material/Send'

interface IProps {
  avatarUrl?: string
  placeholder?: string
  showIcons?: boolean
  styleContainer?: React.CSSProperties
  // eslint-disable-next-line no-unused-vars
  onSubmit: (content: string) => void
  isFocus?: boolean
}

const FormSend = (props: IProps) => {
  const {
    avatarUrl = '/placeholder.svg?height=40&width=40',
    placeholder = 'Bạn đang nghĩ gì?',
    showIcons = true,
    styleContainer={ padding: '16px' },
    onSubmit,
    isFocus = false
  } = props
  const [inputComment, setInputComment] = useState('')

  const handlePostComment = useCallback(() => {
    if (inputComment.trim() === '') return
    onSubmit(inputComment)
    setInputComment('')
  }, [inputComment, onSubmit])

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handlePostComment()
    }
  }, [handlePostComment])

  return (
    <Box sx={[{ p: 2, display: 'flex', gap: 1, alignItems: 'center' }, styleContainer]}>
      <Avatar
        src={avatarUrl}
        sx={{ width: 32, height: 32 }}
      />
      <Box
        sx={{
          flex: 1,
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          bgcolor: (theme) => alpha(theme.palette.common.black, 0.05)
        }}
      >
        <TextField
          fullWidth
          placeholder={placeholder}
          variant='outlined'
          value={inputComment}
          onKeyDown={handleKeyDown}
          autoFocus={isFocus}
          onChange={(e) => setInputComment(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent'
              }
            },
            '& .MuiOutlinedInput-input': { py: 1 },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            }
          }}
        />
        {showIcons && (
          <Stack direction='row' spacing={1} sx={{ pr: 2 }}>
            <IconButton size='small'>
              <InsertEmoticon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size='small'>
              <Image sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size='small' onClick={() => handlePostComment()}>
              <SendIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        )}
      </Box>
    </Box>
  )
}

export default FormSend