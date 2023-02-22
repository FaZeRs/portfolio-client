import { describe, expect, it } from 'vitest'
import { formatDate } from '~/helpers'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2022-02-22')
    const formattedDate = formatDate(date)
    expect(formattedDate).toEqual('February 2022')
  })

  it('handles invalid date gracefully', () => {
    const date = 'not a date'
    const formattedDate = formatDate(date)

    expect(formattedDate).toBeNull()
  })
})
