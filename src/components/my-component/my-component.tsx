import { Component, Prop, Element } from '@stencil/core';
// import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'post-code-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  @Element() private element: HTMLElement;
  @Prop() required: boolean;

  inputChanged(event) {
    let x = event.target.value;
    // issue of find element when shadow: true ;https://github.com/ionic-team/stencil/issues/895
    // this.element.shadowRoot.getElementById('txtRed');
    let txtRed = this.element.ownerDocument.getElementById('txtRed');
    if (isNaN(x)) {
      txtRed.classList.remove('hide-txt');
    } else {
      txtRed.classList.add('hide-txt');
    }
  }

  render() {
    return <div>
      <input type="text" placeholder="กรอกรหัสไปรษณีย์" maxlength="5" onInput={(event) => this.inputChanged(event)}></input>
      <p id="txtRed" class="txt-red hide-txt">* ต้องเป็นตัวเลขเท่านั้น</p>
    </div>;
  }

  componentWillLoad() {
  }

  componentDidLoad() {

  }
}
