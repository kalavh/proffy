import React,{SelectHTMLAttributes} from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name: string;
}


const Select: React.FC<SelectProps> = ({label,name, ...rest}) => {
    return(

        <div className="select-block">
            <label id="lsubject" htmlFor={name}> {label}</label>
            <select id="select" {...rest}/>
        </div>
    )
}

export default Select