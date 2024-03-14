import { title } from "process";
import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "desc" >

export class TodoService {
    public get(id : number) : Todo{
        return {
            id : id,
            title : "mockoed todo",
            desc : "mocked todo",
            done : false
        }
    }

    public create(todoCreation : TodoCreationParams) : Todo{
        return {
            id : 1,
            title : "mockoed todo",
            desc : "mocked todo",
            done : false
        }
    }
}