import { axios } from '#root/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '#root/libs/react-query'
import { format } from 'date-fns'
import { useQuery } from 'react-query'

export type BlogItemType = {
  id: string
  title: string
  content: string
  date: string
  img: string
  slug: string
}

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

export type BlogListResponse = BlogItemType[]

export const queryFunc = async (size: string): Promise<BlogListResponse> => {
  console.log('kkkk')
  const data: any = await axios.get('/blog?isFeatured=true&pageSize=' + size)
  console.log('xxx', data)
  const formattedData = data.results.map((item: any) => {
    return {
      id: item.id,
      title: item.properties.Name.title[0]?.plain_text,
      content: item.properties.Summary.rich_text[0]?.plain_text,
      date: format(new Date(item.created_time), 'MMM dd, yyyy'),
      isBLogTheme: false,
      img: item.cover?.file?.url || item.cover?.external.url,
      slug: item.properties.Slug?.rich_text[0]?.plain_text,
    }
  })
  return formattedData
}

type QueryFnType = typeof queryFunc

export const useBlogList = (size: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useBlogList'],
    queryFn: () => queryFunc(size),
  })
}
