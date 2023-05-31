import React from 'react'
import styled from 'styled-components'
import VideoBanner from '../images/video-banner.jpg'
import ReactPlayer from 'react-player'

import { PlayCircleOutlined } from '@ant-design/icons'

function Video() {
  return (
    <>
      <section className='section video' aria-label='video'>
        <div className='container'>
          <h2 className='h2 card-title'>Explore Fitness Life</h2>

          <div className='video-card has-before has-bg-image'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=fLLScgWQcHc'
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Video
