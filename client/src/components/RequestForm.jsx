import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './Loading';

/**
 * @class RequestForm
 */
class RequestForm extends Component {
  state = {
    title: '',
    details: '',
    error: {},
  }

  /**
   *
   * @param {*} nextProps
   * @param {*} prevState
   * @returns {*} object
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.requests !== prevState.requests && nextProps.requests.error.message) {
      return { error: nextProps.requests.error.message.errors };
    }
    return null;
  }

  /**
   * @param {*} event
   * @returns {*} jsx
   */
  onChange = (event) => {
    event.preventDefault();
    const { requests } = this.props;
    requests.error = {};
    this.setState({ error: {} });
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @param {*} e
   * @returns {*} jsx
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { title, details } = this.state;
    const { handleSubmit } = this.props;
    return handleSubmit({ title, details });
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { title, details, error } = this.state;
    const { requests } = this.props;
    return (
      <div>
        <div>{requests.postLoading === true ? <Loading /> : ''}</div>
        <h3 className="center-heading">New complaint</h3>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="Request Title">Request Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange}
            required
          />
          <p className="red-text">{error && error.title ? error.title[0] : ''}</p>
          <p className="red-text">
            {requests.error && requests.error.code === 409 ? requests.error.message : '' }
          </p>
          <label htmlFor="Request details">Request Details</label>
          <textarea
            name="details"
            value={details}
            onChange={this.onChange}
            required
          />
          <p className="red-text">{error && error.details ? error.details[0] : ''}</p>
          <input
            type="submit"
            className="right-btn btn"
            value="Send Request"
            disabled={
              title === ''
              || details === ''
            }
          />
        </form>
      </div>
    );
  }
}

RequestForm.propTypes = {
  handleSubmit: PropTypes.func,
  requests: PropTypes.instanceOf(Object)
};
const mapStateToProps = state => ({
  requests: state.requestReducer
});
export default connect(mapStateToProps, null)(RequestForm);
