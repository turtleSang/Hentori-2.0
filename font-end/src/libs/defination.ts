import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type LinkInfo = {
    name: string,
    link: string
}

export type ItemIntro = {
    name: string,
    linkImg: string,
    alt: string,
    typeProduct: TypeProduct
    introLink: string
}

export type TypeLinkFooter = { title: string, listLink: { name: string, link: string, icon?: IconDefinition }[] }

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

export type DataProduct = { id: number, type: string, price: number, name: string, description: string, thumbImg: string, point: number }