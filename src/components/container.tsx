import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-12">{children}</div>
  )
}
