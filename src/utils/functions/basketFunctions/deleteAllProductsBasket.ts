import showEmptyBasket from './showEmptyBasket';

export default function deleteAllProductsBasket() {
    const buttonDeleteAllProducts = document.querySelector('.button_delete_all');
    if (buttonDeleteAllProducts) {
        buttonDeleteAllProducts.addEventListener('click', () => {
            localStorage.clear();
            const productsContainer = document.querySelectorAll('.card_basket_container');
            if (productsContainer) {
                productsContainer.forEach((product) => {
                    product.remove();
                });
            }
            showEmptyBasket();
        });
    }
}
