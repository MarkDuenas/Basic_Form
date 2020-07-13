import React, { useState } from 'react'

const HookForm = (props) => {
    const {inputs, setInputs} = props;
    const { password, confirmPassword } = props.inputs;

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // const onChange = (e) => {
    //     e.preventDefault();
    //     setInputs({
    //         ...inputs,
    //         [e.target.name] : e.target.value,
    //     })
    // };
    
    const nameHandler = (e) => {
        setInputs ({
            ...inputs,
            [e.target.name] : e.target.value,
        })
        if (e.target.value.length < 2) {
            setNameError("Name needs to be at least 2 characters long");
        }
        if (e.target.value.length > 2) {
            setNameError("");
        }
    }
    const emailHandler = (e) => {
        setInputs ({
            ...inputs,
            [e.target.name] : e.target.value,
        })
        if (e.target.value.length < 5) {
            setEmailError("Email needs to be at least 5 characters long");
        }
        if (e.target.value.length > 5) {
            setEmailError("");
        }
    }
    const passwordHandler = (e) => {
        setInputs ({
            ...inputs,
            [e.target.name] : e.target.value,
        })
        if (e.target.value.length < 8) {
            setPasswordError("Password needs to be at least 8 characters long");
        }
        else if (password !== confirmPassword ) {
            setPasswordError("Passwords must match")
        }

        else if (e.target.value.length > 8 && password === confirmPassword ) {
            setPasswordError("");
        }
        
    }

            
        

    // const resetForm = () => {
    //     setFirstname("");
    //     setLastname("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirm("");
    // }





    return (
        <div>

            <form>
                <div>
                    <label htmlFor="firstName"> First Name: </label>
                    <input type="text" name="firstName" onChange= {nameHandler} />
                    {
                        nameError ?
                        <p style = {{color:'red'}}> {nameError} </p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name: </label>
                    <input type="text" name = "lastName" onChange = {nameHandler}/>
                </div> 
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input type="text" name = "email" onChange= {emailHandler}/>
                    {
                        emailError ?
                            <p style = {{color:'red'}}> {emailError} </p> :
                            ""
                    }

                </div>
                <div>
                    <label htmlFor="password"> Password: </label>
                    <input type="text" name="password" onChange= {passwordHandler}/>
                    {
                        passwordError ?
                            <p style = {{color:'red'}}> {passwordError} </p> :
                            ""
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword"> Cofirm Password: </label>
                    <input type="text" name="confirmPassword" onChange= {passwordHandler} />
                    {
                        passwordError ?
                            <p style = {{color:'red'}}> {passwordError} </p> :
                            ""
                    }
                </div>
            </form>

        </div>


    )
}

export default HookForm
