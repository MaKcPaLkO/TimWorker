import React from "react";

interface ButtonProps {
    className: string
    children?: React.ReactElement | null
}

const Button = ({className, children=null}:ButtonProps) => {
    return (
        <button className={className} >
            {children}
        </button>
    )
}

export default Button;
