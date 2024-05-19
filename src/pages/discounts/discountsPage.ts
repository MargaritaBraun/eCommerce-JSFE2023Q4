import Page from '../page';

export default class DiscountsPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'DISCOUNTS PAGE';
        return this.container;
    }

    public run() {}
}
