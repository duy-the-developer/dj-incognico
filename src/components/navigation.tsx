import React from 'react'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/container'
import { cn } from '@/lib/utils'

const links = [
  { id: 1, label: 'contact', path: '/#contact' },
  { id: 2, label: 'home', path: '/' },
  { id: 3, label: 'about', path: '/about' },
]

export const Navigation = () => {
  const t = useTranslations('navigation')

  return (
    <nav>
      <Container>
        <ul className="flex items-center justify-between py-2 lg:py-4">
          {links.map(({ id, label, path }) => (
            <li
              key={id}
              className={cn(
                'uppercase',
                label === 'home'
                  ? 'h3 font-display'
                  : 'text-[12px] lg:text-[0.948vw]',
              )}
            >
              <Link href={path}>{t(label)}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
