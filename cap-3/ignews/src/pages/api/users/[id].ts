import { NextApiRequest, NextApiResponse} from 'next'



export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)
  
  const users = [
    { id: 1, name: "Vitor" },
    { id: 2, name: "Carla" },
    { id: 3, name: "Bira" }
  ]

  return response.json(users)
}

