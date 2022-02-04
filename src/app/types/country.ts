export interface ICountry {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  car: { side: string };
  coatOfArms: Record<string, string>;
  continents: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  demonyms: Record<string, { f: string; m: string }>;
  fifa: string;
  flag: string;
  flags: Record<string, string>;
  independent: boolean;
  landlocked: boolean;
  idd: { root: string; suffixes: string[] };
  languages: Record<'nld' | 'pap', string>;
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Record<'nld' | 'pap', { official: string; common: string }>;
  };
  population: number;
  startOfWeek: string;
  region: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  unMember: boolean;
}
