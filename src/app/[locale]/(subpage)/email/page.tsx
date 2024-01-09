import { PostListRSC } from "@/components/posts-list/rsc";
import React, { Suspense } from "react";

const Email = async () => {
  return (
    <div
      style={{
        padding: 100,
      }}
    >
      <div
        style={{
          border: "3px solid #000",
          padding: "10px 10px 5px 10px",
          display: "inline-block",
        }}
      >
        <img
          src={"/images/axisj-email.png"}
          width={140}
          style={{ margin: 0, lineHeight: 1, display: "block" }}
        />
        <p
          style={{
            marginTop: 5,
            fontSize: 13,
            padding: "5px 5px",
            lineHeight: 1.5,
          }}
        >
          <b>대표 장기영</b>
          <br />
          010-8881-9137, tom@axisj.com
        </p>
      </div>
    </div>
  );
};

export default Email;
