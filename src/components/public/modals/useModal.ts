import type { ComponentType } from "react";
import type { ModalProps } from "./types";
import { useModalContext } from "./useModalContext";

export const useModal = () => {
  const { addModal, removeModal, removeAllModals } = useModalContext();

  function openModal<T extends ModalProps>(
    Components: ComponentType<T>,
    props: Omit<T, "id" | "onClose">
  ): string;

  function openModal<T extends ModalProps>(
    Component: ComponentType<T>,
    props: Omit<T, "id" | "onClose">
  ): string {
    const id = addModal(
      Component as ComponentType<ModalProps>,
      {
        ...props,
      } as Omit<ModalProps, "id" | "onClose">
    );

    return id;
  }

  const closeModal = (id: string) => removeModal(id);

  return { openModal, closeModal, removeAllModals };
};
