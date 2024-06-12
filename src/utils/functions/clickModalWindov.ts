import renderModalProduct from './renderModalProduct';

export default function clickedModalWindow(event: MouseEvent): void {
    const productsContainer = event.target instanceof HTMLElement && event.target.closest('.products_container');
    if (productsContainer) {
        const idProduct = productsContainer.getAttribute('id');
        renderModalProduct(idProduct);
    }
}
