import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'post-code-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  @Prop() required: boolean;

  inputChanged(event) {
    let x = event.target.value;
    let txtRed = document.getElementById('txtRed');
    if (isNaN(x)) {
      txtRed.classList.remove('hide-txt');
    }else{
      txtRed.classList.add('hide-txt');
    }
  }

  render() {
    return <div>
      <input type="text" placeholder="กรอกรหัสไปรษณีย์" maxlength="5" onInput={(event) => this.inputChanged(event)}></input>
      <p id="txtRed" class="txt-red hide-txt">* กรุณากรอกรหัสไปรษณีย์</p>
    </div>;
  }

  componentWillLoad() {
  }

  componentDidLoad() {

  }
}
