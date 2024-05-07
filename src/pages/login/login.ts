import Page from '../page';

export default class LoginPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'Login Page';
        return this.container;
    }

    public loginRun() {}
}
