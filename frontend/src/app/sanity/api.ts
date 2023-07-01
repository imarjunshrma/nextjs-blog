import client from "./client";
export const fetchTutorials=async(query:string):Promise<any>=>{
    return await client.fetch(query);
}

