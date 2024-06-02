import getProducts from '../../api/category/getAllProducts';
import {
    Attribute,
    AttributesData,
    DateShowAttribute,
    RequestDatasetProducts,
    RequestOnProducts,
} from '../interface/productTypes';

export default async function renderOnProductCard() {
    const dataProducts: RequestDatasetProducts = await getProducts();
    const categoriesBasic = document.createElement('div');
    categoriesBasic.classList.add('categories_basic');
    const dataCategoriesContainer = document.querySelector('.block_for_selected_category');
    const idSelectedCategory = dataCategoriesContainer?.getAttribute('id');
    // const dataCategoriesContainer = document.querySelector('.');
    // block_for_selected_category
    if (dataCategoriesContainer) {
        dataProducts.results.forEach((item: RequestOnProducts) => {
            const categoryInProd = item.masterData.staged.categories[0].id;
            const skuInProduct = item.masterData.current.masterVariant.sku;
            const urlInProduct = item.masterData.current.masterVariant.images[0].url;
            const dataInProduct: AttributesData[] = item.masterData.staged.masterVariant.attributes;

          const dateShowData: Attribute = dataInProduct.find((attr) => attr.name === 'data-show');
            const dateShowValue = dateShowData.value[0];
            /*
            const locationData = dataInProduct.find((attr) => attr.attributes.some((a) => a.name === 'data-location'));
            const locationValue = locationData?.attributes.find((a) => a.name === 'data-location')?.value[0]?.ru;

            const addressData = dataInProduct.find((attr) => attr.name === 'data-address');
            const addressValue = addressData.value[0];
            */
            if (categoryInProd === idSelectedCategory) {
                const productsContainer = document.createElement('div');
                productsContainer.classList.add('products_container');
                productsContainer.setAttribute('id', item.id);
                const logoProducts = document.createElement('img');
                logoProducts.classList.add('img_cards_view');
                if (urlInProduct) {
                    logoProducts.src = urlInProduct;
                    logoProducts.alt = skuInProduct;
                } else {
                    // Если нет URL-адреса, можно установить заглушку или сделать что-то другое
                    logoProducts.src = './img/img-not-fond.png';
                    logoProducts.alt = 'Placeholder';
                }

                const titleProducts = document.createElement('h3');
                titleProducts.textContent = skuInProduct;

                const dateProducts = document.createElement('p');
                // if()
                dateProducts.textContent = `${dateShowValue.getDate} ${dateShowValue.getMonth}`;

                productsContainer.appendChild(logoProducts);
                productsContainer.appendChild(titleProducts);
                productsContainer.appendChild(dateProducts);

                dataCategoriesContainer.appendChild(productsContainer);

                /*
                const categoriesContainer = document.createElement('section');
                categoriesContainer.classList.add('categories_container');
                categoriesContainer.setAttribute('id', item.id);
                const titleCategories = document.createElement('h2');
                titleCategories.classList.add('title_categories');
                titleCategories.textContent = item.masterData.current.masterVariant.sku;
                categoriesContainer.append(titleCategories);
                const blockCategories = document.createElement('div');
                blockCategories.classList.add('categories_block');
                // blockCategories
                this.renderProductsCards(blockCategories, item.category);
                categoriesContainer.append(blockCategories);
                categoriesBasic.append(categoriesContainer);
                */
            }
        });

        categoriesBasic.append(dataCategoriesContainer);
    }
}
