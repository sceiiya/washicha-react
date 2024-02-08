export interface IfHomepageSection {
    className: string;
    cards: (number | string | JSX.Element)[];
}

export interface IfCards{
    className: string;
    heading: string;
    subheading: string;
    button1?: JSX.Element;
    button2?: JSX.Element;
    price?: number;
    currency?: string;
    imgage?: any;
    stock?: string;
}

export interface IfButtonz{
    className: string;
    text: string;
}