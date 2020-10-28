export interface IPropsQNAItem {
    id : string;
    title : string;
    coverImage : string;
    content : string;
    user : string;
}

export interface IStateQNAList {
    listItem : IPropsQNAItem[]
}