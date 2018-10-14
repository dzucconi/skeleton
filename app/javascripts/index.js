import parameters from 'queryparams';

window.parameters = parameters;

export default () => {
  const DOM = {
    app: document.getElementById('App'),
  };

  const { message } = parameters({ message: 'Hello' });

  DOM.app.innerHTML = message;
};
