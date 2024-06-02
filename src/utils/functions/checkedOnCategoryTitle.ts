import getCategories from '../../api/category/getAllCategory';
import { RequestDatasetCategory } from '../interface/categoriesDataName';
import createdChildrenOnCategory from './category-children';

export default async function checkedOnCategory(event: MouseEvent) {
    const selectedCategory = event.target as HTMLElement;
    const select = selectedCategory.getAttribute('id');
    console.log(select);
    const dataCategories: RequestDatasetCategory = await getCategories();
    const filteredCategory = dataCategories.results.find((data) => data.id === select);
    if (filteredCategory) {
        createdChildrenOnCategory(filteredCategory);
    }
}
