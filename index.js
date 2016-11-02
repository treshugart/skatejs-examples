import 'skatejs-web-components';
import { define, h, prop } from 'skatejs';


// <Style /> helper
const cache = {};
const Style = (props, chren) => {
  if (!cache[props.css]) {
    const tmp = cache[props.css] = document.createElement('template');
    tmp.innerHTML = `<style>${props.css}</style>`;
    ShadyCSS.prepareTemplate(tmp, props.for.tagName.toLowerCase());
  }
  ShadyCSS.applyStyle(props.for);
  return <style>{props.css}</style>;
};


const App = define('x-app', {
  props: {
    count: prop.number()
  },
  render(elem) {
    return [
      <Style for={elem} css={`
        x-btn.on {
          --font-weight: bold;
        }
      `} />,
      <Btn class={elem.count % 2 ? 'on' : ''} onClick={() => (++elem.count)}>Click me!</Btn>
    ];
  }
});

const Btn = define('x-btn', {
  render(elem) {
    return [
      <Style for={elem} css={`
        button {
          font-style: var(--font-style);
          font-weight: var(--font-weight);
        }
      `} />,
      <button>
        <slot />
      </button>
    ];
  }
});
