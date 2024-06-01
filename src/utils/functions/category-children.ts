// import getCategories from '../../api/category/getAllCategory';
import { CategoriesNameObject } from '../interface/categoriesDataName';

export default function createdChildrenOnCategory(
    categoryObject: CategoriesNameObject /* inputPass: HTMLInputElement */
) {
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
        titleCategories.textContent = `Категория/${categoryObject.name.ru}`;
        // const reverseButton = document.createElement('button');
        const reverseLink = document.createElement('a');
        reverseLink.href = '#category';
        reverseLink.textContent = 'Назад';
        reverseLink.classList.add('reverse_link');
        navigationsChildCategories.append(titleCategories);
        navigationsChildCategories.append(reverseLink);
        blockChildrenCategories.append(navigationsChildCategories);
        categoriesContainer.append(blockChildrenCategories);
    }
}
