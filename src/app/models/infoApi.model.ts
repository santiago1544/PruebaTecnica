export interface InfoApiResponse{
  count: number,
  results: InfoApi[],
}

export interface InfoApi{
  Title:'string',
  Release_date:'string',
  Director:'string',
  Producer:'string'
}
