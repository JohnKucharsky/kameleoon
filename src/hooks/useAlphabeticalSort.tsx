import { useState } from 'react'
import { Site, Test } from '@/@types/types.ts'
import { cleanUrl } from '@/utils.ts'

const statusPriority: Record<string, number> = {
  DRAFT: 1,
  STOPPED: 2,
  PAUSED: 3,
  ONLINE: 4,
}

export default function useAlphabeticalSort({
  sitesObj,
  tests,
}: {
  sitesObj: Record<number, Site>
  tests: Test[]
}) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Test | null
    direction: 'asc' | 'desc'
  } | null>(null)

  const sortedTests = [...tests].sort((a, b) => {
    if (!sortConfig) return 0

    const { key, direction } = sortConfig
    let comparison = 0

    switch (key) {
      case 'siteId':
        {
          const siteA = cleanUrl(sitesObj[a.siteId]?.url || '')
          const siteB = cleanUrl(sitesObj[b.siteId]?.url || '')
          comparison = siteA.localeCompare(siteB)
        }
        break
      case 'status': {
        comparison = statusPriority[a.status] - statusPriority[b.status]
        break
      }
      default: {
        if (key) {
          comparison = String(a[key]).localeCompare(String(b[key]))
        }
      }
    }

    return direction === 'asc' ? comparison : -comparison
  })

  return { sortedTests, sortConfig, setSortConfig }
}
