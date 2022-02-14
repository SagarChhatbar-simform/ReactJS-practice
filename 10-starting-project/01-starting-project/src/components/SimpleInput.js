
import useInput from '../Hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput

  } = useInput(value => value.trim() !=='');


  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetemailInput

  } = useInput(value => value.includes('@'));





  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();


    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }



    console.log(enteredName);
    resetNameInput();
    resetemailInput();

  };


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          value={enteredName}
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler} />
      </div>
      {nameInputHasError && <p className='error-text'>Name Must not be empty</p>}

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          value={enteredEmail}
          id='email'
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler} />
      </div>
      {emailInputHasError && <p className='error-text'>Please enter a valid Email</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
