interface Todo {
    title: string;
    desc: string;
    id: number;
    done: boolean;
}
type UpdateTodoInput = Partial<Todo>;
declare function UpdateTodo(id: number, newProps: UpdateTodoInput): void;
