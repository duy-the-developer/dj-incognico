'use client'
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Container } from '@/components/container'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: 'none' })

export const FullscreenVideo = () => {
  const _ref =
    React.useRef<HTMLElement>() as React.MutableRefObject<HTMLElement>

  useGSAP(() => {
    gsap.set(_ref.current, {
      transform: 'perspective(1000px) rotateX(10deg)',
    })
    gsap.to(_ref.current, {
      transform: 'perspective(1000px) rotateX(0deg)',
      scrollTrigger: {
        trigger: _ref.current,
        // markers: true,
        start: 'start center',
        end: 'center center',
        scrub: true,
      },
    })
  })

  return (
    <section className="py-8" ref={_ref}>
      <Container>
        <div className="aspect-[11/16] transform-gpu sm:aspect-square md:aspect-video">
          <ReactPlayer
            url="https://vimeo.com/905247281"
            width="100%"
            height="100%"
            controls={true}
            muted={true}
            playing={true}
          />
        </div>
      </Container>
    </section>
  )
}
