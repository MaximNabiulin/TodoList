const FormWithInput = (props) => {
  const {
    name,
    placeholder,
    text,
    onChange,
    onSubmit,
    formTitle,
    buttonTitle
  } = props;

  return (
    <form onSubmit={onSubmit}>
      <h2>{formTitle}</h2>
      <label htmlFor="todo">{`${formTitle}: `}</label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={onChange}
      />
      <button type="submit">{buttonTitle}</button>
    </form>
  )
}

export default FormWithInput;