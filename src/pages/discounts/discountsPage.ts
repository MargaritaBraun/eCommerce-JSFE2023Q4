import Page from '../page';
import discountsPageTemplate from '../template/discountsPageTemplate';
import footerTemplate from '../template/footerTemplate';
import headerTemplate from '../template/headerTemplate';

export default class DiscountsPage extends Page {
    public render(): HTMLElement {
        const header: HTMLElement = document.createElement('header');
        const footer: HTMLElement = document.createElement('footer');
        header.innerHTML = headerTemplate;
        footer.innerHTML = footerTemplate;
        this.container.innerHTML = discountsPageTemplate;
        this.container.prepend(header);
        this.container.append(footer);
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
