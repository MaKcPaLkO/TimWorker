
type modalProps = {
    type: string
    title: string
    onSubmit: React.ReactEventHandler
}

const Modal = ({type, title }: modalProps) => {


    return (
        <div className="modal hidden">
            <h3 className="modal-title">{title}</h3>
            <form >
                    <div className="modal-actions">
                        <input type="text" name={type} className="modal-field" />
                        <input type="submit" className="btn btn-fill" value="OK" />
                        <button className="btn modal-cancel">Cancel</button>
                    </div>
            </form>
        </div>
    )
}

export default Modal;
