"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("01fe6dbb-ac88-4c39-8fbc-3e5a9e933851");
  }, []);

  return null;
};
