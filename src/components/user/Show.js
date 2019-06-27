import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { retrieve, reset } from '../../actions/user/show';
import { del } from '../../actions/user/delete';

class Show extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    eventSource: PropTypes.instanceOf(EventSource),
    retrieve: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    deleteError: PropTypes.string,
    deleteLoading: PropTypes.bool.isRequired,
    deleted: PropTypes.object,
    del: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.retrieve(decodeURIComponent(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  del = () => {
    if (window.confirm('Are you sure you want to delete this item?'))
      this.props.del(this.props.retrieved);
  };

  render() {
    if (this.props.deleted) return <Redirect to=".." />;

    const item = this.props.retrieved;

    return (
      <div>
        <h1>Show {item && item['@id']}</h1>

        {this.props.loading && (
          <div className="alert alert-info" role="status">
            Loading...
          </div>
        )}
        {this.props.error && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{' '}
            {this.props.error}
          </div>
        )}
        {this.props.deleteError && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{' '}
            {this.props.deleteError}
          </div>
        )}

        {item && (
          <table className="table table-responsive table-striped table-hover">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">firstName</th>
                <td>{item['firstName']}</td>
              </tr>
              <tr>
                <th scope="row">middleName</th>
                <td>{item['middleName']}</td>
              </tr>
              <tr>
                <th scope="row">lastName</th>
                <td>{item['lastName']}</td>
              </tr>
              <tr>
                <th scope="row">phone</th>
                <td>{item['phone']}</td>
              </tr>
              <tr>
                <th scope="row">avatar</th>
                <td>{item['avatar']}</td>
              </tr>
              <tr>
                <th scope="row">email</th>
                <td>{item['email']}</td>
              </tr>
              <tr>
                <th scope="row">username</th>
                <td>{item['username']}</td>
              </tr>
              <tr>
                <th scope="row">roles</th>
                <td>{item['roles']}</td>
              </tr>
              <tr>
                <th scope="row">sex</th>
                <td>{item['sex']}</td>
              </tr>
              <tr>
                <th scope="row">lastIP</th>
                <td>{item['lastIP']}</td>
              </tr>
              <tr>
                <th scope="row">isActive</th>
                <td>{item['isActive']}</td>
              </tr>
              <tr>
                <th scope="row">isBlocked</th>
                <td>{item['isBlocked']}</td>
              </tr>
              <tr>
                <th scope="row">blockedBy</th>
                <td>{item['blockedBy']}</td>
              </tr>
              <tr>
                <th scope="row">activatedBy</th>
                <td>{item['activatedBy']}</td>
              </tr>
              <tr>
                <th scope="row">dateOfBirth</th>
                <td>{item['dateOfBirth']}</td>
              </tr>
              <tr>
                <th scope="row">remark</th>
                <td>{item['remark']}</td>
              </tr>
              <tr>
                <th scope="row">password</th>
                <td>{item['password']}</td>
              </tr>
              <tr>
                <th scope="row">languages</th>
                <td>{this.renderLinks('languages', item['languages'])}</td>
              </tr>
              <tr>
                <th scope="row">currency</th>
                <td>{item['currency']}</td>
              </tr>
              <tr>
                <th scope="row">addresses</th>
                <td>{this.renderLinks('addresses', item['addresses'])}</td>
              </tr>
              <tr>
                <th scope="row">tempRestaurants</th>
                <td>{this.renderLinks('temp_restaurants', item['tempRestaurants'])}</td>
              </tr>
              <tr>
                <th scope="row">reviews</th>
                <td>{this.renderLinks('reviews', item['reviews'])}</td>
              </tr>
              <tr>
                <th scope="row">foodOrders</th>
                <td>{this.renderLinks('food_orders', item['foodOrders'])}</td>
              </tr>
              <tr>
                <th scope="row">salt</th>
                <td>{item['salt']}</td>
              </tr>
              <tr>
                <th scope="row">createdAt</th>
                <td>{item['createdAt']}</td>
              </tr>
              <tr>
                <th scope="row">updatedAt</th>
                <td>{item['updatedAt']}</td>
              </tr>
            </tbody>
          </table>
        )}
        <Link to=".." className="btn btn-primary">
          Back to list
        </Link>
        {item && (
          <Link to={`/users/edit/${encodeURIComponent(item['@id'])}`}>
            <button className="btn btn-warning">Edit</button>
          </Link>
        )}
        <button onClick={this.del} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../../${type}/show/${encodeURIComponent(items)}`}>
        {items}
      </Link>
    );
  };
}

const mapStateToProps = state => ({
  retrieved: state.user.show.retrieved,
  error: state.user.show.error,
  loading: state.user.show.loading,
  eventSource: state.user.show.eventSource,
  deleteError: state.user.del.error,
  deleteLoading: state.user.del.loading,
  deleted: state.user.del.deleted
});

const mapDispatchToProps = dispatch => ({
  retrieve: id => dispatch(retrieve(id)),
  del: item => dispatch(del(item)),
  reset: eventSource => dispatch(reset(eventSource))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
