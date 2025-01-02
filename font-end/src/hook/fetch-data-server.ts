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