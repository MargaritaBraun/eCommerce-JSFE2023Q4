import getProductOnID from '../../../api/category/getProduct';
import { CostPrices, RequestOnProducts } from '../../interface/productTypes';
import getPricesOfProduct from '../getPriceProduct';
import deleteSelectProductBasket from './deleteSelectProductBasket';
import finalAmountPrice from './finalAmountPrice';
import getPricesThisProduct from './getPriceThisProduct';
import deleteAllProductsBasket from './deleteAllProductsBasket';
import renderPriceOnCount from './renderPriceOnCount';

export default async function renderCardOnBasket(idProduct: string, value: string) {
    const dataProduct: RequestOnProducts = await getProductOnID(idProduct);
    if (idProduct && idProduct.trim() !== '') {
        const title = dataProduct.masterData.staged.masterVariant.sku;
        const costObj: CostPrices[] = dataProduct.masterData.staged.masterVariant.prices;
        const cost = getPricesOfProduct(costObj);

        const parantContainer = document.querySelector('.basket__container');
        if (parantContainer) {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card_basket_container');
            cardContainer.id = idProduct;

            const titleElement = document.createElement('p');
            titleElement.classList.add('card_basket_title');
            titleElement.textContent = title;

            const removeButton = document.createElement('button');
            removeButton.classList.add('button_delete_basket');
            removeButton.textContent = 'Удалить из корзины';

            const quantityLabel = document.createElement('label');
            quantityLabel.classList.add('label_basic');
            const quantityLabelSpan = document.createElement('span');
            quantityLabelSpan.classList.add('card_basket_span');
            quantityLabelSpan.textContent = 'Количество';

            const quantityInput = document.createElement('input');
            quantityInput.classList.add('input_basic');
            quantityInput.classList.add('input_basket');
            quantityInput.type = 'number';
            quantityInput.id = idProduct;
            quantityInput.value = `${value}`;
            quantityInput.min = '1';
            quantityInput.max = '10';

            quantityLabel.appendChild(quantityLabelSpan);
            quantityLabel.appendChild(quantityInput);

            const priceElement = document.createElement('p');
            priceElement.classList.add('prices_products');
            priceElement.classList.add('prices_basket');
            priceElement.textContent = cost;

            const totalPriceElement = document.createElement('p');
            totalPriceElement.classList.add('total_prices_basket');
            const totalPrice = renderPriceOnCount(cost, value);
            totalPriceElement.textContent = totalPrice;

            cardContainer.appendChild(titleElement);
            cardContainer.appendChild(removeButton);
            cardContainer.appendChild(quantityLabel);
            cardContainer.appendChild(priceElement);
            cardContainer.appendChild(totalPriceElement);

            parantContainer.appendChild(cardContainer);
            parantContainer.addEventListener('click', getPricesThisProduct);
            finalAmountPrice();
            removeButton.addEventListener('click', deleteSelectProductBasket);
            deleteAllProductsBasket();
        }
    }
}
// }
