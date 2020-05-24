import styled from 'styled-components'
import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import PostItemList from '../components/PostItemList'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import mockRSS from '../utils/mocks/rss.json'
import categoriesMock from '../utils/mocks/categories.json'
import CategoryItemList from '../components/CategoryItemList'

const posts = mockRSS.rss.channel.item
const recentNews = [posts[0], posts[1], posts[2], posts[3], posts[4], posts[5]]
const favoriteNews = [posts[6], posts[7], posts[8], posts[9], posts[10], posts[11]]

const Title = styled.h1``

const categories = categoriesMock || []

function HomePage(props) {
  useEffect(() => {
    async function fetchData() {
      console.log('hola mundo')
      fetch('https://storage.cloud.google.com/cbn-public/mocks/data-json/categories.json').then((response) => {
        console.log('object')
      })
      console.log('responseText')
    }
    fetchData()

  }, [null])
  const [title] = useState('Callback News - The daily technology newsletter')
  console.log(props)
  return (
    <Layout title={title}>
      <Hero />
      <Title>{title}</Title>
      <CategoryItemList data={categories} />
      <PostItemList title="Recent news" posts={recentNews} />
      <PostItemList title="Favorite news" posts={favoriteNews} />
    </Layout>
  )
}

export default HomePage
