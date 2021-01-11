import create from 'zustand';

const useMessageStore = create(set => ({
  open: false,
  setOpen: open => set(state => ({ ...state, open })),
  message: '',
  setMessage: message => set(state => ({ ...state, message })),
  severity: 'info',
  setSeverity: severity => set(state => ({ ...state, severity })),
  autoHideDuration: 3000,
  setAutoHideDuration: autoHideDuration => set(state => ({ ...state, autoHideDuration })),
  onSuccess: message => set(state => ({ ...state, message, open: true, severity: 'success' })),
  onError: message => set(state => ({ ...state, message, open: true, severity: 'error' })),
}));

export default useMessageStore;
