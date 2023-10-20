"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("01fe6dbb-ac88-4c39-8fbc-3e5a9e933851");
  }, []);

  return null;
};
