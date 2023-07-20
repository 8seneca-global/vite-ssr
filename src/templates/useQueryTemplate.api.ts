import { ExtractFnReturnType, QueryConfig } from '#root/libs/react-query'
import axios, { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

export const queryFunc = ({}: QueryDto): Promise<AxiosResponse> => {
  return axios.get(`url`, {
    headers: {},
  })
}

type QueryFnType = typeof queryFunc

export const useQueryTemplate = ({ config }: QueryDto) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useQueryFunc'],
    queryFn: () => queryFunc({}),
    ...config,
  })
}
