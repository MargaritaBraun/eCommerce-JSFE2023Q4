import getCategories from '../../api/category/getAllCategory';
import getProducts from '../../api/category/getAllProducts';
import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = categoryPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    private async getAllCategoriesAndProducts() {
        await getCategories();
        await getProducts();
    }

    public run() {
        this.getAllCategoriesAndProducts();
    }
}
