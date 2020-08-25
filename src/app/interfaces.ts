export interface FavoriteList {
    listName: string,
    description: string,
    imageList: Array<string>
}
interface Urls {
    small: string;
    regular: string;
    raw:string;
}

interface User {
    links: Links;
    first_name: string;
    last_name: string;
}

interface Links {
    html: string;
}

export interface ImageData {
    urls: Urls;
    user: User;
}