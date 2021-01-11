import create from 'zustand';

const useEditDialogStore = create(set => ({
  open: false,
  setOpen: open => set(state => ({ ...state, open })),
  row: {},
  setRow: row => set(state => ({ ...state, row })),
}));

export default useEditDialogStore;
