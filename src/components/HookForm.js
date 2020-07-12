import React, { useState } from 'react'

const HookForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm};
        console.log("welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };


    return (
        <div>

            <form onSubmit= { createUser } >
                <div>
                    <label htmlFor="firstName"> First Name: </label>
                    <input type="text" onChange= { (e) => setFirstname(e.target.value) } value = { firstName } />
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name: </label>
                    <input type="text" onChange= { (e) => setLastname(e.target.value) } value = { lastName }/>
                </div> 
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input type="text" onChange= { (e) => setEmail(e.target.value) } value = { email }/>
                </div>
                <div>
                    <label htmlFor="password"> Password: </label>
                    <input type="text" onChange= { (e) => setPassword(e.target.value) } value = { password }/>
                </div>
                <div>
                    <label htmlFor="confirm"> Cofirm Password: </label>
                    <input type="text" onChange= { (e) => setConfirm(e.target.value) } value = { confirm } />
                </div>
                <input type="submit" value="Create User"/>
            </form>

            <h4> First Name : {firstName}</h4>
            <h4> Last Name : {lastName}</h4>
            <h4>  Email : {email}</h4>
            <h4> Password: {password}</h4>
            <h4> Confirm Password: {confirm}</h4>

        </div>


    )
}

export default HookForm
