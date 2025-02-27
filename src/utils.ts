export function keyBy<T, K extends keyof T | ((item: T) => string | number)>(
  collection: T[],
  iteratee: K,
): Record<string | number, T> {
  const result: Record<string | number, T> = {}

  for (const item of collection) {
    const key =
      typeof iteratee === 'function'
        ? (iteratee as (item: T) => string | number)(item)
        : (item[iteratee as keyof T] as string | number)

    result[key] = item
  }

  return result
}

export function cleanUrl(url: string | undefined): string {
  if (!url) return 'N/A'
  return url.replace(/^(https?:\/\/)?(www\.)?/, '')
}
