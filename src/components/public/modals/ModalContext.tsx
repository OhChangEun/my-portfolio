import { createContext, type ComponentType } from "react";
import type { ModalProps } from "./types";

interface ModalContextValue {
  addModal: (
    Component: ComponentType<ModalProps>,
    props: Omit<ModalProps, "id" | "onClose">
  ) => string;
  removeModal: (id: string) => void;
  removeAllModals: () => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined
);
