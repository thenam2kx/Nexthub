import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const PhotoProfile = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant='h6' gutterBottom>
        Ảnh
      </Typography>
      <Grid container spacing={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Grid size={4} key={item}>
            <Box component={'img'}
              src={'https://picsum.photos/128/128'}
              alt={`Photo ${item}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}

export default PhotoProfile