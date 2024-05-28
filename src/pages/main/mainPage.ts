import Page from '../page';
import footerTemplate from '../template/footerTemplate';
import headerTemplate from '../template/headerTemplate';
import mainPage from '../template/mainPageTemplate';

export default class MainPage extends Page {
    public render(): HTMLElement {
        const header: HTMLElement = document.createElement('header');
        const footer: HTMLElement = document.createElement('footer');
        header.innerHTML = headerTemplate;
        footer.innerHTML = footerTemplate;
        this.container.innerHTML = mainPage;
        this.container.prepend(header);
        this.container.append(footer);
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
