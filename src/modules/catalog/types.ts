import { ImageSourcePropType } from 'react-native';

export interface ICatalogItemType {
  id: string;
  image?: ImageSourcePropType;
  title: string;
}

export interface ICategoryType extends ICatalogItemType {
  subcategories?: ICatalogItemType[];
}

export interface ISectionType extends ICatalogItemType {
  categories?: ICatalogItemType[];
}

export interface ICatalogItemProps {
  item: ICatalogItemType | ISectionType | ICategoryType;
  onPress: () => void;
}
