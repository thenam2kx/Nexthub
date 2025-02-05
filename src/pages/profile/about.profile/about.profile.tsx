import styled from '@mui/material/styles/styled'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import PublicIcon from '@mui/icons-material/Public'
import ListItemIcon from '@mui/material/ListItemIcon'
import Phone from '@mui/icons-material/Phone'
import Email from '@mui/icons-material/Email'
import Person from '@mui/icons-material/Person'
import Cake from '@mui/icons-material/Cake'
import Edit from '@mui/icons-material/Edit'
import Add from '@mui/icons-material/Add'
import Chat from '@mui/icons-material/Chat'

const SidebarItem = styled(ListItem)<{ active?: boolean }>(({ active }) => ({
  color: active ?? active ? '#2D88FF' : '#E4E6EB',
  backgroundColor: active ? 'rgba(45, 136, 255, 0.1)' : 'transparent',
  borderRadius: active ? '6px' : '0',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    cursor: 'pointer'
  }
}))

const SectionTitle = styled(Typography)({
  color: '#E4E6EB',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '16px'
})

const InfoItem = styled(ListItem)({
  padding: '8px 0',
  '& .MuiListItemIcon-root': {
    minWidth: '36px',
    color: '#B0B3B8'
  }
})

const AddButton = styled(ListItem)({
  color: '#2D88FF',
  '&:hover': {
    backgroundColor: 'rgba(45, 136, 255, 0.1)',
    borderRadius: '6px',
    cursor: 'pointer'
  }
})

const AboutProfile = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Box display='flex' gap={3}>
          {/* Sidebar */}
          <Box
            width={360}
            my={3}
            p={2}
            component={'section'}
            sx={{ bgcolor: 'background.paper', borderRadius: '6px' }}
          >
            <Typography variant='h6' sx={{ mb: 2, color: '#E4E6EB' }}>
              Giới thiệu
            </Typography>
            <List>
              <SidebarItem>
                <ListItemText primary='Tổng quan' />
              </SidebarItem>
              <SidebarItem>
                <ListItemText primary='Công việc và học vấn' />
              </SidebarItem>
              <SidebarItem>
                <ListItemText primary='Nơi từng sống' />
              </SidebarItem>
              <SidebarItem active>
                <ListItemText primary='Thông tin liên hệ và cơ bản' />
              </SidebarItem>
              <SidebarItem>
                <ListItemText primary='Gia đình và các mối quan hệ' />
              </SidebarItem>
              <SidebarItem>
                <ListItemText primary='Chi tiết về bạn' />
              </SidebarItem>
              <SidebarItem>
                <ListItemText primary='Sự kiện trong đời' />
              </SidebarItem>
            </List>
          </Box>

          {/* Main Content */}
          <Box
            flex={1}
            my={3}
            px={2}
            component={'section'}
            sx={{ bgcolor: 'background.paper', borderRadius: '6px' }}
          >
            <List sx={{ mb: 3 }}>
              <InfoItem>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary='036 356 0798' secondary={<Typography color='#B0B3B8'>Di động</Typography>} />
                <PublicIcon />
                <IconButton sx={{ color: '#B0B3B8' }}>
                  <Edit />
                </IconButton>
              </InfoItem>
              <InfoItem>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary='thenam2kx@gmail.com'
                  secondary={<Typography color='#B0B3B8'>Email</Typography>}
                />
                <PublicIcon />
                <IconButton sx={{ color: '#B0B3B8' }}>
                  <Edit />
                </IconButton>
              </InfoItem>
            </List>

            <Box mb={3}>
              <SectionTitle>Các trang web và liên kết mạng xã hội</SectionTitle>
              <List>
                <AddButton>
                  <ListItemIcon>
                    <Add sx={{ color: '#2D88FF' }} />
                  </ListItemIcon>
                  <ListItemText primary='Thêm một trang web' />
                </AddButton>
                <AddButton>
                  <ListItemIcon>
                    <Add sx={{ color: '#2D88FF' }} />
                  </ListItemIcon>
                  <ListItemText primary='Thêm liên kết mạng xã hội' />
                </AddButton>
              </List>
            </Box>

            <Box mb={3}>
              <SectionTitle>Thông tin cơ bản</SectionTitle>
              <List>
                <InfoItem>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary='Nam' secondary={<Typography color='#B0B3B8'>Giới tính</Typography>} />
                  <IconButton sx={{ color: '#B0B3B8' }}>
                    <Edit />
                  </IconButton>
                </InfoItem>
                <InfoItem>
                  <ListItemIcon>
                    <Chat />
                  </ListItemIcon>
                  <ListItemText
                    primary='anh ấy'
                    secondary={<Typography color='#B0B3B8'>Danh xưng trên hệ thống</Typography>}
                  />
                  <IconButton sx={{ color: '#B0B3B8' }}>
                    <Edit />
                  </IconButton>
                </InfoItem>
                <InfoItem>
                  <ListItemIcon>
                    <Cake />
                  </ListItemIcon>
                  <ListItemText primary='19 tháng 5' secondary={<Typography color='#B0B3B8'>Ngày sinh</Typography>} />
                  <IconButton sx={{ color: '#B0B3B8' }}>
                    <Edit />
                  </IconButton>
                </InfoItem>
                <InfoItem>
                  <ListItemIcon>
                    <Cake />
                  </ListItemIcon>
                  <ListItemText primary='2000' secondary={<Typography color='#B0B3B8'>Năm sinh</Typography>} />
                </InfoItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutProfile
