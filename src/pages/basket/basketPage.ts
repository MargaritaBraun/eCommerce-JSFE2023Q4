import Page from '../page';
import basketPageTemplate from '../template/basketPageTemplate';

export default class BasketPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = basketPageTemplate;
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
