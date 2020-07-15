import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import Button from './Button';

function Form() {
  const formik = useFormik({
    initialValues: {
      name: 'Вася',
      email: '',
      birthdate: '',
      message: 'Привет, Петя!',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Обязательное поле'),
      email: Yup.string().email('Неккоректный Email-адрес').required('Обязательное поле'),
      birthdate: Yup.string()
        .matches(
          /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{2})$/,
          'Неверный формат'
        )
        .required('Обязательное поле'),
      message: Yup.string().required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2 className="form-title">Отправить сообщение</h2>
        <p className="form-subtitle">Анонимные сообщения рассматриваются</p>
        <div className="form-group">
          <Input
            name="name"
            id="name"
            label="Имя"
            className="input"
            placeholder="&nbsp;"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name}
          />
          <Input
            name="email"
            id="email"
            label="Email"
            className={formik.errors.email ? 'input-error' : 'input'}
            placeholder="&nbsp;"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            name="birthdate"
            id="birthdate"
            label="Дата рождения"
            className={formik.errors.birthdate ? 'input-error' : 'input'}
            placeholder="&nbsp;"
            type="text"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            error={formik.touched.birthdate && formik.errors.birthdate}
          />
        </div>
        <Input
          name="message"
          id="message"
          label="Сообщение"
          className={formik.errors.message ? 'input-error' : 'input'}
          placeholder="&nbsp;"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && formik.errors.message}
        />
        <div className="btn-container">
          <Button className="btn btn-clear" onClick={formik.handleReset}>
            Очистить
          </Button>
          <Button className="btn" type="submit" disabled={formik.isSubmitting || !formik.dirty}>
            Отправить
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;
