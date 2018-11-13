import React, {Fragment} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SelectField from "../SelectField/SelectField";
import {getAuthError, getAuthRegisterSuccess, getAuthToken} from "../../reducer";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import './Register.css';

export const Register = props => {
  const {error, dispatch, action, token, registerSuccess, redirect} = props;

  // build dom fields
  const fields = props.fields.map((field, i) => {
    return (
      <div key={i}>
        {(field.type === 'text' || field.type === 'email' || field.type === 'password') &&
        <Fragment>
          <Field name={field.name} placeholder={field.placeholder} type={field.type} validate={field.validate} />
          <ErrorMessage name={field.name} component="div" className="alert alert-danger" />
        </Fragment>
        }
        {field.type === 'select' &&
        <Fragment>
          <Field name={field.name} component={SelectField} options={field.options} placeholder={field.placeholder} />
          <ErrorMessage name={field.name} component="div" className="alert alert-danger" />
        </Fragment>
        }
      </div>
    )
  });

  // build validation schema
  const shape = props.fields.reduce((accumulator, field) => {
    if (field.schema) {
      return {
        ...accumulator,
        [field.name]: field.schema
      }
    }
    else {
      return accumulator;
    }
  }, {});

  const schema = Yup.object().shape(shape);

  // build initial values
  const initialValues = props.fields.reduce((accumulator, field) => {
    return {
      ...accumulator,
      [field.name]: field.value || ''
    }
  }, {});

  return (
    <div className='Register'>
      {registerSuccess &&
      <div className="alert alert-success">
        Your account has been created. Please go <Link to={redirect}>Login</Link>
      </div>
      }

      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={schema}
        onSubmit={values => dispatch(action(values, token))}
        render={({ errors, touched, isValidating }) => (
          <Form>
            {fields}

            <button type="submit" className="btn btn-block btn-brand">
              Submit {isValidating && <i className="fa fa-spinner fa-spin"></i>}
            </button>

            {error && <div className="alert alert-danger">{error}</div>}
          </Form>
        )}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: getAuthError(state),
    registerSuccess: getAuthRegisterSuccess(state),
    token: getAuthToken(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);