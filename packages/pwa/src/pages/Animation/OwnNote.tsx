import * as React from 'react'
import Note from '../../components/Note'
import { useGetOwnNoteQuery } from '../../graphql/generated/hooks'
import { VNote } from '../../graphql/generated/types'

// TODO: Currently we can use the same component and generated type, for everyone elses note and your own note,
// but we might have to change this in the future

const OwnNote = ({
  submissionId,
  isLatest,
}: {
  submissionId: string
  isLatest: boolean
}) => {
  const { loading, error, data } = useGetOwnNoteQuery({
    variables: { submissionId },
  })

  if (loading) return null
  if (error) return null

  const notes = data?.allVOwnNotes?.nodes ?? []

  return (
    <>
      {notes.map(x => (
        <Note
          key={`key_${x.id}`}
          note={x as VNote}
          isLatest={isLatest}
          submissionId={submissionId}
        />
      ))}
    </>
  )
}

export default OwnNote
