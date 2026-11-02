import styles from "./InputField.module.scss";
interface InputProps {
  type: string;
  userState: (value: string) => void;
  user: string;
}
function InputField({ type, userState, user }: InputProps) {
  let t = `${type}`.charAt(0).toLocaleUpperCase() + `${type}`.slice(1);
  return (
    <div className={styles.formGroup}>
      <input
        onChange={(e) => userState(e.target.value)}
        value={user}
        type={`${type}`}
        placeholder={t}
        className={styles.formInput}
      />
    </div>
  );
}

export default InputField;
