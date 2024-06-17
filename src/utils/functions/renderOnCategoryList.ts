import getCategories from '../../api/category/getAllCategory';
import { RequestDatasetCategory } from '../interface/categoriesDataName';
import handleCategorySelection from './handleCategorySelection';

export default async function renderOnCategoryList() {
    const categoriesContainer: HTMLElement | null = document.querySelector('.category_container');
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
            titleCategories.addEventListener('click', handleCategorySelection);
            categoriesContainer.append(titleCategories);
        }
    });
}
