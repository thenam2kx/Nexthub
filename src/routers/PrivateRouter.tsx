import { useAppSelector } from '@/redux/hooks'
import { Navigate, Outlet, useLocation } from 'react-router'

interface IProps {
  children?: React.ReactNode
}

const PrivateRouter = ({ children }: IProps) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to='/signin' state={{ from: location }} replace />
  }
  return children ? children : <Outlet />
}

export default PrivateRouter
