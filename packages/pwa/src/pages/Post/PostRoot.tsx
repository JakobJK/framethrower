import * as React from 'react'
import TitleComponent from '../../context/TitleComponent'
import { RouteComponentProps } from 'react-router'
import { News as NewsType } from '../../graphql/generated/types'
import { useGetPostBySlugQuery } from '../../graphql/generated/hooks'
import WithPermission from '../../context/WithPermission'
import Comments from './Comments'
import RegisterComment from './RegisterComment'
import FourOhFour from '../../components/FourOhFour'
import Post from './Post'

const PostRoot = (props: RouteComponentProps<{ slug: string }>) => {
  const { slug } = props.match.params

  const { loading, error, data } = useGetPostBySlugQuery({
    variables: { slug },
  })

  if (loading) return null
  if (error) return <p>Error :(...</p>

  const idExists = data?.getPostBySlug?.id ?? false
  if (!idExists) {
    return <FourOhFour />
  }
  const news = data?.getPostBySlug ?? ({} as NewsType)

  const { createdAt, title, id, body } = news

  return (
    <>
      <TitleComponent title={title} />
      <div className='flex justify-center'>
        <div className='flex-row p-2 max-w-2xl w-full justify-between items-center justify-items-center	bg-gray-800 my-8 mx-0 shadow rounded'>
          <Post {...news} />
          <div className='w-full px-16'>
            <Comments slug={slug} />
            <WithPermission permission='loggedIn'>
              <RegisterComment newsId={id} />
            </WithPermission>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostRoot
