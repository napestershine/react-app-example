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
          htmlFor={`restaurant_${data.input.name}`}
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
          id={`restaurant_${data.input.name}`}
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
          name="title"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="minimumOrderValue"
          type="number"
          step="0.1"
          placeholder=""
          normalize={v => parseFloat(v)}
        />
        <Field
          component={this.renderField}
          name="deliveryTime"
          type="number"
          placeholder=""
          normalize={v => parseFloat(v)}
        />
        <Field
          component={this.renderField}
          name="logo"
          type="text"
          placeholder="A image url of 95x95 size"
        />
        <Field
          component={this.renderField}
          name="logoImage"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="status"
          type="text"
          placeholder="status of restaurant: Active, InActive, blocked"
        />
        <Field
          component={this.renderField}
          name="backgroundImage"
          type="text"
          placeholder="restaurant profile background image: 1670x480"
        />
        <Field
          component={this.renderField}
          name="backgroundImageFile"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="profileLogoFile"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="profileLogo"
          type="text"
          placeholder="240X140"
        />
        <Field
          component={this.renderField}
          name="haveDelivery"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="haveTakeAway"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="haveFreeFood"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="slug"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="email"
          type="email"
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
          name="website"
          type="url"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="about"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="tags"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="cuisines"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="foodCategories"
          type="text"
          placeholder=""
          normalize={v => (v === '' ? [] : v.split(','))}
        />
        <Field
          component={this.renderField}
          name="isFeatured"
          type="checkbox"
          placeholder=""
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
          name="restaurantWorkSchedules"
          type="text"
          placeholder=""
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
  form: 'restaurant',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form);
