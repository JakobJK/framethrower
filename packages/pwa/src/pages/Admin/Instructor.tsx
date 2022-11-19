import * as React from 'react'
import { checkInvidividual } from './util'
import { ListItem } from './interfaces'

const Instructor = ({
  list,
  setList,
  username,
}: {
  list: ListItem[]
  setList: (val: ListItem[]) => void
  username: string
}) => {
  if (!checkInvidividual(list, 'instructor', username)) {
    setList(
      list.map(x =>
        x.page === 'instructor'
          ? {
              url: `/admin/instructor/${username}`,
              display: username,
              page: 'instructor',
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

export default Instructor
