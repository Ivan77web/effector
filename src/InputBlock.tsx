import { useCallback, useState } from "react"
import { addTodo } from "./store";

export const InputBlock = () => {
    const [value, setValue] = useState<string>();
    const [complete, setComplete] = useState<boolean>(false);

    const handleCheck = useCallback(() => {
        setComplete(!complete);
    }, [complete])

    const handleSend = useCallback(() => {
        console.log(value, complete);
        addTodo({ value: value || '', complete, id: Math.random() });
    }, [value, complete])

    return (
        <div>
            <input placeholder="Value" onChange={e => setValue(e.target.value)} value={value} />
            <input type='checkbox' onChange={handleCheck} checked={complete} />

            <button onClick={handleSend}>SEND</button>
        </div>
    )
}