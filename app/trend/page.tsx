import React from 'react'
import TrendingCard from '@/components/TrendingCard'
function page() {
  return (
    <div className='grid grid-cols-2 items-center justify-center p-10 gap-4'>
      {Array.from({ length: 10 }).map((_, i) => (
        <TrendingCard key={i} />
      )
      )}
    </div>
  )
}

export default page