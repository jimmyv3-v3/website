import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { cityAreas, getCity, cityMeta } from "@/lib/werkgebied";
import { CityPage } from "@/components/werkgebied/city-page";

export function generateStaticParams() {
  return cityAreas.map((c) => ({ stad: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; stad: string }>;
}): Promise<Metadata> {
  const { locale, stad } = await params;
  return cityMeta(stad, locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; stad: string }>;
}) {
  const { locale, stad } = await params;
  setRequestLocale(locale);
  const city = getCity(stad, locale);
  if (!city) notFound();
  return <CityPage city={city} />;
}
