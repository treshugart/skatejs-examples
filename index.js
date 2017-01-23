import 'skatejs-web-components';
import { Component, h, prop } from 'skatejs';

const { ShadyCSS, ShadyDOM } = window;

// <Style /> helper
const cache = {};
const Style = (props, chren) => {
  if (ShadyDOM && ShadyDOM.inUse) {
    if (!cache[props.css]) {
      const tmp = cache[props.css] = document.createElement('template');
      tmp.innerHTML = `<style>${props.css}</style>`;
      ShadyCSS.prepareTemplate(tmp, props.for.localName);
    }
    ShadyCSS.applyStyle(props.for);
  }
  return <style>{props.css}</style>;
};


class App extends Component {
  static props = {
    count: prop.number()
  }
  renderCallback ({ count }) {
    return [
      <Style for={this} css={`
        x-btn.on {
          --font-weight: bold;
        }
      `} />,
      <Btn
        class={count % 2 ? 'on' : ''}
        onClick={() => (++this.count)}
       ><span>Click me!</span></Btn>
    ];
  }
}

class Btn extends Component {
  renderCallback () {
    return [
      <Style for={this} css={`
        button {
          font-style: var(--font-style);
          font-weight: var(--font-weight);
        }

        button ::slotted(*) {
          font-style: italic;
        }
      `} />,
      <button>
        <slot />
      </button>
    ];
  }
}

customElements.define('x-app', App);
customElements.define('x-btn', Btn);
