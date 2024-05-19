import Page from '../page';
import categoryPage from '../template/categoryPageTemplate';

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = categoryPage;
        return this.container;
    }

    public run() {}
}
