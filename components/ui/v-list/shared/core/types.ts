import { type IconPropType } from '~/core/types/components'

export interface IListItem {
  icon?: IconPropType
  title?: string
  text?: string
  duration?: string
  price?: number
}

export interface IListService {
  title?: string
  text?: string
  list?: IListItem[]
  stages?: IListItem[]
  duration?: string
  price?: string
}
