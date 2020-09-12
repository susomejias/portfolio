import React, { useRef } from 'react'
import 'isomorphic-fetch'

import usePaginationArray from '../hooks/usePaginateArray'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import DevtoService from '../services/DevtoService'
import CardPostDevto from '../components/CardPostDevto/CardPostDevto'

interface DevtoPostsProps {
  posts: DevtoPost[]
}

const DevtoPosts = ({ posts }: DevtoPostsProps) => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    posts,
    2
  )

  const refTriggerElement = useRef(null)
  useInfiniteScroll(refTriggerElement, next)

  return (
    <div className="wrapper">
      <h1 className="page-title tracking-in-expand">Dev.to posts</h1>
      {dataDisplayed.map((devtoPost: DevtoPost, index: number) => {
        return (
          <CardPostDevto
            key={index}
            image={devtoPost.cover_image}
            title={devtoPost.title}
            description={devtoPost.description}
            commentsCount={devtoPost.comments_count}
            reactions={devtoPost.positive_reactions_count}
            url={devtoPost.canonical_url}
            tags={devtoPost.tag_list}
          />
        )
      })}
      {currentPage < maxPage ? (
        <p
          className="infinite-scroll-show-more"
          onClick={next}
          ref={refTriggerElement}
        >
          Pulsa aquí para mostrar más
        </p>
      ) : null}

      <i
        onClick={() => {
          window.scrollTo(0, 0)
        }}
        className="scroll-top-button fas fa-angle-up"
      ></i>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const posts = await DevtoService.getDevtoPosts()
  return { props: { posts }, revalidate: 7200 /* In 3 hours */ }
}

export default React.memo(DevtoPosts)
