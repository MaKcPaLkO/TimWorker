import {useState} from "react";
import {useDispatch} from "react-redux";
import {finishTask, createTask} from "../feature/tasksSlice.ts";

type modalProps = {
    type: string
    title: string
    mandatory: boolean
}

type attributes = {
    name: string
    value: string
    required?: boolean
}

const Modal = ({type, title, mandatory}: modalProps) => {

    const [value, setValue] = useState("")


    const attrs: attributes = {
        name: type,
        value
    }

    if (mandatory) attrs.required = true

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setValue(event.target.value)
    }

    return (
        <div className="modal">
            <h3 className="modal-title">{title}</h3>
            <form>
                <div className="modal-actions">
                    <input
                        type="text"
                        className="modal-field"
                        onChange={(e) => changeHandler(e)}
                        {...attrs}
                    />
                    <input type="submit" className="btn btn-fill" value="OK" />
                    <button className="btn modal-cancel" >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Modal;
