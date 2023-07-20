import { axios } from '#root/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '#root/libs/react-query'
import { NotionBlock } from '@9gustin/react-notion-render'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

interface IGetBlogResponse {
  metadata: any
  results: NotionBlock[]
}

export const queryFunc = (slug: string): Promise<IGetBlogResponse> => {
  return axios.get(`/blog/${slug}`)
}

type QueryFnType = typeof queryFunc

export const useBlogDetail = (slug: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useBlogDetail' + slug],
    queryFn: () => queryFunc(slug),
  })
}
