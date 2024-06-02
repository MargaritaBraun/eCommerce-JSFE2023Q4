// import getCategories from '../../api/category/getAllCategory';
import { CategoriesNameObject } from '../interface/categoriesDataName';
import getProducts from '../../api/category/getAllProducts';
import { Attribute, AttributesData, RequestDatasetProducts } from '../interface/productTypes';
import clickedOnButtonReverse from './clickedOnButtonReverse';
// import renderOnProductCard from './renderOnProductCard';

export default async function createdChildrenOnCategory(categoryObject: CategoriesNameObject) {
    const categoriesContainer: HTMLElement | null = document.querySelector('.main-wrap');
    const dataProducts: RequestDatasetProducts = await getProducts();
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
        dataProducts.results.forEach((data) => {
            // console.log(data);
            if (categoryObject.id === data.masterData.staged.categories[0].id) {
                const dataInProduct: AttributesData = data.masterData.staged.masterVariant.attributes;
                console.log(
                    dataInProduct.forEach((obj) => {
                        obj.name === 'date-show';
                    })
                );
                // const dateShowData: DateShowAttribute = dataInProduct.find((attr) => attr.name === 'date-show');
                // const dateShowValue = dateShowData.value[0];
                // console.log(dateShowValue);
            }
        });
        /*
         */
    }
    clickedOnButtonReverse();
    // renderOnProductCard();
}
