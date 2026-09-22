import React from 'react';
import { CityLocationPageTemplate } from '../components/CityLocationPageTemplate';
import { CITIES_CONFIG } from '../data/citiesConfig';

export const LocationBPage: React.FC = () => {
  return <CityLocationPageTemplate city={CITIES_CONFIG.inverurie} />;
};

export { LocationBPage as InveruriePage };
export default LocationBPage;
