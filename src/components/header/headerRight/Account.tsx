import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu'
import HelpIcon from '@mui/icons-material/Help'

const MenuList = () => {
  const handleClose = () => {}
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Avatar /> Tài khoản của tôi
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Thêm tài khoản
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <HelpIcon fontSize="small" />
        </ListItemIcon>
        Trợ giúp & hỗ trợ
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Cài đặt
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Đăng xuất
      </MenuItem>
    </>
  )
}

const Account = () => {

  return (
    <>
      <DropdownMenu
        Icon={<Avatar sx={{ width: 32, height: 32 }} src='https://picsum.photos/200/300'>M</Avatar>}
        DropdownMenu={<MenuList />}
        tooltip='Tài khoản' />
    </>
  )
}

export default Account