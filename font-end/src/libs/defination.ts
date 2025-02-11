import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import clsx from "clsx"

//Web link
export type LinkInfo = {
    name: string,
    link: string
}


export type TypeLinkFooter = { title: string, listLink: { name: string, link: string, icon?: IconDefinition }[] }

// Categrory
export interface Category {
    id: number,
    name: string,
    link: string,
    linkImg: string,
    altImg: string,
}

// Product

export enum TypeSort {
    PriceLowToHigh = 1,
    PriceHighToLow = 2,
    HightLight = 0
}

export interface ProductCreateDto {
    type: string,
    price: number,
    name: string,
    description: string,
    point: number
}

export type DataProduct = { id: number, type: string, price: number, name: string, description: string, thumbImg: string, point: number, listImg?: string[] }

// Promotion
export type TypePromotion = 'percentage' | 'fixed';

export interface PromotionCriteria {
    amount?: number,
    typeProduct?: string,
    product?: DataProduct[]
}

export interface PromotionOption {
    id: number,
    name: string,
    description: string,
    typePromotion: TypePromotion,
    linkImgThumbPromotion: string,
    startDate: Date,
    endDate: Date,
    criteria?: PromotionCriteria
}

export class Promotion {
    id: number;
    name: string;
    description: string;
    typePromotion: TypePromotion;
    linkImgThumbPromotion: string;
    startDate: Date;
    endDate: Date;
    criteria?: PromotionCriteria;

    constructor(option: PromotionOption) {
        this.id = option.id;
        this.name = option.name;
        this.description = option.description;
        this.typePromotion = option.typePromotion;
        this.linkImgThumbPromotion = option.linkImgThumbPromotion;
        this.startDate = option.startDate;
        this.endDate = option.endDate;
        this.criteria = option.criteria;
    }
}
// Booking
export type BookingInfo = {
    phoneNumber: string,
    idProduct: number,
    date: Date
}