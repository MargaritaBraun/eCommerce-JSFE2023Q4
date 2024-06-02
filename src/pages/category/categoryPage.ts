// import getCategories from '../../api/category/getAllCategory';
// import getProducts from '../../api/category/getAllProducts';
import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';
// import { RequestDatasetCategory } from '../../utils/interface/categoriesDataName';
// import createdChildrenOnCategory from '../../utils/functions/category-children';
// import { RequestOnProducts } from '../../utils/interface/productTypes';
import renderOnCategoryList from '../../utils/functions/renderOnCategoryList';

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = categoryPageTemplate;
        // const categoriesContainer = document.querySelector('.main-wrap');
        // categoriesContainer.classList.add('main-wrap');
        this.createHeaderFooter();
        return this.container;
    }

    /*
    private async getAllCategoriesAndProducts() {
        // await getCategories();
        //const dataCategories: RequestDatasetCategory = await getCategories();
        // const dataProducts: RequestOnProducts = await getProducts();
    }
*/
    public run() {
        // this.getAllCategoriesAndProducts();
        this.rendercategoryOnPages();
    }

    public rendercategoryOnPages() {
        renderOnCategoryList();
        /*
        console.log(dataCategories.results);
        const categoriesContainer: HTMLElement | null = document.querySelector('.main-wrap');
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
                titleCategories.addEventListener('click', this.checkedOnCategory);
                categoriesContainer.append(titleCategories);
            }
        });
        */
    }

    /*
    public async checkedOnCategory(): void {

        const selectedCategory = event.target as HTMLElement;
        const select = selectedCategory.getAttribute('id');
        console.log(select);
        const dataCategories: RequestDatasetCategory = await getCategories();
        const filteredCategory = dataCategories.results.find((data) => data.id === select);
        if (filteredCategory) {
            createdChildrenOnCategory(filteredCategory);
        }
        // this.updateProductsContainer();
    }
    */
    /*
    public updateProductsContainer() {
        const buttonOnReverse: HTMLElement | null = document.querySelector('.reverse_button');
        if (buttonOnReverse) {
            buttonOnReverse.addEventListener('click', () => {
                this.handleReverseButtonClick();
                console.log('Кнопка нажата');
            });
        }
    }

    private async handleReverseButtonClick() {
        const dataCategories: RequestDatasetCategory = await getCategories();
        this.rendercategoryOnPages(dataCategories);
        console.log('Кнопка нажата');
    }
*/
    // this.renderChildrenCategory(select);
    /*
    public renderChildrenCategory(select: string | null) {
        const categoriesContainer: HTMLElement | null = document.querySelector('.main-wrap');
        if (categoriesContainer) {
            categoriesContainer.innerHTML = '';
            const titleCategories = document.createElement('h2');
            titleCategories.classList.add('title_checklist');
            titleCategories.textContent = `Выбрана категория${select}`;
            categoriesContainer.append(titleCategories);
        }
    }
    */
}
