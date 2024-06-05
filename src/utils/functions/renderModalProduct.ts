import getProductOnID from '../../api/category/getProduct';
import { CostPrices, RequestOnProducts } from '../interface/productTypes';
import getPricesOfProduct from './getPriceProduct';

export default async function renderModalProduct(idProduct: string | null) {
    console.log(`показывает полную карточку ${idProduct}`);
    if (idProduct) {
        const dataProduct: RequestOnProducts = await getProductOnID(idProduct);
        console.log(dataProduct);
        const title = dataProduct.masterData.staged.masterVariant.sku;
        const url: string = dataProduct.masterData.staged.masterVariant.images[0].url;
        const description = dataProduct.masterData.staged.description.ru;
        const costObj: CostPrices[] = dataProduct.masterData.staged.masterVariant.prices;
        const cost = getPricesOfProduct(costObj);

        const parantContainer = document.querySelector('.categories_basic');
        if (parantContainer) {
            parantContainer.innerHTML = '';

            const template = `
            <div class='modal_container'>
            <div>
            <p class='modal_title'>${title}</p>
            <p class="prices_products">${cost}</p>
            <p class='modal_modal_text'>Описание</p>
            <p class='modal_modal_text'>${description}</p>
            </div>
            <img class='modal_image' src="${url}" alt="${title}" />
            </div>
          `;
            parantContainer.innerHTML = template;
        }
    }
}
