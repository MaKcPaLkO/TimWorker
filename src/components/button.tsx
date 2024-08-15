import React from "react";

interface ButtonProps {
    className: string
    onClick: React.ReactEventHandler
    children?: React.ReactElement | null
}

const Button = ({className, onClick, children=null}:ButtonProps) => {
    return (
        <button className={className} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button;
