"use client";

import { useEffect, useState } from "react";

export function WorkerUrl() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).href);
  }, []);
  return <p>{url}</p>;
}
