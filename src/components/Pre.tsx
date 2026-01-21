import React from "react";

type PreProps = {
  load: boolean;
};

function Pre({ load }: PreProps) {
  return <div id={load ? "preloader" : "preloader-none"} />;
}

export default Pre;
