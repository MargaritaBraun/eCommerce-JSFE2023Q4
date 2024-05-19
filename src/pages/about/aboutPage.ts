import Page from '../page';

export default class AboutPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'ABOUT PAGE';
        return this.container;
    }

    public run() {}
}
