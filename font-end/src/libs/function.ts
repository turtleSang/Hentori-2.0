export const FormatNumber = (num: number): string => {
    return new Intl.NumberFormat("vi-VN").format(num)
}