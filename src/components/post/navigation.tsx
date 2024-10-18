import { Post } from "@/lib/types";

import styles from "./navigation.module.css";
import { Link } from "@/i18n/routing";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import * as React from "react";
import { Divider } from "antd";

const Navigation = ({ previous, next }: { previous?: Post; next?: Post }) => {
  return (
    <>
      <div className={styles.divider} />
      <div className={styles.navigation}>
        <div className={styles.previous}>
          {previous && (
            <Link href={`/blog/${previous.slug}`}>
              <div className={styles.title}>
                <ArrowLeftOutlined />
              </div>
              {previous.title}
            </Link>
          )}
        </div>

        <div className={styles.next}>
          {next && (
            <Link href={`/blog/${next.slug}`}>
              <div className={styles.title}>
                <ArrowRightOutlined />
              </div>
              {next.title}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
