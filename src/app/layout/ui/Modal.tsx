import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from 'react-dom'
import { updateStatus, useAppDispatch, useAppSelector } from "@/app/store";
import { Loader } from "@/shared/ui/loader";
import { NotificationMessage } from "@/shared/ui/notification-message";

import '../styles/Modal.css'

interface IProps extends PropsWithChildren {
  isOpen: boolean,
  setIsOpen?: (isOpen: boolean) => void
}

const time = 2000

export const Modal: React.FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  const status = useAppSelector(state => state.main.status)
  const dispatch = useAppDispatch()

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let portalRoot: Element | null = null

    if (ref.current) {
      portalRoot = document.querySelector('#portal')
      portalRoot?.appendChild(ref.current);
    }
    else {
      ref.current = document.createElement('div')
    }

    return () => {
      ref.current && portalRoot && portalRoot.removeChild(ref.current);
    };
  }, [ref.current]);

  useEffect(() => {
    if (status === 'success') {
      setIsOpen?.(false)

      setTimeout(() => {
        dispatch(updateStatus('panding'))
      }, time)
    }
  }, [status])

  return ref.current && createPortal(
    <>
      {status === 'success' && setIsOpen
        ? <NotificationMessage />
        :
        <div
          className={"cursor-pointer " + (isOpen ? "modal active" : "modal")}
          onClick={() => status !== 'loading' && setIsOpen?.(false)}
        >
          <div onClick={e => e.stopPropagation()} className={'cursor-default ' + (status === 'loading' ? 'blur-sm ' : '')}>
            {children}
          </div>
          {status === 'loading' && <Loader className={'absolute'} />}
        </div>
      }
    </>,
    ref.current
  )
}