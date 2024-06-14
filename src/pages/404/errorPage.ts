import errorPage from '../template/errorPageTemplate';

export default class ErrorPage {
    protected container: HTMLElement;

    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    public render(): HTMLElement {
        this.container.innerHTML = errorPage;
        return this.container;
    }

    public run() {}
}
