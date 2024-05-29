import Page from '../page';
import discountsPageTemplate from '../template/discountsPageTemplate';

export default class DiscountsPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = discountsPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    public run() {}
}
