import Page from '../page';
import discountsPageTemplate from '../template/discountsPageTemplate';

export default class DiscountsPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = discountsPageTemplate;
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
