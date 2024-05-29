import Page from '../page';
import userPageTemplate from '../template/userPageTemplate';

export default class UserPage extends Page {
    public render(): HTMLElement {
        this.container = super.render();
        this.container.innerHTML = userPageTemplate;
        this.createHeaderFooter();
        return this.container;
    }

    public run() {
        super.run();
    }
}
