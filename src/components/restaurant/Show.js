import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { retrieve, reset } from '../../actions/restaurant/show';
import { del } from '../../actions/restaurant/delete';

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
                <th scope="row">title</th>
                <td>{item['title']}</td>
              </tr>
              <tr>
                <th scope="row">minimumOrderValue</th>
                <td>{item['minimumOrderValue']}</td>
              </tr>
              <tr>
                <th scope="row">deliveryTime</th>
                <td>{item['deliveryTime']}</td>
              </tr>
              <tr>
                <th scope="row">logo</th>
                <td>{item['logo']}</td>
              </tr>
              <tr>
                <th scope="row">logoImage</th>
                <td>{item['logoImage']}</td>
              </tr>
              <tr>
                <th scope="row">status</th>
                <td>{item['status']}</td>
              </tr>
              <tr>
                <th scope="row">backgroundImage</th>
                <td>{item['backgroundImage']}</td>
              </tr>
              <tr>
                <th scope="row">backgroundImageFile</th>
                <td>{item['backgroundImageFile']}</td>
              </tr>
              <tr>
                <th scope="row">profileLogoFile</th>
                <td>{item['profileLogoFile']}</td>
              </tr>
              <tr>
                <th scope="row">profileLogo</th>
                <td>{item['profileLogo']}</td>
              </tr>
              <tr>
                <th scope="row">haveDelivery</th>
                <td>{item['haveDelivery']}</td>
              </tr>
              <tr>
                <th scope="row">haveTakeAway</th>
                <td>{item['haveTakeAway']}</td>
              </tr>
              <tr>
                <th scope="row">haveFreeFood</th>
                <td>{item['haveFreeFood']}</td>
              </tr>
              <tr>
                <th scope="row">slug</th>
                <td>{item['slug']}</td>
              </tr>
              <tr>
                <th scope="row">email</th>
                <td>{item['email']}</td>
              </tr>
              <tr>
                <th scope="row">phone</th>
                <td>{item['phone']}</td>
              </tr>
              <tr>
                <th scope="row">website</th>
                <td>{item['website']}</td>
              </tr>
              <tr>
                <th scope="row">about</th>
                <td>{item['about']}</td>
              </tr>
              <tr>
                <th scope="row">tags</th>
                <td>{this.renderLinks('tags', item['tags'])}</td>
              </tr>
              <tr>
                <th scope="row">cuisines</th>
                <td>{this.renderLinks('cuisines', item['cuisines'])}</td>
              </tr>
              <tr>
                <th scope="row">foodCategories</th>
                <td>{this.renderLinks('food_categories', item['foodCategories'])}</td>
              </tr>
              <tr>
                <th scope="row">isFeatured</th>
                <td>{item['isFeatured']}</td>
              </tr>
              <tr>
                <th scope="row">languages</th>
                <td>{this.renderLinks('languages', item['languages'])}</td>
              </tr>
              <tr>
                <th scope="row">restaurantWorkSchedules</th>
                <td>{item['restaurantWorkSchedules']}</td>
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
          <Link to={`/restaurants/edit/${encodeURIComponent(item['@id'])}`}>
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
  retrieved: state.restaurant.show.retrieved,
  error: state.restaurant.show.error,
  loading: state.restaurant.show.loading,
  eventSource: state.restaurant.show.eventSource,
  deleteError: state.restaurant.del.error,
  deleteLoading: state.restaurant.del.loading,
  deleted: state.restaurant.del.deleted
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
