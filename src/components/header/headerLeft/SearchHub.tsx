import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import PersonIcon from '@mui/icons-material/Person'
import GroupIcon from '@mui/icons-material/Group'
import PublicIcon from '@mui/icons-material/Public'
import Avatar from '@mui/material/Avatar'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Popper from '@mui/material/Popper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from './CustomSearchHub'


interface SearchResult {
  id: string
  name: string
  type: 'person' | 'group' | 'page'
}

const getIcon = (type: SearchResult['type']) => {
  switch (type) {
  case 'person':
    return <PersonIcon />
  case 'group':
    return <GroupIcon />
  case 'page':
    return <PublicIcon />
  }
}

const mockSearchResults: SearchResult[] = [
  { id: '1', name: 'John Doe', type: 'person' },
  { id: '2', name: 'React Developers Group', type: 'group' },
  { id: '3', name: 'TypeScript Fan Page', type: 'page' },
  { id: '4', name: 'Jane Smith', type: 'person' },
  { id: '5', name: 'MUI Enthusiasts', type: 'group' }
]

const SearchHub = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setIsOpen(true)
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget)
    setIsOpen(true)
  }

  const handleClickAway = () => {
    setIsOpen(false)
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line no-console
    console.log('Searching for:', searchTerm)
  }

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true)
      setTimeout(() => {
        const filteredResults = mockSearchResults.filter((result) =>
          result.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setResults(filteredResults)
        setIsLoading(false)
      }, 300)
    } else {
      setResults([])
    }
  }, [searchTerm])

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <Paper
          component='form'
          onSubmit={handleSearchSubmit}
          sx={{ boxShadow: 'none', borderRadius: '4px' }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Tìm kiếm trên Nexthub'
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleFocus}
            />
          </Search>
        </Paper>
        <Popper
          open={isOpen}
          anchorEl={anchorEl}
          placement='bottom-start'
          style={{ width: anchorEl?.offsetWidth }}
        >
          <Paper elevation={3} sx={{ maxHeight: 400, overflow: 'auto' }}>
            <List sx={{ padding: 0 }}>
              {isLoading ? (
                <ListItem>
                  <CircularProgress size={20} />
                  <Typography variant='body2' sx={{ ml: 2 }}>
                    Đang tìm kiếm...
                  </Typography>
                </ListItem>
              ) : results.length > 0 ? (
                results.map((result) => (
                  <ListItem component={Button} key={result.id}>
                    <ListItemAvatar>
                      <Avatar sx={{ width: 40, height: 40 }}>{getIcon(result.type)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={result.name}
                      secondary={result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 500,
                          fontSize: '14px',
                          display: '-webkit-box',
                          overflow: 'hidden',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          textTransform: 'lowercase'
                        },
                        '& .MuiListItemText-secondary': {
                          color: 'gray',
                          fontSize: '12px',
                          textTransform: 'lowercase'
                        }
                      }}
                    />
                  </ListItem>
                ))
              ) : (
                searchTerm && (
                  <ListItem>
                    <Typography variant='body2'>Không có kết quả!</Typography>
                  </ListItem>
                )
              )}
            </List>
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  )
}

export default SearchHub