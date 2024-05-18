import Page from '../page';

export default class BasketPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'Basket Page';
        return this.container;
    }

    public run() {}
}
