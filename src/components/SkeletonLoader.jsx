import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="">

    <div className="grid gap-4 mb-4">
    <div className="rounded-xl overflow-hidden">
      <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 animate-pulse" />
    </div>
    <div className="grid gap-2">
      <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </div>
    </div>
  </div>
    <div className="grid gap-4">
    <div className="rounded-xl overflow-hidden">
      <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 animate-pulse" />
    </div>
    <div className="grid gap-2">
      <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </div>
    </div>
  </div>

    </div>
  )
}

export default SkeletonLoader