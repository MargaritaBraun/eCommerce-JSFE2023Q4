import Page from '../page';
import userPageTemplate from '../template/userPageTemplate';

export default class UserPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = userPageTemplate;
        return this.container;
    }

    public run() {
        this.methodsForAllPages();
    }
}
