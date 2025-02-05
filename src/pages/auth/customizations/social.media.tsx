import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { GoogleIcon, FacebookIcon } from '@/pages/auth/customizations/icons.customize'
import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'
import axios from 'axios'


interface IProps {
  txtFacebook: string
  txtGoogle: string
  txtsub: string
  txtRedirect: string
  urlDirect: string
}

const GoogleLoginButton = ({ txtGoogle }: { txtGoogle: string }) => {

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      if (response?.access_token) {
        console.log('🚀 ~ onSuccess: ~ response?.access_token:', response?.access_token)
        const res = await axios.get('http://localhost:8080/api/v1/auth/google/redirect',
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${response?.access_token}`,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          }
        )
        console.log('🚀 ~ onSuccess: ~ res:', res)
      }


      toast.success('Đăng nhập thành công.')
    },
    onError: () => {
      toast.error('Đăng nhập thất bại!')
    }
  })


  return (
    <Button
      fullWidth
      variant='outlined'
      startIcon={<GoogleIcon />}
      onClick={() => login()}
      sx={{ color: 'text.primary' }}
    >
      {txtGoogle}
    </Button>
  )
}

const SocialMedia = (props: IProps) => {
  const { txtFacebook, txtGoogle, txtRedirect, txtsub, urlDirect } = props

  return (
    <>
      <Divider>
        <Typography sx={{ color: 'text.secondary' }}>Hoặc</Typography>
      </Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <GoogleLoginButton txtGoogle={txtGoogle} />
        <Button
          fullWidth
          variant='outlined'
          onClick={() => alert('Sign up with Facebook')}
          startIcon={<FacebookIcon />}
          sx={{ color: 'text.primary' }}
        >
          {txtFacebook}
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          {txtsub}{' '}
          <Link href={urlDirect} variant='body2' sx={{ alignSelf: 'center' }}>
            {txtRedirect}
          </Link>
        </Typography>
      </Box>
    </>
  )
}

export default SocialMedia
