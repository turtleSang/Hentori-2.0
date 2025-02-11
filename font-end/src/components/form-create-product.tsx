"use client";

import InputTxt from "./input-txt";
import InputNumber from "./input-number";
import {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  useEffect,
  useState,
} from "react";
import BtnCreate from "./btn-create";
import { FormatNumber, FormatNumberToNumber } from "@/libs/helper";
import InputDropDown from "./input-dropdown";
import { getCategory } from "@/hook/fetch-data-server";
import useSWR from "swr";

import InputArea from "./input-area";
import InputFileSingle from "./input-file-single";

import PreviewImage from "./preview-image";

import InputFileMultiple from "./input-file-multiple";

export default function FormCreateProduct({
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  const [inputForm, setInputForm] = useState<any>();
  const [priceFormat, setPriceFormat] = useState("0");
  const { data } = useSWR("category", () => getCategory());
  const [srcProductThumb, setSrcProductThumb] = useState<string>("");
  const [srcListImgProduct, setSrclistImgProduct] = useState<string[]>([]);

  const handleChangePrice = (event: FormEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    const name = element.name;
    const val = element.value;
    if (!val) {
      setInputForm((value: any) => ({ ...value, [name]: 0 }));
      setPriceFormat("0");
    }

    const number = FormatNumberToNumber(val);
    if (!number) {
      return;
    }
    const formatNumber = FormatNumber(number);
    setPriceFormat(formatNumber);
    setInputForm((value: any) => ({ ...value, [name]: number }));
  };

  const handleChangeTxt = (event: FormEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    const name = element.name;
    const val = element.value;
    setInputForm((value: any) => ({ ...value, [name]: val }));
  };
  const handleChangeTextArea = (event: FormEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLTextAreaElement;
    const name = element.name;
    const val = element.value;
    setInputForm((value: any) => ({ ...value, [name]: val }));
  };

  const handleChangeSellect = (event: ChangeEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    const name = element.name;
    const val = element.value;
    setInputForm((value: any) => {
      return { ...value, [name]: val };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputForm);
  };

  const handleImageThumb = (e: FormEvent<HTMLInputElement>) => {
    const fileList = (e.target as HTMLInputElement).files;
    const name = (e.target as HTMLInputElement).name;

    if (fileList && fileList[0].type.startsWith("image/")) {
      setSrcProductThumb(URL.createObjectURL(fileList[0]));
      setInputForm((value: any) => {
        return { ...value, [name]: fileList[0] };
      });
    }
  };

  const handleDeteleImgThumb = () => {
    setSrcProductThumb("");
    setInputForm((val: any) => {
      return { ...val, productThumb: undefined };
    });
  };

  const handleListImage = (e: FormEvent<HTMLInputElement>) => {
    const fileList = (e.target as HTMLInputElement).files;
    const name = (e.target as HTMLInputElement).name;
    if (fileList) {
      let listImg: File[] = [];
      let listImgURL: string[] = [];
      for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].type.startsWith("image/")) {
          listImg = [...listImg, fileList[i]];
          listImgURL = [...listImgURL, URL.createObjectURL(fileList[i])];
        }
      }
      setInputForm((val: any) => {
        return { ...val, [name]: listImg };
      });
      setSrclistImgProduct(listImgURL);
    }
  };

  const handleDeleteImgList = (index: number) => {
    let newSrcListImgProduct = srcListImgProduct.filter((val, i) => i != index);
    let newlistImgProduct = (inputForm.listImgProduct as File[]).filter(
      (val, i) => i != index
    );
    setInputForm((val: any) => {
      return { ...val, listImgProduct: newlistImgProduct };
    });
    setSrclistImgProduct(newSrcListImgProduct);
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 md:grid-cols-2 max-h-[80vh] overflow-y-auto pb-10"
      {...props}
      onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
    >
      <InputTxt
        lable="Tên sản phẩm"
        name="name"
        placeholder="Nhập tên sản phẩm"
        onInput={(event: FormEvent<HTMLInputElement>) => {
          handleChangeTxt(event);
        }}
      />
      <InputNumber
        lable="Giá"
        name="price"
        onInput={(event: FormEvent<HTMLInputElement>) => {
          handleChangePrice(event);
        }}
        value={priceFormat}
      />
      <InputDropDown
        title="Loại sản phẩm"
        name="category"
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          handleChangeSellect(event);
        }}
        listDropDown={data?.map((val) => {
          return (
            <option value={val.id} key={val.id}>
              {val.name}
            </option>
          );
        })}
      ></InputDropDown>
      <InputArea
        rows={2}
        placeholder="Nhập nội dung sản phẩm...."
        name="description"
        onChange={(e) => handleChangeTextArea(e)}
      />
      <hr className="h-1 bg-slate-300 md:col-span-2 rounded-md" />
      <PreviewImage
        imgSrc={srcProductThumb}
        handleDeleteSingle={handleDeteleImgThumb}
      />
      <InputFileSingle
        name="productThumb"
        title="Tải lên hình ảnh đại diện sản phẩm"
        onChange={(e) => handleImageThumb(e)}
      />
      <hr className="h-1 bg-slate-300 md:col-span-2 rounded-md" />
      <PreviewImage
        imgSrc={srcListImgProduct}
        handleDeleteMultiple={handleDeleteImgList}
      />

      <InputFileMultiple
        name="listImgProduct"
        title="Tải lên danh sách hình sản phẩm"
        onChange={(e) => handleListImage(e)}
      />
      <BtnCreate type="submit">Tạo</BtnCreate>
    </form>
  );
}
