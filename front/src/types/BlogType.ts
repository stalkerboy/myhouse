export interface IPropsBlogItem {
    id : string;
    title : string;
    coverImage : string;
    content : string;
    user : string;
}

export interface IStateBlogList {
    listItem : IPropsBlogItem[]
}