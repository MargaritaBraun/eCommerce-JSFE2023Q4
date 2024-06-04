import renderModalProduct from './renderModalProduct';

export default function clickedModalWindow(event: MouseEvent): void {
    // console.log(event.target);
    // if (event.target instanceof HTMLElement && event.target.closest('.products_container')) {
    /*
    if (event.target instanceof HTMLElement && event.target.classList.contains('products_container')) {
        console.log('Выбрана категория');
        console.log(event.target);
    }
    */
    const productsContainer = event.target instanceof HTMLElement && event.target.closest('.products_container');
    if (productsContainer) {
        console.log(productsContainer);
        // Здесь вы можете выполнить необходимые действия с родительским элементом
        const idProduct = productsContainer.getAttribute('id');
        console.log(idProduct);
        renderModalProduct(idProduct);
    }
}
