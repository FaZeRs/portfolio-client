import type Image from './image'

export interface Link {
  id: string
  title: string
  url: string
  icon: string
}

export interface Tag {
  id: string
  title: string
}

export default interface Project {
  id: string
  title: string
  description: string
  images: Image[]
  links: Link[]
  tags: Tag[]
}
