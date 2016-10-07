import hello from './lib/hello';

const DOM = {
  app: document.getElementById('app'),
};

export default () => {
  DOM.app.innerHTML = hello();
};
