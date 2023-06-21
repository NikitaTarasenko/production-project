import { User } from 'entities/User';
import { ArticleBlockType, ArticleType } from '../consts/consts';

export interface ArticleBlockBase{
    id:string
    type: ArticleBlockType
}
export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleImgBlock extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE
    src: string;
    title: string;
}
export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticleBlockType.TEXT
    title?: string;
    paragraphs: string[];
}
export type ArticleBlock = ArticleCodeBlock | ArticleImgBlock | ArticleTextBlock;

export interface Article {
    id: string
    user: User
    title:string
    subtitle:string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}
