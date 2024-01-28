import { unstable_setRequestLocale } from 'next-intl/server'
import { PageProps } from './layout'
import { FullscreenVideo } from '@/components/sections/fullscreen-video'

export default function Home({ params }: PageProps) {
  const { locale } = params
  unstable_setRequestLocale(locale)

  return (
    <main className="">
      <FullscreenVideo />
      <FullscreenVideo />
      <FullscreenVideo />
      <FullscreenVideo />
    </main>
  )
}
