import React, { useRef } from 'react'

import usePaginationArray from '../hooks/usePaginateArray'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import talks from '../assets/data/talks'
import Card from '../components/Card/Card'

export default function Talks() {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    talks,
    2
  )

  const refTriggerElement = useRef(null)
  useInfiniteScroll(refTriggerElement, next)

  return (
    <div className="wrapper">
      <h1 className="page-title tracking-in-expand">Ponencias</h1>
      {dataDisplayed.map((talk: Talk, index) => {
        return (
          <Card
            key={index}
            image={talk.image}
            title={talk.title}
            description={talk.description}
            showPrivateCodeMessagge={talk.url === '#'}
            url={talk.url}
            authors={talk.speakers}
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
