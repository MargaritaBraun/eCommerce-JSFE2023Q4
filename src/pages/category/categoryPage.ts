import Page from '../page';
import categoryPageTemplate from '../template/categoryPageTemplate';
import footerTemplate from '../template/footerTemplate';
import headerTemplate from '../template/headerTemplate';

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        const header: HTMLElement = document.createElement('header');
        const footer: HTMLElement = document.createElement('footer');
        header.innerHTML = headerTemplate;
        footer.innerHTML = footerTemplate;
        this.container.innerHTML = categoryPageTemplate;
        this.container.prepend(header);
        this.container.append(footer);
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
