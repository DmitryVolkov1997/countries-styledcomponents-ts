export const BASE_URL = 'https://restcountries.com/v2/'

export const ALL_COUNTRIES = `${BASE_URL}/all`

export const searchByName = (name: string) => `https://restcountries.com/v2/name/${name}`

export const filterByCode = (codes: string[]) => BASE_URL + 'alpha?codes=' + codes.join(',')