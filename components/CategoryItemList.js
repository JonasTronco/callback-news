import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const Container = styled.div`
  z-index: 2;
  display: grid;
  grid-gap: 25px;
  overflow: scroll;
  padding: 10px 20px;
  position: relative;
  white-space: nowrap;
  grid-auto-flow: column;
  padding-top: ${(p) => p.theme.space * 3.5}px;
  @media screen and (min-width: 768px) {
    overflow: auto;
    padding-top: 10px;
  }
`

const CategoryItemList = (props) => {
  const { data = [] } = props
  return (
    <Container>
      {
        data.length > 0 ?
          data.map(
            (item, index) => <CategoryItem title={item.name} srcImage={item.picture} categoryColor={item.color} id={item.id} key={item.id} />,
          ) :
          <>
            {
              Array.from(Array(7).keys()).map(() => <CategoryItem />)
            }
          </>
      }
    </Container>
  )
}

export default CategoryItemList
