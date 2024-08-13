interface watchProps {
    type: string
}

const Watch = ({type}: watchProps) => {

    return (
        <div className={"watch " + type}>
            <b>00</b>
            <span>:</span>
            <b>00</b>
        </div>
    )
}

export default Watch;
