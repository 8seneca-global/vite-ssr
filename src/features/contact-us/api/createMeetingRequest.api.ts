import useNotification from '#root/hooks/useNotification'
import { axios } from '#root/libs/axios'
import { MutationConfig } from '#root/libs/react-query'
import { BaseResponse } from '#root/types/root-types'
import { useMutation } from 'react-query'

type IPayload = {
  name: string
  email: string
  date: string
}

const mutationFunc = (payload: IPayload): Promise<BaseResponse> => {
  return axios.post('/meeting-requests', payload)
}

type QueryFnType = typeof mutationFunc

export const useCreateMeetingRequestMutation = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => showNotification({ msg: err.message, variant: 'error' }),
    ...config,
  })
}
