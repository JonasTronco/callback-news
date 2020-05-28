import { useState } from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import PostItemList from '../components/PostItemList'
import UserData from '../components/UserData'

const Title = styled.h1`
  margin: 20px;
`

function ProfilePage({ posts = {} }) {
  const favoriteNews = posts ? [posts[0], posts[1], posts[3], posts[4], posts[18]] : []
  const [title] = useState('Profile Data')

  return (
    <Layout title={title}>
      <Title>{title}</Title>
      <UserData />
      <PostItemList title="My Favorite news" posts={favoriteNews} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  try {
    const [resPosts] = await Promise.all([
      fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/news.json'),
    ])

    const posts = await resPosts.json()
    res.statusCode = 200
    return { props: { posts, statusCode: res.statusCode } }

  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default ProfilePage