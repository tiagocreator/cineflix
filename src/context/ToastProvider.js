import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from './ToastContext';
import { Toast } from '../components/Toast';

function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);

  return first + second;
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const open = (content) =>
    setToasts((currentToasts) => [...currentToasts, { id: generateUEID(), content }]);
  const close = (id) =>
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {createPortal(
        <div className='fixed top-0 left-0 z-50'>
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => close(toast.id)}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  );
};
