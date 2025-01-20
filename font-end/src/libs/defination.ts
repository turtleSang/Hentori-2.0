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
export enum TypeProduct {
    Suit = "suit",
    SoMi = "so-mi",
    QuanTay = "quan-tay",
    PhuKien = "phu-kien"
}

export enum TypeSort {
    PriceLowToHigh = 1,
    PriceHighToLow = 2,
    HightLight = 0
}

export type DataProduct = { id: number, type: string, price: number, name: string, description: string, thumbImg: string, point: number, listImg?: string[] }

// Promotion
export type TypePromotion = 'percentage' | 'fixed';

export interface PromotionCriteria {
    amount?: number,
    typeProduct?: TypeProduct[],
    product?: DataProduct[]
}

export interface PromotionOption {
    id: string,
    name: string,
    description: string,
    typePromotion: TypePromotion,
    criteria?: PromotionCriteria
}


// Booking
export type BookingInfo = {
    phoneNumber: string,
    idProduct: number,
    date: Date
}