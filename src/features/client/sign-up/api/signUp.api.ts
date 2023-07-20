import useNotification from '#root/hooks/useNotification'
import { axios } from '#root/libs/axios'
import { MutationConfig } from '#root/libs/react-query'
import { SignUpResponse, UserRegisterDto } from '#root/types/root-types'
import { useMutation } from 'react-query'

export const mutationFunc = (payload: UserRegisterDto): Promise<SignUpResponse> => {
  return axios.post('/auth/register', payload)
}

type QueryFnType = typeof mutationFunc

export const useSignUpMutation = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => showNotification({ msg: err.message, variant: 'error' }),
    ...config,
  })
}
