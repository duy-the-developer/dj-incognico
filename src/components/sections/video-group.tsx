import React from 'react'
import { FullscreenVideo } from './fullscreen-video'

const videos = [
  'https://vimeo.com/905247281',
  'https://vimeo.com/905247281',
  'https://vimeo.com/905247281',
  'https://vimeo.com/905247281',
]

export const VideoGroup = () => {
  return (
    <div>
      {videos.map((videoUrl, i) => (
        <FullscreenVideo
          key={videoUrl.concat(i.toString())}
          videoUrl={videoUrl}
        />
      ))}
    </div>
  )
}
