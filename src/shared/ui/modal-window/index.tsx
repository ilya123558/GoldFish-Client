import React from 'react';
import {createPortal} from 'react-dom';

export const ModalWindow = () => {
  const portal = document.getElementById('portal')

  if (portal) {
    return createPortal(
      <div className='fixed left-0 right-0 top-0 bottom-0 bg-primary-op z-30'></div>,
      portal
    )
  }

  return
};