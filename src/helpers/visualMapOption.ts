import { Country } from '../types/country';

export function getVisualMapOption(data: Country[]) {
  const array = data.map((item) => item.population);
  return [Math.min(...array), Math.max(...array)];
}
