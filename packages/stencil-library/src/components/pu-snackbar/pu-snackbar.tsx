import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'pu-snack',
  styleUrl: 'pu-snackbar.scss',
  shadow: true,
})
export class PuSnackbar {

  @Prop() titleMain: string;

  @State() snackShow: boolean = false;

  snackTimeout() { setTimeout(() => this.snackShow = false, 4000) }

  toggleSnackbar() {
    if (!this.snackShow) {
      this.snackShow = true
      this.snackTimeout();
    }
  }
  render() {
    return (
      <Host>
        <pu-button type='text' onClick={() => this.toggleSnackbar()}>
          {this.titleMain}
        </pu-button>
        <div
          class={{
            'toast-box': true,
            'toast-box--show': this.snackShow,
            'toast-box--hide': !this.snackShow
          }}>
          <pu-text>
            <slot></slot>
          </pu-text>
          <pu-button type='text' onClick={() => this.snackShow = false}>
            Close
          </pu-button>
        </div>
      </Host>
    );
  }

}
