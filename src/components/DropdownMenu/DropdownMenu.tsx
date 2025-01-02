import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

interface IProps {
  tooltip?: string
  isIconButton?:boolean
  Icon: React.ReactNode
  DropdownMenu: React.ReactNode
}

const DropdownMenu = ({ tooltip, Icon, DropdownMenu, isIconButton = true }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => { setAnchorEl(null) }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title={tooltip}>
          {
            isIconButton === true ?
              <IconButton
                onClick={handleClick}
                size="medium"
                aria-controls={open ? 'dropdown-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {Icon}
              </IconButton>
              :
              <Box
                onClick={handleClick}
                aria-controls={open ? 'dropdown-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {Icon}
              </Box>
          }
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="dropdown-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }
        }}
      >
        {DropdownMenu}
      </Menu>
    </>
  )
}

export default DropdownMenu