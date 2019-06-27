import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { list, reset } from '../../actions/user/list';

class List extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    eventSource: PropTypes.instanceOf(EventSource),
    deletedItem: PropTypes.object,
    list: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.list(
      this.props.match.params.page &&
        decodeURIComponent(this.props.match.params.page)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.page !== nextProps.match.params.page)
      nextProps.list(
        nextProps.match.params.page &&
          decodeURIComponent(nextProps.match.params.page)
      );
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  render() {
    return (
      <div>
        <h1>User List</h1>

        {this.props.loading && (
          <div className="alert alert-info">Loading...</div>
        )}
        {this.props.deletedItem && (
          <div className="alert alert-success">
            {this.props.deletedItem['@id']} deleted.
          </div>
        )}
        {this.props.error && (
          <div className="alert alert-danger">{this.props.error}</div>
        )}

        <p>
          <Link to="create" className="btn btn-primary">
            Create
          </Link>
        </p>

        <table className="table table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>firstName</th>
              <th>middleName</th>
              <th>lastName</th>
              <th>phone</th>
              <th>avatar</th>
              <th>email</th>
              <th>username</th>
              <th>roles</th>
              <th>sex</th>
              <th>lastIP</th>
              <th>isActive</th>
              <th>isBlocked</th>
              <th>blockedBy</th>
              <th>activatedBy</th>
              <th>dateOfBirth</th>
              <th>remark</th>
              <th>password</th>
              <th>languages</th>
              <th>currency</th>
              <th>addresses</th>
              <th>tempRestaurants</th>
              <th>reviews</th>
              <th>foodOrders</th>
              <th>salt</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th colSpan={2} />
            </tr>
          </thead>
          <tbody>
            {this.props.retrieved &&
              this.props.retrieved['hydra:member'].map(item => (
                <tr key={item['@id']}>
                  <th scope="row">
                    <Link to={`show/${encodeURIComponent(item['@id'])}`}>
                      {item['@id']}
                    </Link>
                  </th>
                  <td>{item['firstName']}</td>
                  <td>{item['middleName']}</td>
                  <td>{item['lastName']}</td>
                  <td>{item['phone']}</td>
                  <td>{item['avatar']}</td>
                  <td>{item['email']}</td>
                  <td>{item['username']}</td>
                  <td>{item['roles']}</td>
                  <td>{item['sex']}</td>
                  <td>{item['lastIP']}</td>
                  <td>{item['isActive']}</td>
                  <td>{item['isBlocked']}</td>
                  <td>{item['blockedBy']}</td>
                  <td>{item['activatedBy']}</td>
                  <td>{item['dateOfBirth']}</td>
                  <td>{item['remark']}</td>
                  <td>{item['password']}</td>
                  <td>{this.renderLinks('languages', item['languages'])}</td>
                  <td>{item['currency']}</td>
                  <td>{this.renderLinks('addresses', item['addresses'])}</td>
                  <td>{this.renderLinks('temp_restaurants', item['tempRestaurants'])}</td>
                  <td>{this.renderLinks('reviews', item['reviews'])}</td>
                  <td>{this.renderLinks('food_orders', item['foodOrders'])}</td>
                  <td>{item['salt']}</td>
                  <td>{item['createdAt']}</td>
                  <td>{item['updatedAt']}</td>
                  <td>
                    <Link to={`show/${encodeURIComponent(item['@id'])}`}>
                      <span className="fa fa-search" aria-hidden="true" />
                      <span className="sr-only">Show</span>
                    </Link>
                  </td>
                  <td>
                    <Link to={`edit/${encodeURIComponent(item['@id'])}`}>
                      <span className="fa fa-pencil" aria-hidden="true" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {this.pagination()}
      </div>
    );
  }

  pagination() {
    const view = this.props.retrieved && this.props.retrieved['hydra:view'];
    if (!view) return;

    const {
      'hydra:first': first,
      'hydra:previous': previous,
      'hydra:next': next,
      'hydra:last': last
    } = view;

    return (
      <nav aria-label="Page navigation">
        <Link
          to="."
          className={`btn btn-primary${previous ? '' : ' disabled'}`}
        >
          <span aria-hidden="true">&lArr;</span> First
        </Link>
        <Link
          to={
            !previous || previous === first ? '.' : encodeURIComponent(previous)
          }
          className={`btn btn-primary${previous ? '' : ' disabled'}`}
        >
          <span aria-hidden="true">&larr;</span> Previous
        </Link>
        <Link
          to={next ? encodeURIComponent(next) : '#'}
          className={`btn btn-primary${next ? '' : ' disabled'}`}
        >
          Next <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link
          to={last ? encodeURIComponent(last) : '#'}
          className={`btn btn-primary${next ? '' : ' disabled'}`}
        >
          Last <span aria-hidden="true">&rArr;</span>
        </Link>
      </nav>
    );
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../${type}/show/${encodeURIComponent(items)}`}>{items}</Link>
    );
  };
}

const mapStateToProps = state => {
  const {
    retrieved,
    loading,
    error,
    eventSource,
    deletedItem
  } = state.user.list;
  return { retrieved, loading, error, eventSource, deletedItem };
};

const mapDispatchToProps = dispatch => ({
  list: page => dispatch(list(page)),
  reset: eventSource => dispatch(reset(eventSource))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
