import RenderFields from './renderFields'


class Form {
  constructor(selector) {
    this.form = this.getForm();
    this.input = this.getInput();
    this.element = document.querySelector(selector);

    this.appendElements();
  }
  appendElements() {
    this.form.appendChild(this.input);
    document.body.appendChild(this.form);
  }
  getForm() {
    const form = document.createElement('form');

    form.addEventListener('submit', (e) => { 
      e.preventDefault(); this.submit()
    }, false);

    return form;
  }
  getInput() {
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 3;
    input.max = 10;

    return input;
  }
  submit() {
    new RenderFields(this.input.value, this.element);
    this.clear();
  }
  clear() {
    this.form.remove();
  }
};

export default Form;