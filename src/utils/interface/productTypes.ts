import { DeveloperIdOfDataset } from './categoriesDataName';

export interface RequestDatasetProducts {
    limit: number;
    offset: number;
    count: number;
    total: number;
    results: RequestOnProducts[];
}

export interface DateShowAttribute {
    name: 'date-show';
    value: [Date];
}

export interface LocationAttribute {
    name: 'data-location';
    value: { ru: string }[];
}

export interface AddressAttribute {
    name: 'data-address';
    value: string[];
}

export type Attribute = DateShowAttribute | LocationAttribute | AddressAttribute;

export interface LocationData {
    [language: string]: string;
}

export interface CategoryOrderHints {
    [categoryId: string]: `0.${string}[1-9]` | undefined;
}

export interface ProductCategory {
    typeId: 'category';
    id: string;
}

export interface ImagesProduct {
    url: string;
    dimensions: {
        w: number;
        h: number;
    };
}

export interface SearchKeywordsData {
    [language: string]:
        | {
              text: string;
          }[]
        | undefined;
}

export interface CostPrices {
    id: string;
    value: {
        type: 'centPrecision';
        currencyCode: 'BYN';
        centAmount: number;
        fractionDigits: number;
    };
    key: string;
    discounted?: {
        value: {
            type: string; // "centPrecision"
            currencyCode: 'BYN';
            centAmount: number;
            fractionDigits: number;
        };
        discount?: {
            typeId: string; // 'product-discount'
            id: string;
        };
    };
}
export interface RequestOnProducts {
    id: string;
    version: number;
    versionModifiedAt: Date;
    lastMessageSequenceNumber: number;
    createdAt: Date;
    lastModifiedAt: Date;
    lastModifiedBy: DeveloperIdOfDataset;
    createdBy: DeveloperIdOfDataset;
    productType: {
        typeId: 'product-type';
        id: string;
    };
    masterData: {
        current: {
            name: {
                ru: string;
            };
            description: {
                ru: string;
            };
            categories: ProductCategory[];
            categoryOrderHints: CategoryOrderHints;
            slug: {
                ru: string;
            };
            metaTitle: {
                ru: string;
            };
            metaDescription: {
                ru: string;
            };
            masterVariant: {
                id: number;
                sku: string;
                key: string;
                prices: CostPrices[];
                images: ImagesProduct[];
                attributes: Attribute[];
                assets: [];
            };
            variants: [];
            searchKeywords: SearchKeywordsData;
        };
        staged: {
            name: {
                ru: string;
            };
            description: {
                ru: string;
            };
            categories: ProductCategory[];
            categoryOrderHints: CategoryOrderHints;
            slug: {
                ru: string;
            };
            metaTitle: {
                ru: string;
            };
            metaDescription: {
                ru: string;
            };
            masterVariant: {
                id: number;
                sku: string;
                key: string;
                prices: CostPrices[];
                images: ImagesProduct[];
                attributes: Attribute[];
                assets: [];
            };
            variants: [];
            searchKeywords: SearchKeywordsData;
        };
        published: false;
        hasStagedChanges: false;
    };
    key: string;
    priceMode: 'Embedded' | 'Standalone';
    lastVariantId: number;
}
