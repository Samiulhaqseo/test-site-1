import React from 'react';
import { CityLocationPageTemplate } from '../components/CityLocationPageTemplate';
import { CITIES_CONFIG } from '../data/citiesConfig';

export const LocationCPage: React.FC = () => {
  return <CityLocationPageTemplate city={CITIES_CONFIG.stonehaven} />;
};

export { LocationCPage as StonehavenPage };
export default LocationCPage;
