import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  renderField = data => {
    data.input.className = 'form-control';

    const isInvalid = data.meta.touched && !!data.meta.error;
    if (isInvalid) {
      data.input.className += ' is-invalid';
      data.input['aria-invalid'] = true;
    }

    if (this.props.error && data.meta.touched && !data.meta.error) {
      data.input.className += ' is-valid';
    }

    return (
      <div className={`form-group`}>
        <label
          htmlFor={`user_${data.input.name}`}
          className="form-control-label"
        >
          {data.input.name}
        </label>
        <input
          {...data.input}
          type={data.type}
          step={data.step}
          required={data.required}
          placeholder={data.placeholder}
          id={`user_${data.input.name}`}
        />
        {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component={this.renderField}
          name="firstName"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="middleName"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="lastName"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="phone"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="avatar"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="email"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="username"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="roles"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="sex"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="lastIP"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="isActive"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="isBlocked"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="blockedBy"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="activatedBy"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="dateOfBirth"
          type="dateTime"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="remark"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="password"
          type="text"
          placeholder="The hashed password"
        />
        <Field
          component={this.renderField}
          name="languages"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="currency"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="addresses"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="tempRestaurants"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="reviews"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="foodOrders"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="createdAt"
          type="dateTime"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="updatedAt"
          type="dateTime"
          placeholder=""
        />

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'user',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form);
