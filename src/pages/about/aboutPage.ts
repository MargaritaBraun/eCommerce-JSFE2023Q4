import Page from '../page';
import aboutPageTemplate from '../template/aboutPageTemplate';

export default class AboutPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = aboutPageTemplate;
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
