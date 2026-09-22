import React from 'react';
import { CityLocationPageTemplate } from '../components/CityLocationPageTemplate';
import { CITIES_CONFIG } from '../data/citiesConfig';

export const LocationWesthillPage: React.FC = () => {
  return <CityLocationPageTemplate city={CITIES_CONFIG.westhill} />;
};

export { LocationWesthillPage as WesthillPage };
export default LocationWesthillPage;
