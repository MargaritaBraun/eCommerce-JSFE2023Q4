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
                prices: []; // ???
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
                prices: []; // ?????
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

/*
{
    "limit": 20,
    "offset": 0,
    "count": 14,
    "total": 14,
    "results": [
        {
            "id": "fd54d639-f538-49b1-8af1-d49ab8ac3767",
            "version": 5,
            "versionModifiedAt": "2024-05-29T22:03:48.998Z",
            "lastMessageSequenceNumber": 4,
            "createdAt": "2024-05-23T20:55:19.176Z",
            "lastModifiedAt": "2024-05-29T22:03:48.998Z",
            "lastModifiedBy": {
                "isPlatformClient": true,
                "user": {
                    "typeId": "user",
                    "id": "b2e6c9fa-67e5-4961-860a-8f67840513c7"
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
                        "ru": "Дискотека 90-х 2000-х"
                    },
                    "description": {
                        "ru": "Дискотека 90-х 2000-х"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "518d37f2-1dc1-4bba-9213-fdc33b33c9fd"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "90-2000"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Дискотека 90-х 2000-х",
                        "key": "dance-disko-90x-var2",
                        "prices": [],
                        "images": [
                            {
                                "url": "https://images.cdn.europe-west1.gcp.commercetools.com/25eb0f0c-b72f-4d22-9d00-a5d596c54edf/%D0%94%D0%B8%D1%81%D0%BA%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%20%D0%93%D0%A6%D0%9A%204-rypiuOoM.png",
                                "dimensions": {
                                    "w": 270,
                                    "h": 390
                                }
                            }
                        ],
                        "attributes": [],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "staged": {
                    "name": {
                        "ru": "Дискотека 90-х 2000-х"
                    },
                    "description": {
                        "ru": "Дискотека 90-х 2000-х"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "518d37f2-1dc1-4bba-9213-fdc33b33c9fd"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "90-2000"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Дискотека 90-х 2000-х",
                        "key": "dance-disko-90x-var2",
                        "prices": [],
                        "images": [
                            {
                                "url": "https://images.cdn.europe-west1.gcp.commercetools.com/25eb0f0c-b72f-4d22-9d00-a5d596c54edf/%D0%94%D0%B8%D1%81%D0%BA%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%20%D0%93%D0%A6%D0%9A%204-rypiuOoM.png",
                                "dimensions": {
                                    "w": 270,
                                    "h": 390
                                }
                            }
                        ],
                        "attributes": [],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "dance-2-disko-90",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "84f1d50e-7490-403e-a46c-3d2366391814",
            "version": 3,
            "versionModifiedAt": "2024-05-23T21:05:49.909Z",
            "lastMessageSequenceNumber": 2,
            "createdAt": "2024-05-23T21:05:13.471Z",
            "lastModifiedAt": "2024-05-23T21:05:49.909Z",
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
                        "ru": "Товар RETROPARTY"
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
                        "ru": "retroparty"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "RETROPARTY",
                        "key": "dance-retroparty ",
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
                        "ru": "Товар RETROPARTY"
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
                        "ru": "retroparty"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "RETROPARTY",
                        "key": "dance-retroparty ",
                        "prices": [],
                        "images": [
                            {
                                "url": "https://images.cdn.europe-west1.gcp.commercetools.com/25eb0f0c-b72f-4d22-9d00-a5d596c54edf/%D0%A0%D0%B5%D1%82%D1%80%D0%BE%20party%20Nemo%204-dXAiCbXW.png",
                                "dimensions": {
                                    "w": 270,
                                    "h": 390
                                }
                            }
                        ],
                        "attributes": [],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": true
            },
            "key": "dance-tickets",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "d9a354fd-7d86-4f56-9e9b-d7b5931afc48",
            "version": 3,
            "versionModifiedAt": "2024-05-23T21:39:36.382Z",
            "lastMessageSequenceNumber": 2,
            "createdAt": "2024-05-23T21:38:33.461Z",
            "lastModifiedAt": "2024-05-23T21:39:36.382Z",
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
                        "prices": [],
                        "images": [
                            {
                                "url": "https://images.cdn.europe-west1.gcp.commercetools.com/25eb0f0c-b72f-4d22-9d00-a5d596c54edf/679a639e1a25ff077417-x6eR2qrS.png",
                                "dimensions": {
                                    "w": 270,
                                    "h": 390
                                }
                            }
                        ],
                        "attributes": [],
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
        },
        {
            "id": "a909dcf7-0355-44d0-b2a4-9f8807495617",
            "version": 15,
            "versionModifiedAt": "2024-05-30T23:45:52.924Z",
            "lastMessageSequenceNumber": 6,
            "createdAt": "2024-05-23T21:57:58.047Z",
            "lastModifiedAt": "2024-05-30T23:45:52.924Z",
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
                        "ru": "Товар Спектакли"
                    },
                    "description": {
                        "ru": "спектакли"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "82fd35e7-b3c2-437c-abaf-0529efaaf4e9"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "grandfather-cherry"
                    },
                    "metaTitle": {
                        "ru": "Товар Спектакли"
                    },
                    "metaDescription": {
                        "ru": "спектакли"
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Мой дедушка был вишней",
                        "key": "theater-grandfather-cherry",
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
                        "ru": "Товар Спектакли"
                    },
                    "description": {
                        "ru": "спектакли"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "82fd35e7-b3c2-437c-abaf-0529efaaf4e9"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "grandfather-cherry"
                    },
                    "metaTitle": {
                        "ru": "Товар Спектакли"
                    },
                    "metaDescription": {
                        "ru": "спектакли"
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Мой дедушка был вишней",
                        "key": "theater-grandfather-cherry",
                        "prices": [],
                        "images": [
                            {
                                "url": "https://images.cdn.europe-west1.gcp.commercetools.com/25eb0f0c-b72f-4d22-9d00-a5d596c54edf/theater-grandfather--mWqfMSv3.png",
                                "dimensions": {
                                    "w": 270,
                                    "h": 390
                                }
                            }
                        ],
                        "attributes": [
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Молодежный театр "
                                    }
                                ]
                            },
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-06-29T16:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "пр-т. Ленина 10, Гомель"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [
                        {
                            "id": 2,
                            "sku": "Кто боится Вирджинии Вулф?",
                            "key": "theater-Virgini-Woolf",
                            "prices": [],
                            "images": [
                                {
                                    "url": "https://images.cdn.europe-west1.gcp.commercetools.com/25eb0f0c-b72f-4d22-9d00-a5d596c54edf/theater-Virgini-Wool--dAdPtZt.png",
                                    "label": "Афиша",
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
                                        "2024-06-26T14:30:00.000Z"
                                    ]
                                },
                                {
                                    "name": "data-location",
                                    "value": [
                                        {
                                            "ru": "Молодежный театр"
                                        }
                                    ]
                                },
                                {
                                    "name": "data-address",
                                    "value": [
                                        "пр-т. Ленина 10, Гомель"
                                    ]
                                }
                            ],
                            "assets": []
                        }
                    ],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "театр"
                            },
                            {
                                "text": "спектакль"
                            }
                        ]
                    }
                },
                "published": false,
                "hasStagedChanges": true
            },
            "key": "theater-tickets",
            "taxCategory": {
                "typeId": "tax-category",
                "id": "17cdb8a9-f501-45e6-87dd-aff6d4511c75"
            },
            "priceMode": "Embedded",
            "lastVariantId": 2
        },
        {
            "id": "61f0d00b-67ec-4601-8e26-15eee5432733",
            "version": 1,
            "versionModifiedAt": "2024-05-29T21:18:12.625Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-29T21:18:12.625Z",
            "lastModifiedAt": "2024-05-29T21:18:12.625Z",
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
                        "ru": "Нос майора Ковалёва"
                    },
                    "description": {
                        "ru": "«Маленький человек» в интерьере гоголевского – пушкинского Санкт-Петербурга. Маленький человек с огромными, необоснованными амбициями. Такова тема гоголевской повести «Нос», сценическую версию которой представляет Гомельский областной драматический театр. Однажды цирюльник в булке свежеиспеченного хлеба обнаружил неожиданную начинку. В качестве добавки к рецепту выступил нос коллежского асессора Ковалёва, частенько пользующегося услугами брадобрея. Непонятно, как хозяин лишился такой важной части своего лица, но только получивший неожиданную свободу нос совсем распоясался – обзавёлся мундиром, да в высоком чине стал появляться в светском обществе… И как только Платон Ковалёв, для солидности называющий себя майором, справится с таким уроном, вернёт ли беглеца обратно? Фантастика, да и только. Но кто-кто, а Николай Васильевич Гоголь в фантастике знал толк…"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "82fd35e7-b3c2-437c-abaf-0529efaaf4e9"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "theater-Major-Kovalyov-nose"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Нос майора Ковалёва",
                        "key": "theater-Kovalyov-nose",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-07-29T15:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Драматический театр"
                                    }
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "12+"
                            },
                            {
                                "text": "спектакль"
                            }
                        ]
                    }
                },
                "staged": {
                    "name": {
                        "ru": "Нос майора Ковалёва"
                    },
                    "description": {
                        "ru": "«Маленький человек» в интерьере гоголевского – пушкинского Санкт-Петербурга. Маленький человек с огромными, необоснованными амбициями. Такова тема гоголевской повести «Нос», сценическую версию которой представляет Гомельский областной драматический театр. Однажды цирюльник в булке свежеиспеченного хлеба обнаружил неожиданную начинку. В качестве добавки к рецепту выступил нос коллежского асессора Ковалёва, частенько пользующегося услугами брадобрея. Непонятно, как хозяин лишился такой важной части своего лица, но только получивший неожиданную свободу нос совсем распоясался – обзавёлся мундиром, да в высоком чине стал появляться в светском обществе… И как только Платон Ковалёв, для солидности называющий себя майором, справится с таким уроном, вернёт ли беглеца обратно? Фантастика, да и только. Но кто-кто, а Николай Васильевич Гоголь в фантастике знал толк…"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "82fd35e7-b3c2-437c-abaf-0529efaaf4e9"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "theater-Major-Kovalyov-nose"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Нос майора Ковалёва",
                        "key": "theater-Kovalyov-nose",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-07-29T15:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Драматический театр"
                                    }
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "12+"
                            },
                            {
                                "text": "спектакль"
                            }
                        ]
                    }
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "theater-kovalyov-nose",
            "taxCategory": {
                "typeId": "tax-category",
                "id": "17cdb8a9-f501-45e6-87dd-aff6d4511c75"
            },
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "ea32e7cd-f0be-4352-84ec-5e7c744a49fd",
            "version": 3,
            "versionModifiedAt": "2024-05-29T22:23:20.464Z",
            "lastMessageSequenceNumber": 3,
            "createdAt": "2024-05-29T21:36:12.064Z",
            "lastModifiedAt": "2024-05-29T22:23:20.464Z",
            "lastModifiedBy": {
                "isPlatformClient": true,
                "user": {
                    "typeId": "user",
                    "id": "b2e6c9fa-67e5-4961-860a-8f67840513c7"
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
                        "ru": "Кто это сделал?"
                    },
                    "description": {
                        "ru": "Можно ли изменить свою жизнь после смерти? Ответить на этот вопрос предстоит известному писателю-детективщику, который после своей трагической смерти попадает на Небеса. Всего сутки отмеряют высшие силы, чтобы выяснить, кто именно в полночь вонзил нож в спину писателя. Всего сутки, чтобы ещё раз пережить свой последний день и разобраться – кто есть кто в своем окружении…\n\nКак часто, мечтая об одном, мы получаем прямо противоположное. Вот и главному герою спектакля Александру Арлингтону казалось, что он пребывает в любви и гармонии с близкими. Но оказалось, что мотивов для убийства и желающих его совершить рядом с писателем было предостаточно. Да и сам-то писатель, как выясняется, был весьма далек от идеала…"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "82fd35e7-b3c2-437c-abaf-0529efaaf4e9"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "change-your-life"
                    },
                    "metaTitle": {
                        "ru": "Кто это сделал?"
                    },
                    "metaDescription": {
                        "ru": "Можно ли изменить свою жизнь после смерти? Ответить на этот вопрос предстоит известному писателю-детективщику, который после своей трагической смерти попадает на Небеса. Всего сутки отмеряют высшие силы, чтобы выяснить, кто именно в полночь вонзил нож в спину писателя. Всего сутки, чтобы ещё раз пережить свой последний день и разобраться – кто есть кто в своем окружении…\n\nКак часто, мечтая об одном, мы получаем прямо противоположное. Вот и главному герою спектакля Александру Арлингтону казалось, что он пребывает в любви и гармонии с близкими. Но оказалось, что мотивов для убийства и желающих его совершить рядом с писателем было предостаточно. Да и сам-то писатель, как выясняется, был весьма далек от идеала…"
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Кто это сделал?",
                        "key": "theater-who-did-this",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-23T14:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Драматический театр"
                                    }
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "спектакль"
                            }
                        ]
                    }
                },
                "staged": {
                    "name": {
                        "ru": "Кто это сделал?"
                    },
                    "description": {
                        "ru": "Можно ли изменить свою жизнь после смерти? Ответить на этот вопрос предстоит известному писателю-детективщику, который после своей трагической смерти попадает на Небеса. Всего сутки отмеряют высшие силы, чтобы выяснить, кто именно в полночь вонзил нож в спину писателя. Всего сутки, чтобы ещё раз пережить свой последний день и разобраться – кто есть кто в своем окружении…\n\nКак часто, мечтая об одном, мы получаем прямо противоположное. Вот и главному герою спектакля Александру Арлингтону казалось, что он пребывает в любви и гармонии с близкими. Но оказалось, что мотивов для убийства и желающих его совершить рядом с писателем было предостаточно. Да и сам-то писатель, как выясняется, был весьма далек от идеала…"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "82fd35e7-b3c2-437c-abaf-0529efaaf4e9"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "change-your-life"
                    },
                    "metaTitle": {
                        "ru": "Кто это сделал?"
                    },
                    "metaDescription": {
                        "ru": "Можно ли изменить свою жизнь после смерти? Ответить на этот вопрос предстоит известному писателю-детективщику, который после своей трагической смерти попадает на Небеса. Всего сутки отмеряют высшие силы, чтобы выяснить, кто именно в полночь вонзил нож в спину писателя. Всего сутки, чтобы ещё раз пережить свой последний день и разобраться – кто есть кто в своем окружении…\n\nКак часто, мечтая об одном, мы получаем прямо противоположное. Вот и главному герою спектакля Александру Арлингтону казалось, что он пребывает в любви и гармонии с близкими. Но оказалось, что мотивов для убийства и желающих его совершить рядом с писателем было предостаточно. Да и сам-то писатель, как выясняется, был весьма далек от идеала…"
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Кто это сделал?",
                        "key": "theater-who-did-this",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-23T14:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Драматический театр"
                                    }
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "спектакль"
                            }
                        ]
                    }
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "theater-tickets3",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "00cfbf4d-65c0-4d65-a6ac-29414f0b0bf3",
            "version": 9,
            "versionModifiedAt": "2024-05-30T21:51:11.622Z",
            "lastMessageSequenceNumber": 7,
            "createdAt": "2024-05-30T09:32:01.414Z",
            "lastModifiedAt": "2024-05-30T21:51:11.622Z",
            "lastModifiedBy": {
                "isPlatformClient": true
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
                        "ru": "Ночь музеев. ЖД Вокзал"
                    },
                    "description": {
                        "ru": "Музыкально-историческая программа, организованная областным Музеем военной славы совместно с Гомельским отделением дороги при участии Музея истории Гомеля и картинной галереи Г. Х. Ващенко, перенесла ее посетителей в конец XIX – начало XX века. А в стилизованном привокзальном ресторане можно было попробовать блюда национальной кухни и выпить ароматный чай.\nКроме того, работали несколько тематических локаций, где гостей встречали живые скульптуры. Также действовали различные выставки, в том числе с картинами мастеров советского периода из фондов Дворца культуры железнодорожников, скульптурами знаковых исторических деятелей, созданных Дмитрием Поповым, образцами холодного оружия и оружия Великой Отечественной войны."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "museums-events-rail-station"
                    },
                    "metaTitle": {
                        "ru": "Ночь музеев. ЖД Вокзал"
                    },
                    "metaDescription": {
                        "ru": "Музыкально-историческая программа, организованная областным Музеем военной славы совместно с Гомельским отделением дороги при участии Музея истории Гомеля и картинной галереи Г. Х. Ващенко, перенесла ее посетителей в конец XIX – начало XX века. А в стилизованном привокзальном ресторане можно было попробовать блюда национальной кухни и выпить ароматный чай.\nКроме того, работали несколько тематических локаций, где гостей встречали живые скульптуры. Также действовали различные выставки, в том числе с картинами мастеров советского периода из фондов Дворца культуры железнодорожников, скульптурами знаковых исторических деятелей, созданных Дмитрием Поповым, образцами холодного оружия и оружия Великой Отечественной войны."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Ночь музеев. ЖД Вокзал",
                        "key": "museums-railway-station",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-19T18:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Железнодорожный вокзал"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, Привокзальная площадь 3"
                                ]
                            }
                        ],
                        "assets": [],
                        "availability": {
                            "isOnStock": true,
                            "availableQuantity": 150,
                            "version": 1,
                            "id": "cacd686c-c4f8-454e-ba54-5afc2e791f4a"
                        }
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "ночь музеев"
                            }
                        ]
                    }
                },
                "staged": {
                    "name": {
                        "ru": "Ночь музеев. ЖД Вокзал"
                    },
                    "description": {
                        "ru": "Музыкально-историческая программа, организованная областным Музеем военной славы совместно с Гомельским отделением дороги при участии Музея истории Гомеля и картинной галереи Г. Х. Ващенко, перенесла ее посетителей в конец XIX – начало XX века. А в стилизованном привокзальном ресторане можно было попробовать блюда национальной кухни и выпить ароматный чай.\nКроме того, работали несколько тематических локаций, где гостей встречали живые скульптуры. Также действовали различные выставки, в том числе с картинами мастеров советского периода из фондов Дворца культуры железнодорожников, скульптурами знаковых исторических деятелей, созданных Дмитрием Поповым, образцами холодного оружия и оружия Великой Отечественной войны."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "museums-events-rail-station"
                    },
                    "metaTitle": {
                        "ru": "Ночь музеев. ЖД Вокзал"
                    },
                    "metaDescription": {
                        "ru": "Музыкально-историческая программа, организованная областным Музеем военной славы совместно с Гомельским отделением дороги при участии Музея истории Гомеля и картинной галереи Г. Х. Ващенко, перенесла ее посетителей в конец XIX – начало XX века. А в стилизованном привокзальном ресторане можно было попробовать блюда национальной кухни и выпить ароматный чай.\nКроме того, работали несколько тематических локаций, где гостей встречали живые скульптуры. Также действовали различные выставки, в том числе с картинами мастеров советского периода из фондов Дворца культуры железнодорожников, скульптурами знаковых исторических деятелей, созданных Дмитрием Поповым, образцами холодного оружия и оружия Великой Отечественной войны."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Ночь музеев. ЖД Вокзал",
                        "key": "museums-railway-station",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-19T18:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Железнодорожный вокзал"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, Привокзальная площадь 3"
                                ]
                            }
                        ],
                        "assets": [],
                        "availability": {
                            "isOnStock": true,
                            "availableQuantity": 150,
                            "version": 1,
                            "id": "cacd686c-c4f8-454e-ba54-5afc2e791f4a"
                        }
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "ночь музеев"
                            }
                        ]
                    }
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "museums-tickets-railroad-station",
            "taxCategory": {
                "typeId": "tax-category",
                "id": "17cdb8a9-f501-45e6-87dd-aff6d4511c75"
            },
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "f4adf9da-97ab-47ea-8b75-c8d47a24992e",
            "version": 1,
            "versionModifiedAt": "2024-05-30T09:49:44.265Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-30T09:49:44.265Z",
            "lastModifiedAt": "2024-05-30T09:49:44.265Z",
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
                        "ru": "GameExpo & Unicon 2024"
                    },
                    "description": {
                        "ru": "Выставка игровой индустрии и киберспорта с 13 по 15 сентября 2024 года !\nИнтерактивные стенды фантастических вселенных, конкурсы, новинки настольных и компьютерных игр, аллея авторов и игротеки, площадка для общения, стенды издателей и разработчиков."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "gameexpo-unicon-2024"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "GameExpo & Unicon 2024",
                        "key": "museums-GameExpo-Unicon-2024",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-09-13T10:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Футбольный манеж"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "проспект Победителей 20/2"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "staged": {
                    "name": {
                        "ru": "GameExpo & Unicon 2024"
                    },
                    "description": {
                        "ru": "Выставка игровой индустрии и киберспорта с 13 по 15 сентября 2024 года !\nИнтерактивные стенды фантастических вселенных, конкурсы, новинки настольных и компьютерных игр, аллея авторов и игротеки, площадка для общения, стенды издателей и разработчиков."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "gameexpo-unicon-2024"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "GameExpo & Unicon 2024",
                        "key": "museums-GameExpo-Unicon-2024",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-09-13T10:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Футбольный манеж"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "проспект Победителей 20/2"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "museums-tickets-GameExpo",
            "taxCategory": {
                "typeId": "tax-category",
                "id": "17cdb8a9-f501-45e6-87dd-aff6d4511c75"
            },
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "9284663e-1d08-4b55-a696-69c0450a3877",
            "version": 2,
            "versionModifiedAt": "2024-05-31T15:43:12.438Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-30T09:56:11.418Z",
            "lastModifiedAt": "2024-05-31T15:43:12.438Z",
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
                        "ru": "Гомель. Иллюзия ретро"
                    },
                    "description": {
                        "ru": "В экспозиции представлено 20 современных фотографий с изображением архитектуры гомельских зданий. Автор фотографировала на объектив плёночного фотоаппарата «Зенит», в результате родилась иллюзия ретро снимков. Каждая фотография получила авторское название с отсылкой на художественное произведение или цитату из него: «Жизнь нашего городка», «Дом, в котором я живу», «Из СССР с любовью», «Я рисую белым мелом…» и др.\nТаким образом, прочтение названий работ превращается для посетителей выставки в квест – сколько отсылок получится угадать. Из всех зданий, представленных на фото, только одно является заброшенным.\n"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "museums-events-illusion-of-retro"
                    },
                    "metaTitle": {
                        "ru": "Гомель. Иллюзия ретро"
                    },
                    "metaDescription": {
                        "ru": "В экспозиции представлено 20 современных фотографий с изображением архитектуры гомельских зданий. Автор фотографировала на объектив плёночного фотоаппарата «Зенит», в результате родилась иллюзия ретро снимков. Каждая фотография получила авторское название с отсылкой на художественное произведение или цитату из него: «Жизнь нашего городка», «Дом, в котором я живу», «Из СССР с любовью», «Я рисую белым мелом…» и др.\nТаким образом, прочтение названий работ превращается для посетителей выставки в квест – сколько отсылок получится угадать. Из всех зданий, представленных на фото, только одно является заброшенным.\n"
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Гомель. Иллюзия ретро",
                        "key": "museums-illusion-of-retro",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Центральная библиотека имени А. И. Герцена"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Советская 26"
                                ]
                            },
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-11-22T13:00:00.000Z"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "staged": {
                    "name": {
                        "ru": "Гомель. Иллюзия ретро"
                    },
                    "description": {
                        "ru": "В экспозиции представлено 20 современных фотографий с изображением архитектуры гомельских зданий. Автор фотографировала на объектив плёночного фотоаппарата «Зенит», в результате родилась иллюзия ретро снимков. Каждая фотография получила авторское название с отсылкой на художественное произведение или цитату из него: «Жизнь нашего городка», «Дом, в котором я живу», «Из СССР с любовью», «Я рисую белым мелом…» и др.\nТаким образом, прочтение названий работ превращается для посетителей выставки в квест – сколько отсылок получится угадать. Из всех зданий, представленных на фото, только одно является заброшенным.\n"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "museums-events-illusion-of-retro"
                    },
                    "metaTitle": {
                        "ru": "Гомель. Иллюзия ретро"
                    },
                    "metaDescription": {
                        "ru": "В экспозиции представлено 20 современных фотографий с изображением архитектуры гомельских зданий. Автор фотографировала на объектив плёночного фотоаппарата «Зенит», в результате родилась иллюзия ретро снимков. Каждая фотография получила авторское название с отсылкой на художественное произведение или цитату из него: «Жизнь нашего городка», «Дом, в котором я живу», «Из СССР с любовью», «Я рисую белым мелом…» и др.\nТаким образом, прочтение названий работ превращается для посетителей выставки в квест – сколько отсылок получится угадать. Из всех зданий, представленных на фото, только одно является заброшенным.\n"
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Гомель. Иллюзия ретро",
                        "key": "museums-illusion-of-retro",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Центральная библиотека имени А. И. Герцена"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Советская 26"
                                ]
                            },
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-11-22T13:00:00.000Z"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "museums-tickets-illusion-retro",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "85ad575d-eade-4c74-ad1c-b8f645fc9f1a",
            "version": 1,
            "versionModifiedAt": "2024-05-30T10:02:13.138Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-30T10:02:13.138Z",
            "lastModifiedAt": "2024-05-30T10:02:13.138Z",
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
                        "ru": "KUKLA"
                    },
                    "description": {
                        "ru": "На выставке Вас ждут творческие мастер-классы, тематические лекции, показ фильмов, экскурсии с рассказом про мастеров-участников, знакомство с техникой создания авторских игрушек.\nКаждый из Вас сможет унести с собой свою неповторимую «сказку осени», прочитанную в полюбившихся работах авторов проекта Гербарий. Сказки осени\nПроект KUKLA существует четыре года. Он организован друзьями по творчеству. Уникальность проекта в том, что он не коммерческий и основан на огромной любви к авторским игрушкам и куклам ручной работы. А также на желании нести в мир сказку и добро."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "kukla"
                    },
                    "metaTitle": {
                        "ru": "KUKLA"
                    },
                    "metaDescription": {
                        "ru": "На выставке Вас ждут творческие мастер-классы, тематические лекции, показ фильмов, экскурсии с рассказом про мастеров-участников, знакомство с техникой создания авторских игрушек.\nКаждый из Вас сможет унести с собой свою неповторимую «сказку осени», прочитанную в полюбившихся работах авторов проекта Гербарий. Сказки осени\nПроект KUKLA существует четыре года. Он организован друзьями по творчеству. Уникальность проекта в том, что он не коммерческий и основан на огромной любви к авторским игрушкам и куклам ручной работы. А также на желании нести в мир сказку и добро."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "KUKLA",
                        "key": "museums-kukla",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-10-02T09:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Музей истории города Гомеля"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "ул. Пушкина, 32. «Охотничий домик»"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "staged": {
                    "name": {
                        "ru": "KUKLA"
                    },
                    "description": {
                        "ru": "На выставке Вас ждут творческие мастер-классы, тематические лекции, показ фильмов, экскурсии с рассказом про мастеров-участников, знакомство с техникой создания авторских игрушек.\nКаждый из Вас сможет унести с собой свою неповторимую «сказку осени», прочитанную в полюбившихся работах авторов проекта Гербарий. Сказки осени\nПроект KUKLA существует четыре года. Он организован друзьями по творчеству. Уникальность проекта в том, что он не коммерческий и основан на огромной любви к авторским игрушкам и куклам ручной работы. А также на желании нести в мир сказку и добро."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "c3f880cc-7112-425f-a35b-678fc7e9f680"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "kukla"
                    },
                    "metaTitle": {
                        "ru": "KUKLA"
                    },
                    "metaDescription": {
                        "ru": "На выставке Вас ждут творческие мастер-классы, тематические лекции, показ фильмов, экскурсии с рассказом про мастеров-участников, знакомство с техникой создания авторских игрушек.\nКаждый из Вас сможет унести с собой свою неповторимую «сказку осени», прочитанную в полюбившихся работах авторов проекта Гербарий. Сказки осени\nПроект KUKLA существует четыре года. Он организован друзьями по творчеству. Уникальность проекта в том, что он не коммерческий и основан на огромной любви к авторским игрушкам и куклам ручной работы. А также на желании нести в мир сказку и добро."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "KUKLA",
                        "key": "museums-kukla",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-10-02T09:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "Музей истории города Гомеля"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "ул. Пушкина, 32. «Охотничий домик»"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "museums-tickets-KUKLA",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "0f0a6264-6304-4d66-92c0-7022b4878fa4",
            "version": 1,
            "versionModifiedAt": "2024-05-30T10:09:16.797Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-30T10:09:16.797Z",
            "lastModifiedAt": "2024-05-30T10:09:16.797Z",
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
                        "ru": "Hot Wheels. Вперёд!"
                    },
                    "description": {
                        "ru": "У каждого любителя гонок возникает желание хоть раз оказаться в рядах победителей. Однако на самом деле важнее командная работа и желание стать лучше. Жизнь ребят, которые не только выполняют различные трюки и веселятся, но и стараются научиться чему-то новому и важному, полна невероятных приключений."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "hot-wheels"
                    },
                    "metaTitle": {
                        "ru": "Hot Wheels. Вперёд!"
                    },
                    "metaDescription": {
                        "ru": "У каждого любителя гонок возникает желание хоть раз оказаться в рядах победителей. Однако на самом деле важнее командная работа и желание стать лучше. Жизнь ребят, которые не только выполняют различные трюки и веселятся, но и стараются научиться чему-то новому и важному, полна невероятных приключений."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Hot Wheels. Вперёд!",
                        "key": "movie-hot-wheels",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Барыкина, 127"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Октябрь"
                                    }
                                ]
                            },
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-10T08:00:00.000Z"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "анимация"
                            },
                            {
                                "text": "мультфильм"
                            },
                            {
                                "text": "для детей"
                            },
                            {
                                "text": "+3"
                            }
                        ]
                    }
                },
                "staged": {
                    "name": {
                        "ru": "Hot Wheels. Вперёд!"
                    },
                    "description": {
                        "ru": "У каждого любителя гонок возникает желание хоть раз оказаться в рядах победителей. Однако на самом деле важнее командная работа и желание стать лучше. Жизнь ребят, которые не только выполняют различные трюки и веселятся, но и стараются научиться чему-то новому и важному, полна невероятных приключений."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "hot-wheels"
                    },
                    "metaTitle": {
                        "ru": "Hot Wheels. Вперёд!"
                    },
                    "metaDescription": {
                        "ru": "У каждого любителя гонок возникает желание хоть раз оказаться в рядах победителей. Однако на самом деле важнее командная работа и желание стать лучше. Жизнь ребят, которые не только выполняют различные трюки и веселятся, но и стараются научиться чему-то новому и важному, полна невероятных приключений."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Hot Wheels. Вперёд!",
                        "key": "movie-hot-wheels",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Барыкина, 127"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Октябрь"
                                    }
                                ]
                            },
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-10T08:00:00.000Z"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {
                        "ru": [
                            {
                                "text": "анимация"
                            },
                            {
                                "text": "мультфильм"
                            },
                            {
                                "text": "для детей"
                            },
                            {
                                "text": "+3"
                            }
                        ]
                    }
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "movie-Hot-Wheels",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "2bad084e-51d4-4cfd-a610-abab7e4c2dfb",
            "version": 1,
            "versionModifiedAt": "2024-05-30T10:14:50.695Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-30T10:14:50.695Z",
            "lastModifiedAt": "2024-05-30T10:14:50.695Z",
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
                        "ru": "Любви не бывает?"
                    },
                    "description": {
                        "ru": "Катя полностью разочаровалась в мужчинах, а Саша не может и дня прожить без новой женщины. Случайность сделала их соседями, которым не ужиться вместе. Решив перевоспитать самоуверенного бабника, Катя использует все средства, чтобы превратить его жизнь в сущий кошмар. Однако игра с огнём может дорого обойтись, ведь от ненависти до любви всего один шаг, даже если в любовь не веришь…"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "movie-no-love"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Любви не бывает?",
                        "key": "movie-no-such-thing-love",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-01T13:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Калинино"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Коммунаров 4,"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "staged": {
                    "name": {
                        "ru": "Любви не бывает?"
                    },
                    "description": {
                        "ru": "Катя полностью разочаровалась в мужчинах, а Саша не может и дня прожить без новой женщины. Случайность сделала их соседями, которым не ужиться вместе. Решив перевоспитать самоуверенного бабника, Катя использует все средства, чтобы превратить его жизнь в сущий кошмар. Однако игра с огнём может дорого обойтись, ведь от ненависти до любви всего один шаг, даже если в любовь не веришь…"
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "movie-no-love"
                    },
                    "metaTitle": {
                        "ru": ""
                    },
                    "metaDescription": {
                        "ru": ""
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Любви не бывает?",
                        "key": "movie-no-such-thing-love",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-05-01T13:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Калинино"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Коммунаров 4,"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "movie-events-noy-love",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "f07db6ce-3b78-44e6-9005-8d216a6fcf73",
            "version": 1,
            "versionModifiedAt": "2024-05-30T10:21:14.653Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-30T10:21:14.653Z",
            "lastModifiedAt": "2024-05-30T10:21:14.653Z",
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
                        "ru": "Приключение панды"
                    },
                    "description": {
                        "ru": "Юный, но отважный панда по имени Пан отправляется в Африку, чтобы спасти свою лучшую подругу — дракона Цзелонь. Теперь его ждёт захватывающее путешествие в удивительный для него мир гор, пустынь и джунглей. Полагаясь на свой ум, доброту и находчивость, он заведёт множество новых друзей среди местных обитателей, ведь у храбрости нет размера, а настоящая дружба не знает преград."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "movie-adventure-of-the-panda"
                    },
                    "metaTitle": {
                        "ru": "Приключение панды"
                    },
                    "metaDescription": {
                        "ru": "Юный, но отважный панда по имени Пан отправляется в Африку, чтобы спасти свою лучшую подругу — дракона Цзелонь. Теперь его ждёт захватывающее путешествие в удивительный для него мир гор, пустынь и джунглей. Полагаясь на свой ум, доброту и находчивость, он заведёт множество новых друзей среди местных обитателей, ведь у храбрости нет размера, а настоящая дружба не знает преград."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Приключения панды",
                        "key": "movie-adventure-panda",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-06-20T08:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Мир"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Ильича 51б"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "staged": {
                    "name": {
                        "ru": "Приключение панды"
                    },
                    "description": {
                        "ru": "Юный, но отважный панда по имени Пан отправляется в Африку, чтобы спасти свою лучшую подругу — дракона Цзелонь. Теперь его ждёт захватывающее путешествие в удивительный для него мир гор, пустынь и джунглей. Полагаясь на свой ум, доброту и находчивость, он заведёт множество новых друзей среди местных обитателей, ведь у храбрости нет размера, а настоящая дружба не знает преград."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "movie-adventure-of-the-panda"
                    },
                    "metaTitle": {
                        "ru": "Приключение панды"
                    },
                    "metaDescription": {
                        "ru": "Юный, но отважный панда по имени Пан отправляется в Африку, чтобы спасти свою лучшую подругу — дракона Цзелонь. Теперь его ждёт захватывающее путешествие в удивительный для него мир гор, пустынь и джунглей. Полагаясь на свой ум, доброту и находчивость, он заведёт множество новых друзей среди местных обитателей, ведь у храбрости нет размера, а настоящая дружба не знает преград."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Приключения панды",
                        "key": "movie-adventure-panda",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-06-20T08:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Мир"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Ильича 51б"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "movie-events-adventure-panda",
            "priceMode": "Embedded",
            "lastVariantId": 1
        },
        {
            "id": "d18bc7e8-7792-4c7e-8e52-d19da5e6131d",
            "version": 1,
            "versionModifiedAt": "2024-05-30T23:31:13.115Z",
            "lastMessageSequenceNumber": 1,
            "createdAt": "2024-05-30T23:31:13.115Z",
            "lastModifiedAt": "2024-05-30T23:31:13.115Z",
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
                        "ru": "Сто лет тому вперёд"
                    },
                    "description": {
                        "ru": "«Сто лет тому вперёд» — российский фантастический фильм режиссёра Александра Андрющенко по мотивам одноимённой повести Кира Булычёва. Главных героев, Алису Селезнёву и Колю Герасимова, сыграли Дарья Верещагина и Марк Эйдельштейн, а злодеев, космических пиратов, Весельчака У и Глота, — Александр Петров и Юрий Борисов."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "movie-one-hundred-years-in-the-future"
                    },
                    "metaTitle": {
                        "ru": "Сто лет тому вперёд"
                    },
                    "metaDescription": {
                        "ru": "«Сто лет тому вперёд» — российский фантастический фильм режиссёра Александра Андрющенко по мотивам одноимённой повести Кира Булычёва. Главных героев, Алису Селезнёву и Колю Герасимова, сыграли Дарья Верещагина и Марк Эйдельштейн, а злодеев, космических пиратов, Весельчака У и Глота, — Александр Петров и Юрий Борисов."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Сто лет тому вперёд",
                        "key": "movie-One-hundred-years-future",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-06-06T10:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Октябрь"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Барыкина 145"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "staged": {
                    "name": {
                        "ru": "Сто лет тому вперёд"
                    },
                    "description": {
                        "ru": "«Сто лет тому вперёд» — российский фантастический фильм режиссёра Александра Андрющенко по мотивам одноимённой повести Кира Булычёва. Главных героев, Алису Селезнёву и Колю Герасимова, сыграли Дарья Верещагина и Марк Эйдельштейн, а злодеев, космических пиратов, Весельчака У и Глота, — Александр Петров и Юрий Борисов."
                    },
                    "categories": [
                        {
                            "typeId": "category",
                            "id": "9a9ea5e9-918e-4ce6-abe9-3f003518b806"
                        }
                    ],
                    "categoryOrderHints": {},
                    "slug": {
                        "ru": "movie-one-hundred-years-in-the-future"
                    },
                    "metaTitle": {
                        "ru": "Сто лет тому вперёд"
                    },
                    "metaDescription": {
                        "ru": "«Сто лет тому вперёд» — российский фантастический фильм режиссёра Александра Андрющенко по мотивам одноимённой повести Кира Булычёва. Главных героев, Алису Селезнёву и Колю Герасимова, сыграли Дарья Верещагина и Марк Эйдельштейн, а злодеев, космических пиратов, Весельчака У и Глота, — Александр Петров и Юрий Борисов."
                    },
                    "masterVariant": {
                        "id": 1,
                        "sku": "Сто лет тому вперёд",
                        "key": "movie-One-hundred-years-future",
                        "prices": [],
                        "images": [],
                        "attributes": [
                            {
                                "name": "date-show",
                                "value": [
                                    "2024-06-06T10:00:00.000Z"
                                ]
                            },
                            {
                                "name": "data-location",
                                "value": [
                                    {
                                        "ru": "кинотеатр Октябрь"
                                    }
                                ]
                            },
                            {
                                "name": "data-address",
                                "value": [
                                    "г. Гомель, ул. Барыкина 145"
                                ]
                            }
                        ],
                        "assets": []
                    },
                    "variants": [],
                    "searchKeywords": {}
                },
                "published": false,
                "hasStagedChanges": false
            },
            "key": "movie-ticket-one-hundred-years",
            "taxCategory": {
                "typeId": "tax-category",
                "id": "17cdb8a9-f501-45e6-87dd-aff6d4511c75"
            },
            "priceMode": "Embedded",
            "lastVariantId": 1
        }
    ]
}

*/
