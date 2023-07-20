import useNotification from '#root/hooks/useNotification'
import { axios } from '#root/libs/axios'
import { MutationConfig } from '#root/libs/react-query'
import { LoginDto, LoginResponse } from '#root/types/root-types'
import { useMutation } from 'react-query'

export const mutationFunc = (payload: LoginDto): Promise<LoginResponse> => {
  return axios.post('/auth/login', payload)
}

type QueryFnType = typeof mutationFunc

export const useSignInMutation = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => showNotification({ msg: err.message, variant: 'error' }),
    ...config,
  })
}
