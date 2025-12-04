"use client";

import { useEffect, useState } from "react";
import { fetchSites, fetchSiteById } from "../services/sitesApi";
import { Site } from "../components/SiteList";

export function useSites() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function run() {
      setLoading(true);
      const data = await fetchSites();
      if (active) {
        setSites(data);
        setLoading(false);
      }
    }

    run();

    return () => {
      active = false;
    };
  }, []);

  return { sites, loading };
}


export function useSiteDetails(id?: string) {
  const [site, setSite] = useState<Site | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    let active = true;

    async function run() {
      setLoading(true);
      const data = await fetchSiteById(id);
      if (active) {
        setSite(data);
        setLoading(false);
      }
    }

    run();

    return () => {
      active = false;
    };
  }, [id]);

  return { site, loading };
}
