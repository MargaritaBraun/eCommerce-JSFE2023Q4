import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = categoryPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    public run() {}
}
