import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityAreas, getCity, cityMeta } from "@/lib/werkgebied";
import { CityPage } from "@/components/werkgebied/city-page";

export function generateStaticParams() {
  return cityAreas.map((c) => ({ stad: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>;
}): Promise<Metadata> {
  const { stad } = await params;
  return cityMeta(stad);
}

export default async function Page({
  params,
}: {
  params: Promise<{ stad: string }>;
}) {
  const { stad } = await params;
  const city = getCity(stad);
  if (!city) notFound();
  return <CityPage city={city} />;
}
