import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = categoryPageTemplate;
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
