import { api } from "./api";

export async function fetchUsers(){
    return api.get("/user.json").then((response) => response.data);
}