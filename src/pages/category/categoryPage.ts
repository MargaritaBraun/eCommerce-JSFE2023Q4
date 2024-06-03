import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';
import renderOnCategoryList from '../../utils/functions/renderOnCategoryList';

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = categoryPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    public run() {
        this.rendercategoryOnPages();
    }

    public rendercategoryOnPages() {
        renderOnCategoryList();
    }
}
