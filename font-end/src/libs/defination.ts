import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type LinkInfo = {
    name: string,
    link: string
}

export type ItemIntro = {
    name: string,
    linkImg: string,
    alt: string,
    introLink: string
}

export type TypeLinkFooter = { title: string, listLink: { name: string, link: string, icon?: IconDefinition }[] }