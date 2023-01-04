import React, { ChangeEvent, FormEvent } from "react";
import styles from "./commentform.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/reducer";
import { commentUpdate } from "../../../store/comments/actions";
import { Field, Form, Formik } from "formik";

export function CommentForm() {
  const value = useSelector<RootState, string>((state) => state.comments.commentText);
  const dispatch = useDispatch();

  function validateValue(value: string) {
    dispatch(commentUpdate(value));
    if (value.length <= 3) return "Введите больше 3-х символов";
  }

  return (
    <Formik
      initialValues={{
        commentText: value,
      }}
      onSubmit={(value) => alert("Форма отправлена")}>
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <Field
            as="textarea"
            name="commentText"
            className={styles.input}
            validate={validateValue}
          />
          {errors.commentText && touched.commentText && (
            <div className={styles.validateMessage}>{errors.commentText}</div>
          )}
          <button type="submit" className={styles.button}>
            Комментировать
          </button>
        </Form>
      )}
    </Formik>
  );
}
