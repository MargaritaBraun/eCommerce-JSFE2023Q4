import Page from '../page';
import aboutPageTemplate from '../template/aboutPageTemplate';
import footerTemplate from '../template/footerTemplate';
import headerTemplate from '../template/headerTemplate';

export default class AboutPage extends Page {
    public render(): HTMLElement {
        const header: HTMLElement = document.createElement('header');
        const footer: HTMLElement = document.createElement('footer');
        header.innerHTML = headerTemplate;
        footer.innerHTML = footerTemplate;
        this.container.innerHTML = aboutPageTemplate;
        this.container.prepend(header);
        this.container.append(footer);
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
