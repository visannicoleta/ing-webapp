import { LionInput } from '@lion/ui/input';
import { css } from 'lit';

class SimpleInput extends LionInput {
  static get styles() {
    return [
      super.styles,
      css`
        /* your custom styles here */
        :host {
          --my-input-background-color: lightblue;
          --my-input-border-radius: 5px;
        }
        .form-control {
          background-color: var(--my-input-background-color);
          border-radius: var(--my-input-border-radius);
        }
      `,
    ];
  }
}

customElements.define('simple-input', SimpleInput);