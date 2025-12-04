import SiteDetailsClient from "./SiteDetailsClient";

export default async function Page({ params } : { params: { id: string } }) {
    const { id } = await params

  return <SiteDetailsClient id={id} />;
}