import { styled, Theme } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'

interface IProps {
  handleClick: () => void
  text?: string
  icon?: React.ReactNode
  variant?: 'text' | 'outlined' | 'contained'
  size?: 'small' | 'medium' | 'large'
  styleBtn?: React.CSSProperties
  color?: 'primary' | 'secondary' | 'danger'
}

const getButtonStyles = (theme: Theme, color: string) => {
  switch (color) {
  case 'primary':
    return {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    }
  case 'secondary':
    return {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark
      }
    }
  case 'danger':
    return {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.error.dark
      }
    }
  default:
    return {}
  }
}

const CustomButton = styled(Button)<ButtonProps & { colorType?: string }>(
  ({ theme, colorType = 'primary' }) => ({
    textTransform: 'none',
    borderRadius: 8,
    padding: theme.spacing(1, 2),
    ...getButtonStyles(theme, colorType)
  })
)

const CommonButton: React.FC<IProps> = (props) => {
  const {
    handleClick,
    text = 'Button default',
    icon,
    variant = 'contained',
    size = 'medium',
    styleBtn,
    color = 'primary'
  } = props

  return (
    <CustomButton
      onClick={handleClick}
      startIcon={icon}
      variant={variant}
      size={size}
      colorType={color}
      sx={styleBtn}
    >
      {text}
    </CustomButton>
  )
}

export default CommonButton
