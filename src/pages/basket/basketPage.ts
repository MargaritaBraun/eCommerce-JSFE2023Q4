import Page from '../page';

export default class BasketPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'BASKET PAGE';
        return this.container;
    }

    public run() {}
}
