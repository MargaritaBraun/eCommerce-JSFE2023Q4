import Page from '../page';

export default class MainPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'Main Page';
        return this.container;
    }

    public run() {}
}
