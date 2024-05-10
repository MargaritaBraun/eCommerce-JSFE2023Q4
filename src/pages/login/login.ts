import Page from '../page';
import loginInner from '../template/loginInner';
import './login.scss';

export default class LoginPage extends Page {
    public render(): HTMLElement {
        this.container.innerHTML = loginInner;
        return this.container;
    }

    public run() {}
}
