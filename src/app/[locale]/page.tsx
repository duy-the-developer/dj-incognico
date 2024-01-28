import { unstable_setRequestLocale } from 'next-intl/server'
import { FullscreenVideo } from '@/components/sections/fullscreen-video'
import { VideoGroup } from '@/components/sections/video-group'
import { Locale } from '@/i18n'

type PageProps = Readonly<{
  params: { locale: Locale }
}>

export default function Home({ params }: PageProps) {
  const { locale } = params
  unstable_setRequestLocale(locale)

  return (
    <main className="">
      <VideoGroup />
    </main>
  )
}
