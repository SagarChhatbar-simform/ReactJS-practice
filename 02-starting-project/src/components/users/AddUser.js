import React, { useState } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {

            setError({
                title:"Invalid Input",
                message:"Please enter valid name and age."
            });

            return;
        }
        if (+enteredAge < 1) {

            setError({
                title:"Invalid Age",
                message:"Please enter valid age > 0."
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler =()=>{
        setError(null);
    };

    return (
        <React.Fragment>
            {error &&  <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label >Username</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label >Age (Years)</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default AddUser;