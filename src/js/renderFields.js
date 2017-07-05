class renderFields {
  constructor(count, element) {
    this.count = count;
    this.element = element;

    this.createField();
  }

  createField() {
    this.element.appendChild(this.createRows());
  }
  createCells() {
    const rowElement = this.createRowElement();

    for (let i = 0; i < this.count; i += 1) {
      rowElement.appendChild(this.createCellElement());
    }

    return rowElement;
  }
  createRows() {
    const fieldElement = this.createFieldElement();

    for (let i = 0; i < this.count; i += 1) {
      fieldElement.appendChild(this.createCells());
    }

    return fieldElement;
  }
  createCellElement() {
    const cell = document.createElement('span');
    cell.setAttribute('class', 'cell');

    return cell;
  }
  createRowElement() {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    return row;
  }
  createFieldElement() {
    const field = document.createElement('section');
    field.setAttribute('class', 'field');

    return field;
  }
};

export default renderFields;
