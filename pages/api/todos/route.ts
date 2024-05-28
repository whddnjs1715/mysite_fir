import type { NextApiRequest, NextApiResponse } from "next";
import { fetchTodos } from 'data/firestore'

interface DataModel {
  id: string,
  title: string,
  is_done: boolean,
  created_at: string,
}

type Data = {
  message: string;
  data: Array<DataModel>
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {

    const { method, query } = req;

    if(method === 'GET') GET(req, res)
    // else if(method === 'POST') POST(req, res)
  }

  async function GET(
    req: NextApiRequest,      
    res: NextApiResponse<Data>,
) {

    const fetchedTodos = await fetchTodos();

    const response:Data = {
        message: `Get TodoList Success`,
        data: fetchedTodos,
    }
    
    res.status(200).json(response);
}