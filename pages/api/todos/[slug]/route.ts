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

// localhost:3000/api/todos/123/route
export default function handler(
    req: NextApiRequest,      
    res: NextApiResponse<Data>,
) {
    try{
        const { method, query } = req;
        if(method === 'GET') GET(req, res)
        else if(method === 'POST') POST(req, res)
    }catch {
        console.error('error');
        res.status(500);
    }
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

async function POST(
    req: NextApiRequest,      
    res: NextApiResponse<Data>,
) {
    const data = await req.body

    if (!data 
        || typeof data.id === 'undefined' 
        || typeof data.title === 'undefined' 
        || typeof data.is_done === 'undefined'
    ) {
        return res.status(400).json({ message: 'Invalid data', data: [] });
    }    

    const newTodo: DataModel = {
        id: data.id, 
        title: data.title,
        is_done: data.is_done,
        created_at: data.created_at,
    };

    const response:Data = {
        message: `Add TodoList Success`,
        data: [newTodo],
    }
    
    res.status(201).json(response);
}