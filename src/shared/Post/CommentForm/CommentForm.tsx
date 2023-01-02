import React, { ChangeEvent, FormEvent } from "react";
import styles from "./commentform.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/reducer";
import { commentUpdate } from "../../../store/comments/actions";

export function CommentForm() {
  const value = useSelector<RootState, string>((state) => state.comments.commentText);
  const [touched, setTouched] = React.useState(false);
  // const [valueError, setValueError] = React.useState("");
  const dispatch = useDispatch();

  const refTextarea = React.useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTouched(true);

    const isFormValid = !validateValue();

    if (!isFormValid) return;

    alert("Форма отправлена");
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(commentUpdate(event.target.value));
  }

  function validateValue() {
    if (value.length <= 3) return "Введите больше 3-х символов";
    return "";
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        ref={refTextarea}
        aria-invalid={validateValue() ? "true" : undefined}
      />
      {touched && validateValue() && (
        <div className={styles.validateMessage}>{validateValue()}</div>
      )}
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
