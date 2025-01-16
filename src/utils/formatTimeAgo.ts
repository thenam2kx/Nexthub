import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'

dayjs.extend(relativeTime)
dayjs.locale('vi')
const formatRelativeTime = (timestamp: number): string => {
  return dayjs(timestamp).fromNow()
}

export default formatRelativeTime
