import Page from '../page';

export default class RegistrationPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = 'Registration Page';
        return this.container;
    }

    public run() {}
}
