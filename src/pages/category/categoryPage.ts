import Page from '../page';
import categoryPage from '../template/categoryPageTemplate';
import headerTemplate from '../template/headerTemplate';
import productsData from '../template/dataForProducts';
// import fetchCategories, { Category } from '../../api/category/category';
// import fetchCategories from '../api/category/category';
const categoriesAllData = [
    {
        id: 1,
        category: 'dance-events',
        title: 'Танцевальные мероприятия',
    },
    {
        id: 2,
        category: 'movie',
        title: 'Кино',
    },
    {
        id: 3,
        category: 'theater-performances',
        title: 'Спектакли',
    },
    {
        id: 4,
        category: 'museums-exhibitions',
        title: 'Музеи и выставки',
    },
];

export default class CategoryPage extends Page {
    public render(): HTMLElement {
        const header = document.createElement('header');
        header.innerHTML = headerTemplate;
        this.container.innerHTML = categoryPage;
        this.container.prepend(header);
        const categoriesBasic = document.createElement('div');
        categoriesBasic.classList.add('categories_basic');
        this.rendercategories(categoriesBasic);
        this.container.appendChild(categoriesBasic);
        return this.container;
    }

    public rendercategories(categoriesBasic: HTMLDivElement) {
        categoriesAllData.forEach((item) => {
            const categoriesContainer = document.createElement('section');
            categoriesContainer.classList.add('categories_container');
            categoriesContainer.setAttribute('id', item.category);
            const titleCategories = document.createElement('h2');
            titleCategories.classList.add('title_categories');
            titleCategories.textContent = item.title;
            categoriesContainer.append(titleCategories);
            const blockCategories = document.createElement('div');
            blockCategories.classList.add('categories_block');
            // blockCategories
            this.renderProductsCards(blockCategories, item.category);
            categoriesContainer.append(blockCategories);
            categoriesBasic.append(categoriesContainer);
        });
    }

    // productsData.productsALLData

    public renderProductsCards(blockCategories: HTMLDivElement, findCategory: string) {
        productsData.productsALLData.forEach((item) => {
            if (item.category === findCategory) {
                const productsContainer = document.createElement('div');
                productsContainer.classList.add('products_container');
                productsContainer.setAttribute('id', item.id);
                const logoProducts = document.createElement('img');
                logoProducts.classList.add('img_cards_view');
                if (item.url) {
                    logoProducts.src = item.url;
                    logoProducts.alt = item.title;
                } else {
                    // Если нет URL-адреса, можно установить заглушку или сделать что-то другое
                    logoProducts.src = './img/img-not-fond.png';
                    logoProducts.alt = 'Placeholder';
                }

                const titleProducts = document.createElement('h3');
                titleProducts.textContent = item.title;

                const dateProducts = document.createElement('p');
                dateProducts.textContent = item.date;

                productsContainer.appendChild(logoProducts);
                productsContainer.appendChild(titleProducts);
                productsContainer.appendChild(dateProducts);

                blockCategories.appendChild(productsContainer);
            }
        });
    }

    public run() {}
}

/*
private categories: Category[];

constructor(container: HTMLElement) {
    super(container);
    this.categories = [];
}

public async loadCategories(): Promise<void> {
    try {
        this.categories = await fetchCategories();
        this.renderCategories();
    } catch (error) {
        console.error('Error loading categories:', error);
    }
}

public render(): HTMLElement {
    const header = document.createElement('header');
    header.innerHTML = headerTemplate;
    this.container.innerHTML = categoryPage;
    this.container.prepend(header);
    return this.container;
}

private renderCategories(): void {
    const categoriesContainer = this.container?.querySelector('#categories');
    if (categoriesContainer) {
        categoriesContainer.innerHTML = '';

        this.categories.forEach((category) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.textContent = category.name.en;
            categoriesContainer.appendChild(categoryDiv);
        });
    } else {
        console.error('Error: #categories container not found');
    }
}

public run(): void {
    this.loadCategories();
}
*/
