const EmailInput = (props: Props) => {
  const { className, placeholder, state, setState } = props;

  const onBlur = (event: React.FocusEvent) => {
    const $target = event.target as HTMLInputElement;
    $target.reportValidity();
  };

  return (
    <>
      <input
        type="email"
        className={className}
        placeholder={placeholder}
        value={state}
        pattern={"^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
        onChange={e => setState(e.target.value)}
        onBlur={onBlur}
      />
    </>
  );
};

interface Props {
  className: string;
  placeholder: string;
  state: string;
  setState: Function;
}

export default EmailInput;