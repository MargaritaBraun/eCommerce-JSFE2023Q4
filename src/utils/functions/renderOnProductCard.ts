import getProducts from '../../api/category/getAllProducts';
import { Attribute, RequestDatasetProducts, RequestOnProducts } from '../interface/productTypes';
import showDateInText from './dateInText';

export default async function renderOnProductCard() {
    const dataProducts: RequestDatasetProducts = await getProducts();
    const generallyCategoriesContainer: HTMLElement | null = document.querySelector('.main-wrap');
    const categoriesBasic = document.createElement('div');
    categoriesBasic.classList.add('categories_basic');
    const dataCategoriesContainer = document.querySelector('.block_for_selected_category');
    const idSelectedCategory = dataCategoriesContainer?.getAttribute('id');

    if (dataCategoriesContainer) {
        dataProducts.results.forEach((item: RequestOnProducts) => {
            const categoryInProd = item.masterData.staged.categories[0].id;
            const skuInProduct = item.masterData.current.masterVariant.sku;
            const urlInProductisEmpty = item.masterData.staged.masterVariant.images;
            let urlInProduct;
            if (urlInProductisEmpty.length !== 0) {
                urlInProduct = urlInProductisEmpty[0].url;
            } else {
                urlInProduct = './img/img-not-fond.png';
            }
            const dataInProduct: Attribute[] = item.masterData.staged.masterVariant.attributes;

            if (categoryInProd === idSelectedCategory) {
                const productsContainer = document.createElement('div');
                productsContainer.classList.add('products_container');
                productsContainer.setAttribute('id', item.id);
                const logoProducts = document.createElement('img');
                logoProducts.classList.add('img_cards_view');
                if (urlInProduct) {
                    logoProducts.src = urlInProduct;
                    logoProducts.alt = skuInProduct;
                }

                const titleProducts = document.createElement('h3');
                titleProducts.textContent = skuInProduct;

                const dateProducts = document.createElement('p');

                if (dataInProduct.length !== 0) {
                    dataInProduct.forEach((obj) => {
                        if (obj.name === 'date-show') {
                            const dateString = obj.value[0];
                            const date = showDateInText(dateString);
                            dateProducts.textContent = date;
                        }
                    });
                } else {
                    const dateString = null;
                    const date = showDateInText(dateString);
                    dateProducts.textContent = date;
                }

                productsContainer.appendChild(logoProducts);
                productsContainer.appendChild(titleProducts);
                productsContainer.appendChild(dateProducts);

                categoriesBasic.appendChild(productsContainer);
            }
        });
        dataCategoriesContainer.append(categoriesBasic);
        if (generallyCategoriesContainer) {
            generallyCategoriesContainer?.append(dataCategoriesContainer);
        }
    }
}
