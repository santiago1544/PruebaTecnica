export interface InfoApiResponse{
  count: number,
  results: InfoApi[],
  results1: InfoApiDescripcion[],
  results2: InfoApiNave[],
  results3: InfoApiPersonaje[]
}

export interface InfoApi{
  Title:'string',
  Release_date:'string',
  Director:'string',
  Producer:'string'
}

export interface InfoApiDescripcion{
  Title:'string',
  Release_date:'string',
  Director:'string',
  Opening_crawl:'string',
  Producer:'string',
  Characters:'string'
}

export interface InfoApiNave{
  Name:'string',
  Model:'string',
  Starship_class:'string',
  Passengers:'string'
}

export interface InfoApiPersonaje{
  Name:'string',
  Birth_year:'string',
  Gender:'string',
  Mass:'string',
  Height:'string',
  Starships:'array'
}

