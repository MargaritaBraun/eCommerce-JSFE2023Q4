import Page from '../page';
import aboutPageTemplate from '../template/aboutPageTemplate';

export default class AboutPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = aboutPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    public run() {
        super.run();
    }
}
