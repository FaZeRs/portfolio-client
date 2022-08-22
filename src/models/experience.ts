import type Image from './image'

export default interface Experience {
  id: string
  logo: Image
  title: string
  organisation: string
  website: string
  description: string
  dateFrom: Date
  dateTo: Date
}
