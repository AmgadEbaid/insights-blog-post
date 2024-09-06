import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../../../components/Editor"), {
  ssr: false,
});

import React from "react";

export default function page() {
  return (
    <div className="h-dvh  ">
      <Editor />
    </div>
  );
}
