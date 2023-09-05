const UserInput = () => {
  // we are using event because in form submition we dont want the browser to reload the page and do the default thing
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const resetHandler = () => {};
  // in here we expect to get two parameters, and we can't use the way we did it before look onChange
  // current saving in paranthese is identifier and its relate input.. and event.target.value is simply the value
  // provided for value parameter use below
  const inputChangeHandler = (input, value) => {};

  return (
    // here we are not using parenthesis after submitHandler because we want to pass the submitHandler value
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>

          <input
            onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
