import '../test/jsdomSetup';

import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('react-dom');

describe('App', () => {
  it('renders a welcome view', () => {
    const instance = renderer.create(<App />);
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
