export enum ArticleBlockType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    CODE = "CODE",
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArcticleCodeBlock extends ArticleBlockBase {
    code: string;
    type: ArticleBlockType.CODE;
}

export interface ArcticleImageBlock extends ArticleBlockBase {
    src: string;
    title: string;
    type: ArticleBlockType.IMAGE;
}

export interface ArcticleTextBlock extends ArticleBlockBase {
    paragraphs: string[];
    type: ArticleBlockType.TEXT;
    title?: string;
}

export type ArticleBlock = ArcticleCodeBlock | ArcticleImageBlock | ArcticleTextBlock;

export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
