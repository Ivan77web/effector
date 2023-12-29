import { Todo } from "./Todo";
import { InputBlock } from "./InputBlock";
import { useStore } from "effector-react";
import { $todos } from "./store";

export const Todos = () => {
    const todos = useStore($todos);

    return (
        <div>
            Todos:

            {
                todos.map(elem => <Todo value={elem.value} complete={elem.complete} id={elem.id} />)
            }

            <InputBlock />
        </div>
    )
}