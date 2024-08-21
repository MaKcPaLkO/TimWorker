// import {useState} from "react";
import { Formik } from "formik";
import {useDispatch} from "react-redux";
import {finishTask, createTask} from "../feature/tasksSlice.ts";

type modalProps = {
    type: string
    title: string
    mandatory: boolean
}

type attributes = {
    name: string
    required?: boolean
}

const Modal = ({type, title, mandatory}: modalProps) => {

    const dispatch = useDispatch()

    const attrs: attributes = {
        name: type,
    }

    if (mandatory) attrs.required = true

    const taskFunc = type === "name" ? createTask : finishTask

    return (
        <div className="modal">
            <h3 className="modal-title">{title}</h3>
            <Formik
                initialValues={{[type]: ""}}
                onSubmit={(values) => {
                    dispatch(taskFunc(values[type]))
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="modal-actions">
                            <input
                                type="text"
                                className="modal-field"
                                onChange={handleChange}
                                value={values[type]}
                                {...attrs}
                            />
                            <input type="submit" className="btn btn-fill" value="OK"/>
                            <button className="btn modal-cancel">Cancel</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Modal;
