export interface IModalProps {
  children?: React.ReactNode;
  onClose: () => void;
}

export interface IModalPhotoProps {
  onClose: () => void;
  onCameraSelect: () => void;
  onGallerySelect: () => void;
}

export interface IStatusModalProps {
  onClose: () => void;
  type: string; // 'success' | 'error'
  title: string;
  message: any;
  orderId?: string;
  widthImage: number;
  heightImage: number;
  topImage: number;
  rightImage: number;
}
