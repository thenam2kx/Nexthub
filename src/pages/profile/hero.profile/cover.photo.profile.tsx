import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import ControlCameraIcon from '@mui/icons-material/ControlCamera'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

const CoverPhotoProfile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card sx={{ maxWidth: '100%', boxShadow: 0, backgroundImage: 'none' }}>
      <Container>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component='img'
            height='400'
            image='https://picsum.photos/1000/500'
            alt='Cover Photo'
            sx={{ borderRadius: ' 0 0 6px 6px' }}
          />
          <Box sx={{ position: 'absolute', bottom: 0, right: 0, p: 2 }}>
            <Button
              variant='contained'
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              startIcon={<CameraAltIcon />}
            >
              Chỉnh sửa ảnh bìa
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              <MenuList sx={{ width: 250, padding: '4px 0' }}>
                <MenuItem>
                  <ListItemIcon>
                    <PhotoFilterIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Chọn ảnh bìa</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <UploadFileIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Tải ảnh lên</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ControlCameraIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Đặt lại vị trí</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteOutlineIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Xóa</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Card>
  )
}

export default CoverPhotoProfile