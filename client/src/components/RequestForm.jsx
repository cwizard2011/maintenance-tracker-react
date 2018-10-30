import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loading from './Loading';
import RequestAction from '../actions/RequestAction';

/**
 * @class RequestForm
 */
export class RequestForm extends Component {
  state = {
    title: '',
    details: '',
    error: {},
  }

  componentDidMount = () => {
    const { fetchSingleRequest, match } = this.props;
    if (match && match.params.requestId) {
      fetchSingleRequest(match.params.requestId).then((res) => {
        this.setState({
          title: res.data.data.title,
          details: res.data.data.details
        });
      });
    }
  }

  /**
   *
   * @param {*} nextProps
   * @param {*} prevState
   * @returns {*} object
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.request !== prevState.request && nextProps.request.error.message) {
      return { error: nextProps.request.error.message.errors };
    }
    return null;
  }

  /**
   * @param {*} event
   * @returns {*} jsx
   */
  onChange = (event) => {
    event.preventDefault();
    const { request } = this.props;
    request.error = {};
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
    const { request } = this.props;
    return (
      <div>
        <div>{request.postLoading === true ? <Loading /> : ''}</div>
        <div className="form-field request-form ">
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
              {request.error && request.error.code === 409 ? request.error.message : '' }
            </p>
            <label htmlFor="Request details">Request Details</label>
            <textarea
              name="details"
              value={details}
              onChange={this.onChange}
              required
            />
            <input
              type="submit"
              className="right-btn btn"
              value="Send Request"
              disabled={
              title === ''
              || details === ''
            }
            />
            <p className="red-text">{error && error.details ? error.details[0] : ''}</p>
          </form>
        </div>

      </div>
    );
  }
}

RequestForm.propTypes = {
  handleSubmit: PropTypes.func,
  fetchSingleRequest: PropTypes.func,
  match: PropTypes.instanceOf(Object),
  request: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  request: state.requestReducer
});
const matchDispatchToProps = dispatch => bindActionCreators({
  fetchSingleRequest: RequestAction.fetchSingleRequest,
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(RequestForm);
