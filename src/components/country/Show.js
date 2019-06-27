import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { retrieve, reset } from '../../actions/country/show';
import { del } from '../../actions/country/delete';

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
                <th scope="row">capital</th>
                <td>{item['capital']}</td>
              </tr>
              <tr>
                <th scope="row">citizenship</th>
                <td>{item['citizenship']}</td>
              </tr>
              <tr>
                <th scope="row">countryCode</th>
                <td>{item['countryCode']}</td>
              </tr>
              <tr>
                <th scope="row">currency</th>
                <td>{item['currency']}</td>
              </tr>
              <tr>
                <th scope="row">currencyCode</th>
                <td>{item['currencyCode']}</td>
              </tr>
              <tr>
                <th scope="row">currencySubUnit</th>
                <td>{item['currencySubUnit']}</td>
              </tr>
              <tr>
                <th scope="row">fullName</th>
                <td>{item['fullName']}</td>
              </tr>
              <tr>
                <th scope="row">iso3</th>
                <td>{item['iso3']}</td>
              </tr>
              <tr>
                <th scope="row">iso2</th>
                <td>{item['iso2']}</td>
              </tr>
              <tr>
                <th scope="row">name</th>
                <td>{item['name']}</td>
              </tr>
              <tr>
                <th scope="row">regionCode</th>
                <td>{item['regionCode']}</td>
              </tr>
              <tr>
                <th scope="row">subRegionCode</th>
                <td>{item['subRegionCode']}</td>
              </tr>
              <tr>
                <th scope="row">eea</th>
                <td>{item['eea']}</td>
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
          <Link to={`/countries/edit/${encodeURIComponent(item['@id'])}`}>
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
  retrieved: state.country.show.retrieved,
  error: state.country.show.error,
  loading: state.country.show.loading,
  eventSource: state.country.show.eventSource,
  deleteError: state.country.del.error,
  deleteLoading: state.country.del.loading,
  deleted: state.country.del.deleted
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
