import { useState } from 'react'
import { toast } from 'react-toastify'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ForgotPassword from './forgot.password'
import CustomizeCard from '@/pages/auth/customizations/card.customize'
import { SitemarkIcon } from '@/pages/auth/customizations/icons.customize'
import CustomizeContainer from '@/pages/auth/customizations/container.customize'
import SocialMedia from '../customizations/social.media'
import { useNavigate } from 'react-router'
import { ISignin, reSendEmailAPI, signin } from '@/services/api'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LoadingButton from '@mui/lab/LoadingButton'

const Signin = () => {
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }


  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (emailError || passwordError) {
      toast.error('🦄 Email or password invalid!')
      return
    }

    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string
    const password= data.get('password') as string
    // const remember= data.get('remember')

    const condition: ISignin = {
      username: email as string,
      password: password as string
    }

    try {
      setIsLoading(true)
      const res = await signin(condition)

      if (res.statusCode === 401) {
        toast.error(`🦄 ${res.message}`)
        const resResend = await reSendEmailAPI(email)
        if (resResend.data) {
          navigate(`/verify?email=${encodeURIComponent(email)}`)
        }
      }

      if (res.data) {
        toast.success(`🦄 ${res.message}`)

        // if (remember) {
        //   localStorage.setItem('access_token', res.data.access_token)
        // }

        localStorage.setItem('access_token', res.data.access_token)
        navigate('/')
      } else {
        toast.error(`🦄 ${res.message}`)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ handleSubmit ~ error:', error)
    } finally {
      setIsLoading(false)
    }

  }

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement

    let isValid = true

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true)
      setEmailErrorMessage('Please enter a valid email address.')
      isValid = false
    } else {
      setEmailError(false)
      setEmailErrorMessage('')
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true)
      setPasswordErrorMessage('Password must be at least 6 characters long.')
      isValid = false
    } else {
      setPasswordError(false)
      setPasswordErrorMessage('')
    }

    return isValid
  }


  // useEffect(() => {
  //   const getToken = localStorage.getItem('access_token')
  //   if (getToken) {
  //     navigate('/')
  //   }
  // }, [navigate])

  return (
    <CustomizeContainer>
      <CustomizeCard>
        <SitemarkIcon />
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Đăng nhập
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="email@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? 'error' : 'primary'}
              size='small'
              sx={{ mt: '6px' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password" sx={{ '&.Mui-focused': { color: 'inherit' } }}>Mật khẩu</FormLabel>
            <OutlinedInput
              id="password"
              size='small'
              name="password"
              autoFocus
              required
              fullWidth
              placeholder="••••••"
              autoComplete="current-password"
              error={passwordError}
              color={passwordError ? 'error' : 'primary'}
              type={showPassword ? 'text' : 'password'}
              sx={{ mt: '6px' }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff fontSize='small' /> : <Visibility fontSize='small' />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {!!passwordErrorMessage && (
              <FormHelperText error id="accountId-error">
                {passwordErrorMessage}
              </FormHelperText>
            )}
          </FormControl>
          <FormControlLabel
            name='remember'
            control={<Checkbox value="remember" color="primary" />}
            label="Ghi nhớ cho lần sau"
            sx={{ width: 'fit-content' }}
          />
          <ForgotPassword open={open} handleClose={handleClose} />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
            sx={{
              opacity: isLoading ? 0.5 : 1,
              pointerEvents: isLoading ? 'none' : 'all'
            }}
          >
            Đăng nhập
          </Button> */}
          <LoadingButton
            type="submit"
            size="medium"
            onClick={validateInputs}
            loading={isLoading}
            loadingPosition="center"
            variant="contained"
            sx={{ '&.Mui-disabled': { bgcolor: 'primary.main' } }}
          >
            Đăng nhập
          </LoadingButton>

          <Link
            component="button"
            type="button"
            onClick={handleClickOpen}
            variant="body2"
            sx={{ alignSelf: 'center' }}
          >
            Quên mật khẩu?
          </Link>
        </Box>
        <SocialMedia
          txtFacebook='Đăng nhập với Facebook'
          txtGoogle='Đăng nhập với Google'
          txtsub='Chưa có tài khoản ?'
          txtRedirect='Đăng ký'
          urlDirect='/signup'
        />
      </CustomizeCard>
    </CustomizeContainer>
  )
}

export default Signin
