import Box from '@mui/material/Box'

const AsideLeft = () => {
  return (
    <Box sx={{
      display: { xs: 'none', md: 'block' },
      width: { xs: '220px', lg: '360px' },
      padding: '8px'
    }}>AsideLeft</Box>
  )
}

export default AsideLeft