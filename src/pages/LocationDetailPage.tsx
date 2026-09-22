import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CityLocationPageTemplate } from '../components/CityLocationPageTemplate';
import { CITIES_CONFIG, CityConfig } from '../data/citiesConfig';

export const LocationDetailPage: React.FC = () => {
  const { slug, locationSlug } = useParams<{ slug?: string; locationSlug?: string }>();
  const routerLocation = useLocation();

  const pathSegment = routerLocation.pathname.replace(/^\/|\/$/g, '').split('/').pop()?.toLowerCase() || '';
  const activeSlug = (slug || locationSlug || pathSegment).toLowerCase();

  let cityConfig: CityConfig = CITIES_CONFIG.peterhead;

  if (activeSlug.includes('inverurie') || activeSlug.includes('location-b')) {
    cityConfig = CITIES_CONFIG.inverurie;
  } else if (activeSlug.includes('stonehaven') || activeSlug.includes('location-c')) {
    cityConfig = CITIES_CONFIG.stonehaven;
  } else if (activeSlug.includes('fraserburgh') || activeSlug.includes('location-d')) {
    cityConfig = CITIES_CONFIG.fraserburgh;
  } else if (activeSlug.includes('westhill')) {
    cityConfig = CITIES_CONFIG.westhill;
  } else if (activeSlug.includes('peterhead') || activeSlug.includes('location-a')) {
    cityConfig = CITIES_CONFIG.peterhead;
  }

  return <CityLocationPageTemplate city={cityConfig} />;
};

export default LocationDetailPage;
