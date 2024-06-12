import getCategories from '../../api/category/getAllCategory';
import { RequestDatasetCategory } from '../interface/categoriesDataName';
import createChildrenOnCategory from './childrenOnCategoryBlock';

export default async function handleCategorySelection(event: MouseEvent) {
    const selectedCategory = event.target as HTMLElement;
    const select = selectedCategory.getAttribute('id');
    const dataCategories: RequestDatasetCategory = await getCategories();
    const filteredCategory = dataCategories.results.find((data) => data.id === select);
    if (filteredCategory) {
        createChildrenOnCategory(filteredCategory);
    }
}
