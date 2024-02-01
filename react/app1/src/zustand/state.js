import { create } from 'zustand';

const useStore = create(
  (set) => (
    {
      edad: 0,
      incEdad: () => set((state) => ({ edad: state.edad + 1 })),
      resetEdad: () => set({ edad: 0 }),
    }
  )
);

export default useStore;