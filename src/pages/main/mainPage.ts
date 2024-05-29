import Page from '../page';
import mainPage from '../template/mainPageTemplate';

export default class MainPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = mainPage;
        this.createHeaderFooter();
        return this.container;
    }

    public run() {
        // this.functionalityFromPage();
    }
}
