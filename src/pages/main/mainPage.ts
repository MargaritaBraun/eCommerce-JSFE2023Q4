import Page from '../page';
import mainPage from '../template/mainPageTemplate';

export default class MainPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = mainPage;
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
