export interface Collection {
  artObjects: ArtObjects[];
}

export interface ArtObjects {
  hasImage: boolean;
  headerImage: ImageDetails;
  webImage: ImageDetails;
  id: string;
  links?: {
    self: string;
    web: string;
  }
  longTitle: string;
  objectNumber: string;
  permitDownload?: boolean;
  principalOrFirstMaker?: string;
  productionPlaces?: string[];
  showImage: boolean;
  title: string;
}

interface ImageDetails {
  guid: string;
  height?: number;
  offsetPercentageX?: number;
  offsetPercentageY?: number;
  url: string;
  width?: number;
}