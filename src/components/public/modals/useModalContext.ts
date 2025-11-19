import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx)
    throw new Error("useModalContext는 ModalProvider에서 사용되어야 합니다.");
  return ctx;
};
