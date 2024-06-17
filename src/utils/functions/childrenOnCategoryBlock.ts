import { CategoriesNameObject } from '../interface/categoriesDataName';
import onClickButtonReverse from './onClickButtonReverse';
import renderOnProductCard from './renderOnProductCard';

export default function createChildrenOnCategory(categoryObject: CategoriesNameObject) {
    const categoriesContainer: HTMLElement | null = document.querySelector('.category_container');
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
    onClickButtonReverse();
    renderOnProductCard();
}
