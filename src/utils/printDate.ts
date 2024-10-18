import dayjs from "dayjs";
export default function printDate(
  dateString?: string | number,
  locale?: string
) {
  const dateFormat = locale === "ko" ? "YYYY년 MM월 DD일" : "MMM D, YYYY";
  return dayjs(dateString).format(dateFormat);
}
