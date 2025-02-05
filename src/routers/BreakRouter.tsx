import { Navigate, Outlet } from 'react-router'

interface IProps {
  isAllowed: boolean
  redirectTo: string
  children?: React.ReactNode
}

const BreakRouter = ({ isAllowed, redirectTo = '/', children }: IProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }
  return children ? children : <Outlet />
}

export default BreakRouter
