import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form on onSubmit={props.Getweather} className="frmw">
                <input type="text" name="country" placeholder='country' />
                <input type="text" name="city" placeholder='city' />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}


export default Form;