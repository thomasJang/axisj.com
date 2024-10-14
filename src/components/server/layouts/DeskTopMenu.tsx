import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./DeskTopMenu.module.scss";

interface Props {}

export function DeskTopMenu({}: Props) {
  const t = useTranslations();

  const items = [
    {
      pathname: "/",
      hash: "axisj",
      label: t("router.axisj"),
    },
    {
      pathname: "/",
      hash: "service",
      label: t("router.service"),
    },
    {
      pathname: "/",
      hash: "solution",
      label: t("router.solution"),
    },
    {
      pathname: "/",
      hash: "contact",
      label: t("router.contact"),
    },
    {
      pathname: "/blog",
      label: t("router.blog.title"),
    },
  ];

  return (
    <div className={styles.menuList}>
      {items.map((item, index) => (
        <Link
          href={{
            pathname: item.pathname,
            hash: item.hash,
          }}
          key={index}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
