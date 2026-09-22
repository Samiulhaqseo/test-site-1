import React from 'react';
import { CityLocationPageTemplate } from '../components/CityLocationPageTemplate';
import { CITIES_CONFIG } from '../data/citiesConfig';

export const LocationDPage: React.FC = () => {
  return <CityLocationPageTemplate city={CITIES_CONFIG.fraserburgh} />;
};

export { LocationDPage as FraserburghPage };
export default LocationDPage;
