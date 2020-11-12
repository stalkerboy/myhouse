export interface IPropsPhotoItem {
    id : string;
    coverImage : string;
    content : string;
    user : string;
}

export interface IStatePhotoList {
    listItem : IPropsPhotoItem[]
}