import { User } from "@/entities/User";
import { ArticleBlockType, ArticleType } from "../consts/articleConstst";

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    code: string;
    type: ArticleBlockType.CODE;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    src: string;
    title: string;
    type: ArticleBlockType.IMAGE;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    paragraphs: string[];
    type: ArticleBlockType.TEXT;
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
