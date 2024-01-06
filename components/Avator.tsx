import React from 'react'

export default function Avatar() {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="inline-block h-12 w-12 rounded-full"
        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
        alt="Dan_Abromov"
      />
      <span className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">Dan Abromov</span>
        <span className="text-sm font-medium text-gray-500">@dan_abromov</span>
      </span>
    </div>
  )
}
