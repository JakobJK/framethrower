import * as React from 'react'
import { checkInvidividual } from './util'
import { ListItem } from './interfaces'

const Company = ({
  list,
  setList,
  company,
}: {
  list: ListItem[]
  setList: (val: ListItem[]) => void
  company: string
}) => {
  if (!checkInvidividual(list, 'company', company)) {
    setList(
      list.map(x =>
        x.page === 'member'
          ? {
              url: `/admin/company/${company}`,
              display: company,
              page: 'company',
            }
          : x
      )
    )
  }
  return (
    <div>
      Hello
      <p>Hello</p>
    </div>
  )
}

export default Company
