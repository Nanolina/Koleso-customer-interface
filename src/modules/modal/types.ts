export interface IModalProps {
  children?: React.ReactNode;
  onClose: () => void;
}

export interface IModalPhotoProps {
  onClose: () => void;
  onCameraSelect: () => void;
  onGallerySelect: () => void;
}
