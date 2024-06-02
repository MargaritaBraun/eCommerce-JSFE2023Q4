import renderOnCategoryList from './renderOnCategoryList';

export default function clickedOnButtonReverse() {
    const buttonOnReverse: HTMLElement | null = document.querySelector('.reverse_button');
    if (buttonOnReverse) {
        buttonOnReverse.addEventListener('click', () => {
            const categoriesContainer: HTMLElement | null = document.querySelector('.main-wrap');
            if (categoriesContainer) {
                renderOnCategoryList();
            }
        });
    }
}
