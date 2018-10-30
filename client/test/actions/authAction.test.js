import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';
import Authentication from '../../src/actions/AuthActions';
import config from '../../src/utils/config';
import mockCookieStorage from '../__mocks__/mockCookie';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.Cookies = mockCookieStorage;
const response = {
  data: {
    data: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3'
    }
  }
};
const loginData = {
  username: 'cwizard',
  password: 'password'
};
const signupData = {
  ...loginData,
  email: 'Cwizard@gmail.com',
  firstname: 'Peter',
  lastname: 'Adeola'
};
const error = {
  response: {
    data: {
      message: 'login failed'
    }
  }
};

describe('Auth Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates SET_CURRENT_USER when login action is succesful', (done) => {
    moxios.stubRequest(`${config.apiUrl}/auth/login`, {
      status: 200,
      response: response.data
    });

    const expectedActions = [
      {
        type: 'LOGIN_BEGINS'
      },
      {
        type: 'SET_CURRENT_USER',
        user: jwt.decode(response.data.data.token)
      }
    ];
    const store = mockStore({});
    store.dispatch(Authentication.login(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates SET_CURRENT_USER_FAIL when login fail', (done) => {
    moxios.stubRequest(`${config.apiUrl}/auth/login`, {
      status: 401,
      response: error
    });

    const expectedActions = [
      {
        type: 'LOGIN_BEGINS'
      },
      {
        type: 'SET_CURRENT_USER_FAIL',
        error
      }
    ];
    const store = mockStore({});
    store.dispatch(Authentication.login(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates SET_CURRENT_USER when signup action is succesful', (done) => {
    moxios.stubRequest(`${config.apiUrl}/auth/signup`, {
      status: 200,
      response: response.data
    });

    const expectedActions = [
      {
        type: 'REGISTRATION_BEGINS'
      },
      {
        type: 'SET_CURRENT_USER',
        user: jwt.decode(response.data.data.token)
      }
    ];
    const store = mockStore({});
    store.dispatch(Authentication.register(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates SET_CURRENT_USER_FAIL when signup action fail', (done) => {
    moxios.stubRequest(`${config.apiUrl}/auth/signup`, {
      status: 400,
      response: error
    });

    const expectedActions = [
      {
        type: 'REGISTRATION_BEGINS'
      },
      {
        type: 'SET_CURRENT_USER_FAIL',
        error
      }
    ];
    const store = mockStore({});
    store.dispatch(Authentication.register(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates LOGOUT_USER action', () => {
    const expectedActions = [{
      type: 'LOGOUT_USER',
    }];
    const store = mockStore({});
    store.dispatch(Authentication.logout());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
