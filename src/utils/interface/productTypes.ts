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

/*
"prices": [
                    {
                        "id": "494de994-71b6-420d-9aae-4e28cf786e10",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "BYN",
                            "centAmount": 3700,
                            "fractionDigits": 2
                        },
                        "key": "cost-37",
                        "discounted": {
                            "value": {
                                "type": "centPrecision",
                                "currencyCode": "BYN",
                                "centAmount": 3500,
                                "fractionDigits": 2
                            },
                            "discount": {
                                "typeId": "product-discount",
                                "id": "eeb4890a-8cae-4055-83b9-3f56433edb89"
                            }
                        }
                    }
                ],
*/
/*
{
    "id": "d9a354fd-7d86-4f56-9e9b-d7b5931afc48",
    "version": 7,
    "versionModifiedAt": "2024-06-04T17:06:16.570Z",
    "lastMessageSequenceNumber": 3,
    "createdAt": "2024-05-23T21:38:33.461Z",
    "lastModifiedAt": "2024-06-04T17:06:16.570Z",
    "lastModifiedBy": {
        "isPlatformClient": true,
        "user": {
            "typeId": "user",
            "id": "11b9f257-80cb-4083-8565-9e0d5a67e3f5"
        }
    },
    "createdBy": {
        "isPlatformClient": true,
        "user": {
            "typeId": "user",
            "id": "11b9f257-80cb-4083-8565-9e0d5a67e3f5"
        }
    },
    "productType": {
        "typeId": "product-type",
        "id": "4d878559-02ee-4685-ac9b-043a78bff3f0"
    },
    "masterData": {
        "current": {
            "name": {
                "ru": "Товар DiscoВЕСНА"
            },
            "description": {
                "ru": "вечеринка"
            },
            "categories": [
                {
                    "typeId": "category",
                    "id": "518d37f2-1dc1-4bba-9213-fdc33b33c9fd"
                }
            ],
            "categoryOrderHints": {},
            "slug": {
                "ru": "disco"
            },
            "metaTitle": {
                "ru": ""
            },
            "metaDescription": {
                "ru": ""
            },
            "masterVariant": {
                "id": 1,
                "sku": "DiscoВЕСНА",
                "key": "dance-DiscoSpring",
                "prices": [],
                "images": [],
                "attributes": [],
                "assets": []
            },
            "variants": [],
            "searchKeywords": {}
        },
        "staged": {
            "name": {
                "ru": "Товар DiscoВЕСНА"
            },
            "description": {
                "ru": "вечеринка"
            },
            "categories": [
                {
                    "typeId": "category",
                    "id": "518d37f2-1dc1-4bba-9213-fdc33b33c9fd"
                }
            ],
            "categoryOrderHints": {},
            "slug": {
                "ru": "disco"
            },
            "metaTitle": {
                "ru": ""
            },
            "metaDescription": {
                "ru": ""
            },
            "masterVariant": {
                "id": 1,
                "sku": "DiscoВЕСНА",
                "key": "dance-DiscoSpring",
                "prices": [
                    {
                        "id": "981faf30-80cf-4f3e-b92f-607ed2352a99",
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "BYN",
                            "centAmount": 1500,
                            "fractionDigits": 2
                        },
                        "key": "cost-15"
                    }
                ],
                "images": [
                    {
                        "url": "https://images.cdn.europe-west1.gcp.commercetools.com/25eb0f0c-b72f-4d22-9d00-a5d596c54edf/679a639e1a25ff077417-x6eR2qrS.png",
                        "dimensions": {
                            "w": 270,
                            "h": 390
                        }
                    }
                ],
                "attributes": [
                    {
                        "name": "date-show",
                        "value": [
                            "2024-05-18T15:00:00.000Z"
                        ]
                    },
                    {
                        "name": "data-location",
                        "value": [
                            {
                                "ru": "Стадион Локомотив"
                            }
                        ]
                    },
                    {
                        "name": "data-address",
                        "value": [
                            "ул. Богдана Хмельницкого, 29"
                        ]
                    }
                ],
                "assets": []
            },
            "variants": [],
            "searchKeywords": {}
        },
        "published": false,
        "hasStagedChanges": true
    },
    "key": "dance-tickets-Disco-spring",
    "taxCategory": {
        "typeId": "tax-category",
        "id": "17cdb8a9-f501-45e6-87dd-aff6d4511c75"
    },
    "priceMode": "Embedded",
    "lastVariantId": 1
}
*/
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
