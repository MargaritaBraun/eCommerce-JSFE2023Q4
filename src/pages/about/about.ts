import Page from '../page';

export default class AboutPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'About Page';
        return this.container;
    }

    public run() {}
}
