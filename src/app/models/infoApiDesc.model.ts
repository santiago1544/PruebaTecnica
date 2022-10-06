export interface InfoApiResponse{
  count: number,
  results: InfoApiDescripcion[],
}

export interface InfoApiDescripcion{
  Title:'string',
  Release_date:'string',
  Director:'string',
  Opening_crawl:'string',
  Producer:'string',
}

