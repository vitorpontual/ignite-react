import { NextApiRequest, NextApiResponse} from 'next'

/* 

JWT (Storage)
Next Auth (Social )

Provider Autenticação externo (Serviço de autenticaçãoreb): Cognite, Auth0,

*/


export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Vitor" },
    { id: 2, name: "Carla" },
    { id: 3, name: "Bira" }
  ]

  return response.json(users)
}

/* 

  Serverless 
  - Executar uma função em um ambiente isolado, service on demand

*/