import React from 'react';
import { CityLocationPageTemplate } from '../components/CityLocationPageTemplate';
import { CITIES_CONFIG } from '../data/citiesConfig';

export const LocationAPage: React.FC = () => {
  return <CityLocationPageTemplate city={CITIES_CONFIG.peterhead} />;
};

export { LocationAPage as PeterheadPage };
export default LocationAPage;
