export interface Collection {
  artObjects: ArtObject[];
}

export interface ArtObject {
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
  principalOrFirstMaker: string;
  showImage: boolean;
  title: string;
}

export interface ArtObjectPageDetails {
  artObject: ArtObjectDetails;
  artObjectPage?: {
    id: string;
    lang: string;
    objectNumber: string;
    plaqueDescription: string;
  }
}

export interface ArtObjectDetails {
  id: string;
  objectNumber: string;
  language: string;
  title: string;
  webImage: ImageDetails;
  description: string;
  objectCollection: string[],
  principalMakers: [
    {
      name: string;
      placeOfBirth: string;
      dateOfBirth: string;
      dateOfDeath: string;
    }
  ],
  plaqueDescriptionDutch: string;
  techniques: string[],
  productionPlaces: string[],
  dating: {
    presentingDate: string;
  },
  hasImage: boolean;
  documentation: string[],
  principalOrFirstMaker: string;
  physicalMedium: string;
  longTitle: string;
  label: {
    title: string;
    makerLine: string;
    description: string;
    date: string;
  },
  showImage: boolean;
}

interface ImageDetails {
  guid: string;
  url: string;
}