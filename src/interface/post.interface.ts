export interface IPostUser {
  id: string
  name: string
  avatar: string
  url: string
}

export interface IPostReactions {
  like?: number
  love?: number
  haha?: number
  sad?: number
  angry?: number
}

export interface IPostComment {
  id: string
  user: IPostUser
  content: string
  createdAt: string
  reactions?: IPostReactions
  replies?: IPostComment[]
}

export interface IPost {
  id: string
  user: IPostUser
  content: string
  images?: string[]
  createdAt: string
  reactions?: IPostReactions
  comments?: IPostComment[]
  shares?: number
}