export interface InfoApiResponse{
  count: number,
  results: InfoApiPersonaje[]
}

export interface InfoApiPersonaje{
  Name:'string',
  Birth_year:'string',
  Gender:'string',
  Mass:'string',
  Height:'string',
  Starships:'array'
}

