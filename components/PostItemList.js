import React from 'react'
import styled from 'styled-components'
import PostItem from './PostItem'

const Container = styled.div`
  margin: auto;
  width: calc(100% - 32px);
  box-sizing:content-box;
  width:100%;
`

const Main = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(${(props) => props.maxWidth || 'min(350px,100%)'}, 1fr));
  grid-gap:${(props) => props.theme.space * 3}px;
  padding:0 ${(props) => props.theme.space * 3}px;
  /* justify-content:space-around; */
`

const Title = styled.h2`
  font-size:28px;
  font-family:${(props) => props.theme.fontFamilyTitle};
  padding:0 ${(props) => props.theme.space * 3}px;
  padding-top: 0px;
  margin: 18px 0px;
  @media screen and (min-width: 768px) {
    margin: 23px 0px;
  }
  /* padding-top:${(props) => props.theme.space * 2}px; */
`

const PostItemList = ({ posts, title, maxWidth, className }) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <Main maxWidth={maxWidth}>
        {
          posts.map((post) => <PostItem post={post} key={post.id} />)
        }
      </Main>
    </Container>
  )
}

export default PostItemList
