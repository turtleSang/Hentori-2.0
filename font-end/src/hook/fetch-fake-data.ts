import { DataProduct, TypeProduct, TypeSort } from "@/libs/defination";
import useSWR from "swr";

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

export const DataProductFake = (typeSort?: TypeSort, typeProduct?: TypeProduct): Promise<DataProduct[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {

            let listResult: { id: number, type: string, price: number, name: string, description: string, thumbImg: string, point: number }[] = fakeData.filter((val) => {
                if (typeProduct) {
                    return val.type === typeProduct.toString();
                }
                return val;
            })
            switch (typeSort) {
                case TypeSort.HightLight:
                    listResult = listResult.sort((a, b) => b.point - a.point);
                    break;
                case TypeSort.PriceHighToLow:
                    listResult = listResult.sort((a, b) => b.price - a.price);
                    break;
                default:
                    listResult = listResult.sort((a, b) => a.price - b.price);
                    break;
            }
            resolve(listResult);
        }, 5000)
    })
};

export const useProductFake = (typeSort?: TypeSort, typeProduct?: TypeProduct) => {
    const { data, error, isLoading } = useSWR([typeSort, typeProduct], () => DataProductFake(typeSort, typeProduct));
    return {
        data, isError: error, isLoading
    }
};



