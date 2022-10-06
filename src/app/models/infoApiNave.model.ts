export interface InfoApiResponse{
  count: number,
  results: InfoApiNave[]
}

export interface InfoApiNave{
  Name:'string',
  Model:'string',
  Starship_class:'string',
  Passengers:'string'
}

