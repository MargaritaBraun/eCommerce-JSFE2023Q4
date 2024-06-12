export enum Categories {
    'museums-exhibitions' = 'c3f880cc-7112-425f-a35b-678fc7e9f680',
    'theater-performances' = '82fd35e7-b3c2-437c-abaf-0529efaaf4e9',
    'movie' = '9a9ea5e9-918e-4ce6-abe9-3f003518b806',
    'dance-events' = '518d37f2-1dc1-4bba-9213-fdc33b33c9fd',
}
export interface RequestDatasetCategory {
    limit: number;
    offset: number;
    count: number;
    total: number;
    results: CategoriesNameObject[];
}

export interface CategoriesNameObject {
    id: string;
    version: number;
    versionModifiedAt: Date;
    lastMessageSequenceNumber: number;
    createdAt: Date;
    lastModifiedAt: Date;
    lastModifiedBy: DeveloperIdOfDataset;
    createdBy: DeveloperIdOfDataset;
    key: string;
    name: {
        ru: string;
    };
    slug: {
        ru: string;
    };
    description: {
        ru: string;
    };
    ancestors: [];
    orderHint: string;
    metaTitle: {
        ru: string;
    };
    metaDescription: {
        ru: string;
    };
    assets: [];
}

export interface DeveloperIdOfDataset {
    isPlatformClient: boolean;
    user: {
        typeId: 'user';
        id: string;
    };
}
