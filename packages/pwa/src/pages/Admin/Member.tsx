import * as React from 'react'
import { checkInvidividual } from './util'
import { ListItem } from './interfaces'

const Member = ({
  list,
  setList,
  username,
}: {
  list: ListItem[]
  setList: (val: ListItem[]) => void
  username: string
}) => {
  if (!checkInvidividual(list, 'member', username)) {
    setList(
      list.map(x =>
        x.page === 'member'
          ? {
              url: `/admin/member/${username}`,
              display: username,
              page: 'member',
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

export default Member
