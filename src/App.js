import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

function App() {
  const onSubmit = (values, actions) => {
    console.log('SUBMIT: ', values);
  }

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required()
  }); 

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        validateOnMount
        onSubmit={onSubmit} 
        initialValues={{
          name: '',
          email: '',
        }}
        render={({ values, handleSubmit, errors, touched, isValid }) => (
          <Form>
            <div>
              <Field name="name" type="text" />
              <ErrorMessage name="name"/>
              <Field name="email" type="text" />
              <ErrorMessage name="email"/>
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
