import Page from '../page';
import footerTemplate from '../template/footerTemplate';
import headerTemplate from '../template/headerTemplate';
import userPageTemplate from '../template/userPageTemplate';

export default class UserPage extends Page {
    public render(): HTMLElement {
        const header: HTMLElement = document.createElement('header');
        const footer: HTMLElement = document.createElement('footer');
        header.innerHTML = headerTemplate;
        footer.innerHTML = footerTemplate;
        this.container.innerHTML = userPageTemplate;
        this.container.prepend(header);
        this.container.append(footer);
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
