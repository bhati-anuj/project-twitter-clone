import { api } from "./api";


export async function fetchTweets(){
    return api.get("/tweets.json").then((response) => response.data);
}