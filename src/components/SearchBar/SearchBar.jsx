//./SearchBar.jsx

import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const notifyEmpty = () => toast.error("Please enter a value in the field");
  return (
    <header className={css.headerContainer}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            notifyEmpty();
          } else {
            onSearch(values.query.trim());
            actions.resetForm();
          }
        }}
      >
        <Form className={css.searchBar}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
