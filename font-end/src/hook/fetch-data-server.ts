import { Category, DataProduct, Promotion } from "@/libs/defination";

// Product 

const fakeData: DataProduct[] = [
    {
        id: 1,
        type: "suit",
        price: 10000000,
        name: "Suit 2 mảnh",
        description: "Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla",
        thumbImg: "/customers/customers-1.jpg",
        point: 5
    },
    {
        id: 2,
        type: "so-mi",
        price: 20000000,
        name: "sơ mi 2 mảnh",
        description: "Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla",
        thumbImg: "/customers/customers-2.jpg",
        point: 4
    },
    {
        id: 3,
        type: "quan-tay",
        price: 30000000,
        name: "sơ mi 5 mảnh",
        description: "Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla",
        thumbImg: "/customers/customers-3.jpg",
        point: 6
    },
    {
        id: 4,
        type: "phu-kien",
        price: 40000000,
        name: "Giày tây",
        description: "Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla Được cấu thành từ bla bla",
        thumbImg: "/customers/customers-4.jpg",
        point: 3
    }
]

export const GetProduct = (id: number): Promise<DataProduct | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data: DataProduct | undefined = fakeData.find((val) => val.id === id)
            resolve(data);
        }, 300)
    })
}



// Customer Img

export const dataCustomerImg: { name: string, link: string }[] = [
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

export const CustomerImgFake = (): Promise<{ name: string, link: string }[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataCustomerImg)
        }, 3000);
    })
}


// Category

export const dataCategory: Category[] = [
    {
        id: 1,
        link: "suit",
        name: "suit",
        altImg: "Hentori Suit",
        linkImg: "/intro-product/suit.jpg"
    },
    {
        id: 2,
        link: "so-mi",
        name: "Sơ mi",
        altImg: "Hentori Sơ Mi",
        linkImg: "/intro-product/ao-so-mi.jpg"
    },
    {
        id: 3,
        link: "quan-tay",
        name: "Quần Tây",
        altImg: "Hentori Quần",
        linkImg: "/intro-product/quan-tay.jpg"
    },
    {
        id: 4,
        link: "phu-kien",
        name: "Phụ kiện",
        altImg: "Hentori Suit",
        linkImg: "/intro-product/phu-kien.jpg"
    },
]

export const getCategory = (): Promise<Category[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataCategory)
        }, 2000);
    })
}



// Promotion

export const promotionFakeList: Promotion[] = [
    {
        id: 1,
        description: "Khuyễn mãi tết giảm 20 % điều kiện bla bla",
        startDate: new Date(),
        name: "Sale 20%",
        typePromotion: "percentage",
        linkImgThumbPromotion: "/introduction/intro-1.jpg",
        endDate: new Date("05/05/2025")
    },
    {
        id: 2,
        description: "Khuyễn mãi tết giảm 20 % điều kiện bla bla",
        startDate: new Date(),
        name: "Sale 20%",
        typePromotion: "percentage",
        linkImgThumbPromotion: "/introduction/intro-1.jpg",
        endDate: new Date("05/05/2025")
    },
    {
        id: 3,
        description: "Khuyễn mãi tết giảm 20 % điều kiện bla bla",
        startDate: new Date(),
        name: "Sale 20%",
        typePromotion: "percentage",
        linkImgThumbPromotion: "/introduction/intro-1.jpg",
        endDate: new Date("05/05/2025")
    },
    {
        id: 4,
        description: "Khuyễn mãi tết giảm 20 % điều kiện bla bla",
        startDate: new Date(),
        name: "Sale 20%",
        typePromotion: "percentage",
        linkImgThumbPromotion: "/introduction/intro-1.jpg",
        endDate: new Date("05/05/2025")
    },
]


export const getPromotion = (): Promise<Promotion[]> => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(promotionFakeList) }, 2000)
    })
}

export const getDetailPromotion = (id: number): Promise<Promotion | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const promotion = promotionFakeList.find((val) => {
                return val.id == id;
            })
            resolve(promotion)
        }, 2000);
    })
}


