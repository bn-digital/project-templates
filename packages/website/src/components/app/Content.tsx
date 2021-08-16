import { useMemo } from 'react'
import { SectionFragment, useSectionsQuery } from '../../graphql'

/**
 * Returns single content block by slug
 * @param {string} slug
 * @return {SectionFragment|undefined}
 */
function useContent(slug: string): SectionFragment | undefined {
  const { loading, data } = useSectionsQuery()
  const content = useMemo(() => (!loading && data?.sections ? data.sections : []), [loading, data])
  return content.find(it => it.slug === slug)
}

export { useContent }
