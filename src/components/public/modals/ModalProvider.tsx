import {
  useCallback,
  useEffect,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import type { ModalItem, ModalProps } from "./types";
import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalItem[]>([]);

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modals.length]);

  const removeModal = useCallback((id: string) => {
    setModals((prev) => prev.filter((m) => m.id !== id));
  }, []);

  const removeAllModals = useCallback(() => {
    setModals([]);
  }, []);

  const addModal = useCallback(
    (
      Component: ComponentType<ModalProps>,
      props: Omit<ModalProps, "id" | "onClose">
    ): string => {
      const id = crypto.randomUUID();

      const newModal: ModalItem = {
        id,
        Component: Component,
        props: { ...props, id, onClose: () => removeModal(id) } as ModalProps,
      };

      setModals((prev) => [...prev, newModal]);
      return id;
    },
    [removeModal]
  );

  return (
    <ModalContext.Provider value={{ addModal, removeModal, removeAllModals }}>
      {children}
      {modals.length > 0 &&
        createPortal(
          <>
            <div className="fixed inset-0 z-1000 bg-black/50" />
            {modals.map(({ id, Component, props }) => (
              <ModalContainer
                key={id}
                title={props.title}
                onClose={props.onClose}
              >
                <Component {...props} />
              </ModalContainer>
            ))}
          </>,
          document.body
        )}
    </ModalContext.Provider>
  );
};
