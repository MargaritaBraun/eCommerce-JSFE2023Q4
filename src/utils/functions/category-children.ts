import { CategoriesNameObject } from '../interface/categoriesDataName';
import clickedOnButtonReverse from './clickedOnButtonReverse';
import renderOnProductCard from './renderOnProductCard';

export default async function createdChildrenOnCategory(categoryObject: CategoriesNameObject) {
    const categoriesContainer: HTMLElement | null = document.querySelector('.main-wrap');
    if (categoriesContainer) {
        categoriesContainer.innerHTML = '';
        const blockChildrenCategories = document.createElement('div');
        blockChildrenCategories.classList.add('block_for_selected_category');
        const navigationsChildCategories = document.createElement('div');
        navigationsChildCategories.classList.add('nav_categories');
        if (categoryObject) {
            blockChildrenCategories.setAttribute('id', categoryObject.id);
        }
        const titleCategories = document.createElement('h2');
        titleCategories.classList.add('title_categories');
        titleCategories.textContent = `Категория / ${categoryObject.name.ru}`;
        const reverseButton = document.createElement('button');
        reverseButton.textContent = 'Назад';
        reverseButton.classList.add('reverse_button');
        navigationsChildCategories.append(titleCategories);
        navigationsChildCategories.append(reverseButton);
        blockChildrenCategories.append(navigationsChildCategories);
        categoriesContainer.append(blockChildrenCategories);
    }
    clickedOnButtonReverse();
    renderOnProductCard();
}
