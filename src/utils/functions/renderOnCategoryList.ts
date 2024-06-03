import getCategories from '../../api/category/getAllCategory';
import { RequestDatasetCategory } from '../interface/categoriesDataName';
import checkedOnCategory from './checkedOnCategoryTitle';

export default async function renderOnCategoryList() {
    const categoriesContainer: HTMLElement | null = document.querySelector('.main-wrap');
    const dataCategories: RequestDatasetCategory = await getCategories();
    const productsContainer: HTMLElement | null = document.querySelector('.block_for_selected_category');
    if (productsContainer) {
        productsContainer.remove();
    }
    dataCategories.results.forEach((data) => {
        if (categoriesContainer) {
            const titleCategories = document.createElement('h2');
            titleCategories.classList.add('title_checklist');
            titleCategories.textContent = data.name.ru;
            titleCategories.setAttribute('id', data.id);
            titleCategories.addEventListener('click', checkedOnCategory);
            categoriesContainer.append(titleCategories);
        }
    });
}
