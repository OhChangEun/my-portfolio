export interface ModalProps {
  id?: string;
  title?: string;
  onClose: () => void;
}

export interface ModalItem {
  id: string;
  Component: React.ComponentType<ModalProps>;
  props: ModalProps;
}
