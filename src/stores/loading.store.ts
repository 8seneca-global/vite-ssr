import { create } from 'zustand'

type StoreType = {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

export const useLoadingStore = create<StoreType>(set => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
}))
