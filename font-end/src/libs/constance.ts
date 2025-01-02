import { faSquareFacebook, faInstagram, faFacebookMessenger, IconDefinition, } from "@fortawesome/free-brands-svg-icons";
import { ItemIntro, LinkInfo, TypeLinkFooter, TypeProduct, TypeSort } from "./defination";
import { faLocationDot, faPhone, faArrowUpShortWide, faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";


export const LISTLINK: LinkInfo[] = [
    {
        name: 'Trang Chủ',
        link: '/'
    },
    {
        name: "Khách hàng",
        link: "/khach-hang"
    },
    {
        name: 'Sản Phẩm',
        link: '/san-pham'
    },
    {
        name: 'Khuyến Mãi',
        link: '/khuyen-mai'
    },
    {
        name: 'Liên Hệ',
        link: '/lien-he'
    },
]

export const LISTSOCIAL = [
    {
        content: "Hentori Bespoke",
        link: "https://www.facebook.com/Hentoribespoke.suitmaydo.thudaumot",
        icon: faSquareFacebook,
        type: "Facebook"
    },
    {
        content: "hentori_bespoke.tailor",
        link: "https://www.instagram.com/hentori_bespoke.tailor/",
        icon: faInstagram,
        type: "Instagram"
    }
];

export const LINKCAROUSEL = "https://sangnguyen1.sirv.com/hentori/1126(1).mp4";

export const LISTINTROPRODUCT: ItemIntro[] = [
    {
        name: "Suit",
        linkImg: "/intro-product/suit.jpg",
        alt: "Suit tại Hentori Bespoke",
        introLink: "/san-pham/suit",
        typeProduct: TypeProduct.Suit
    },
    {
        name: "Áo sơ mi",
        linkImg: "/intro-product/ao-so-mi.jpg",
        alt: "Áo sơ mi tại Hentori Bespoke",
        introLink: "/san-pham/so-mi",
        typeProduct: TypeProduct.SoMi
    },
    {
        name: "Quần tây",
        linkImg: "/intro-product/quan-tay.jpg",
        alt: "Quần tây tại Hentori Bespoke",
        introLink: "/san-pham/quan-tay",
        typeProduct: TypeProduct.QuanTay
    },
    {
        name: "Phụ Kiện",
        linkImg: "/intro-product/phu-kien.jpg",
        alt: "Phụ kiện tại Hentori Bespoke",
        introLink: "/san-pham/phu-kien",
        typeProduct: TypeProduct.PhuKien
    }
]

export const dataCustomer: { name: string, link: string }[] = [
    {
        link: "/customers/customers-1.jpg",
        name: "Tuxedo"
    },
    {
        link: "/customers/customers-2.jpg",
        name: "Suit"
    },
    {
        link: "/customers/customers-3.jpg",
        name: "Suit 2 Mảnh"
    },
    {
        link: "/customers/customers-4.jpg",
        name: "Tuxedo"
    },
    {
        link: "/customers/customers-5.jpg",
        name: "Suit"
    },
    {
        link: "/customers/customers-6.jpg",
        name: "Suit 2 Mảnh"
    },
    {
        link: "/customers/customers-7.jpg",
        name: "Tuxedo"
    },
    {
        link: "/customers/customers-8.jpg",
        name: "Suit"
    },
    {
        link: "/customers/customers-9.jpg",
        name: "Suit"
    },
    {
        link: "/customers/customers-10.jpg",
        name: "Suit"
    }
]

const listLinkProduct = (): { name: string, link: string }[] => {
    return LISTINTROPRODUCT.map((val) => {
        return { name: val.name, link: val.introLink }
    })
}
const listLinkSocial = (): { name: string, link: string }[] => {
    return LISTSOCIAL.map((val) => {
        return { name: `${val.type}: ${val.content}`, link: val.link }
    })
}

export const ListLinkFooter: TypeLinkFooter[] = [
    {
        title: "Sản phẩm",
        listLink: listLinkProduct()
    },
    {
        title: "Follow us",
        listLink: listLinkSocial()
    },
    {
        title: "Liên hệ",
        listLink: [
            {
                name: "Điện thoại: 0388858682",
                link: "tel:0388858682",
                icon: faPhone
            },
            {
                name: "Facebook Messenger",
                link: "https://www.facebook.com/Hentoribespoke.suitmaydo.thudaumot",
                icon: faFacebookMessenger
            },
            {
                name: "Địa chỉ 39 đường Hoàng Văn Thụ, phường Chánh Nghĩa, thành phố Thủ Dầu Một tỉnh Bình Dương",
                link: "https://maps.app.goo.gl/TMRQQyJzskKeZLkw7",
                icon: faLocationDot
            }
        ]
    }
]


export const LISTCUSTOMER = (): Promise<{ name: string, link: string }[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataCustomer)
        }, 500);
    })
}

export const infoLink = [
    {
        content: "Hentori Bespoke",
        link: "https://www.facebook.com/Hentoribespoke.suitmaydo.thudaumot",
        icon: faSquareFacebook,
        type: "Facebook"
    },
    {
        content:
            "Số 39 đường Hoàng Văn Thụ, phường Chánh Nghĩa, thành phố Thủ Dầu Một, tỉnh Bình Dương",
        link: "https://maps.app.goo.gl/SaSxV3199EbSxuHj8",
        icon: faLocationDot,
        type: "Địa chỉ"
    },
    {
        content: "0388858682",
        link: "tel:0388858682",
        icon: faPhone,
        type: "Điện thoại"
    },

];

export const GroupShort: { name: string, type: TypeSort, icon: IconDefinition }[] = [
    {
        name: "Sản phẩm nổi bật",
        type: TypeSort.HightLight,
        icon: faLightbulb
    },
    {
        name: "Sắp xếp theo giá giảm",
        type: TypeSort.PriceHighToLow,
        icon: faArrowUpShortWide
    },
    {
        name: "Sắp xếp theo giá tăng",
        type: TypeSort.PriceLowToHigh,
        icon: faArrowUpWideShort
    }
]  