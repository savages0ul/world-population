import { Country } from '../types/country';
import { DataOption } from '../types/dataOption';

export function getDataOption(data: Country[]): DataOption[] {
  return data
    .map((item) => ({ value: item.population, name: item.cca2 }))
    .sort((a, b) => a.value - b.value);
}
