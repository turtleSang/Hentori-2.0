export const FormatNumber = (num: number): string => {
    return new Intl.NumberFormat("vi-VN").format(num)
}

export const FormatNumberToNumber = (txt: string) => {
    const num = txt.replace(/\./g, "");
    return parseInt(num);
}

export function isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^(0|\+84)[3-9][0-9]{8}$/;
    return phoneRegex.test(phone);
}