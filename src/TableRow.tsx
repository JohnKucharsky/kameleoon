import { memo } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router'
import { Site, Status, Test, Type } from '@/@types/types.ts'
import { capitalizeFirstLetter, cleanUrl } from '@/utils.ts'

const testTypeToText: Record<keyof typeof Type, string> = {
  CLASSIC: 'Classic',
  SERVER_SIDE: 'Server-side',
  MVT: 'MVT',
}

export default memo(TableRow)
function TableRow({
  test,
  sitesObj,
}: {
  test: Test
  sitesObj: Record<string | number, Site>
}) {
  const navigate = useNavigate()

  const linkTo = (status: keyof typeof Status, id: number) => {
    navigate(`${status === 'DRAFT' ? 'finalize' : 'results'}/${id}`)
  }

  return (
    <tr className="pb">
      <td
        className={clsx({
          'row-border-dark-red': sitesObj[test.siteId]?.url.includes('market'),
          'row-border-violet': sitesObj[test.siteId]?.url.includes('delivery'),
          'row-border-violet-2': sitesObj[test.siteId]?.url.includes('games'),
        })}
      >
        <h6 className="table-bold-text">{test.name}</h6>
      </td>
      <td>
        <p className="table-normal-text">{testTypeToText[test.type]}</p>
      </td>
      <td className={test.status.toLowerCase()}>
        <p>{capitalizeFirstLetter(test.status)}</p>
      </td>
      <td>
        <p className="table-normal-text">
          {cleanUrl(sitesObj[test.siteId]?.url)}
        </p>
      </td>
      <td>
        <button
          onClick={() => linkTo(test.status, test.id)}
          className={clsx([
            'base-button',
            test.status === 'DRAFT' ? 'finalize' : 'results',
          ])}
        >
          <div className="table-normal-text">
            {test.status === 'DRAFT' ? 'Finalize' : 'Results'}
          </div>
        </button>
      </td>
    </tr>
  )
}
