import sayHello from '../src/hello.js';
import {expect} from 'chai';

describe('Hello Describe', () => {
  it('Hello It', () => {
    expect(sayHello()).to.equal('Hello, World!');
  });
});
