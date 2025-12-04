"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { Site } from "../components/SiteList";

type SiteCtx = {
  selectedSite:  Site | null;
  setSelectedSite: (s: Site) => void;
};

const SiteContext = createContext<SiteCtx | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);

  const value = useMemo(() => ({ selectedSite, setSelectedSite }), [selectedSite]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
