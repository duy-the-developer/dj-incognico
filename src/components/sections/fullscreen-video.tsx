'use client'
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Container } from '@/components/container'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
// import { useHasMounted } from '@/hooks/useHasMounted'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: 'none' })

type FullScreenVideoProps = {
  playing?: boolean
  videoUrl: string
}

export const FullscreenVideo = (props: FullScreenVideoProps) => {
  const { playing: p, videoUrl } = props
  const [playing, setPlaying] = React.useState(p)
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
        start: 'start center',
        end: 'clamp(center center)',
        scrub: true,
        // markers: true,
      },
    })
    gsap.to(_ref.current, {
      scrollTrigger: {
        trigger: _ref.current,
        start: 'start center',
        end: 'clamp(bottom center)',
        onEnter: () => setPlaying(true),
        onEnterBack: () => setPlaying(true),
        onLeave: () => setPlaying(false),
        onLeaveBack: () => setPlaying(false),
        // markers: true,
      },
    })
  })

  // const hasMounted = useHasMounted()
  // if (!hasMounted) return null

  return (
    <section className="py-8 xl:py-0" ref={_ref}>
      <Container>
        <div className="aspect-[11/16] transform-gpu sm:aspect-square md:aspect-video xl:px-60">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            muted={true}
            playing={playing}
          />
        </div>
      </Container>
    </section>
  )
}
