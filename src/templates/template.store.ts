import create from 'zustand'

type StoreType = {
  variables: any
  funcs: (value: any) => void
}

export const useTemplateStore = create<StoreType>(set => ({
  variables: undefined,
  funcs: (value: any) => set(() => ({ variables: value })),
}))
