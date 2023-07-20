import { HttpStatus } from '#root/constants/httpStatus'
import useNotification from '#root/hooks/useNotification'
import { axios } from '#root/libs/axios'
import { MutationConfig } from '#root/libs/react-query'
import { BaseResponse, SubscriberDto } from '#root/types/root-types'
import { useMutation } from 'react-query'

const mutationFunc = (payload: SubscriberDto): Promise<BaseResponse> => {
  return axios.post('/subscriber', payload)
}

type QueryFnType = typeof mutationFunc

export const useCreateSubscriberMutation = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => {
      if (err.response.data.statusCode === HttpStatus.BAD_REQUEST) {
        showNotification({ msg: err.response.data.message, variant: 'warning' })
      } else {
        showNotification({ msg: err.response.data.message, variant: 'error' })
      }
    },
    ...config,
  })
}
