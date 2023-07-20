import useNotification from '#root/hooks/useNotification'
import { MutationConfig } from '#root/libs/react-query'
import axios from 'axios'
import { useMutation } from 'react-query'

export type MutationPayload = {}

export const mutationFunc = ({}: MutationPayload): Promise<void> => {
  return axios.post(`url`, {})
}

type QueryFnType = typeof mutationFunc

export const useMutationTemplate = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => showNotification({ msg: err.message, variant: 'error' }),
    ...config,
  })
}
