import { NavLink } from 'react-router'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import HomeIcon from '@mui/icons-material/Home'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'

const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  '&.active': {
    fontWeight: 500,
    borderBottom: '2px solid',
    // color: theme.palette.mode === 'dark' ? '#2980b9' : '#2ecc71',
    // backgroundColor: theme.palette.mode === 'dark' ? 'rgba(29, 161, 242, 0.08)' : '#3498db'
    borderColor: theme.palette.mode === 'dark' ? '#2980b9' : theme.palette.primary.main,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main
    }
  }
}))

const CustomButton = styled(Button)(({ theme }) => ({
  px: 2,
  color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : 'rgba(0, 0, 0, 0.54)'
}))

const HeaderMain = () => {
  return (
    <Box sx={{
      display: { xs: 'none', sm: 'flex' },
      alignItems: 'center',
      textAlign: 'center',
      gap: '32px'
    }}>
      <Tooltip title={'Trang chủ'} arrow>
        <CustomNavLink to="/">
          <CustomButton>
            <HomeIcon fontSize='medium' />
          </CustomButton>
        </CustomNavLink>
      </Tooltip>

      <Tooltip title={'Bạn bè'} arrow>
        <CustomNavLink to="/friends">
          <CustomButton>
            <PeopleAltOutlinedIcon fontSize='medium' />
          </CustomButton>
        </CustomNavLink>
      </Tooltip>

      <Tooltip title={'Video'} arrow>
        <CustomNavLink to="/videos">
          <CustomButton>
            <OndemandVideoOutlinedIcon fontSize='medium' />
          </CustomButton>
        </CustomNavLink>
      </Tooltip>

      <Tooltip title={'Nhóm'} arrow>
        <CustomNavLink to="/groups">
          <CustomButton>
            <Groups2OutlinedIcon fontSize='medium' />
          </CustomButton>
        </CustomNavLink>
      </Tooltip>
    </Box>
  )
}

export default HeaderMain