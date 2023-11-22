import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'pu-snack',
  styleUrl: 'pu-snackbar.scss',
  shadow: true,
})
export class PuSnackbar {

  @Prop() title: string; 

  @State() snackShow: boolean = false;

  toggleSnackbar() {
    this.snackShow = !this.snackShow;
    setTimeout(() => this.snackShow = !this.snackShow,
    4000)
  }
  render() {
    return (
      <Host>
        <pu-button type='text' onClick={() => this.toggleSnackbar()}>
          {this.title}
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
          <pu-button type='text' onClick={() => this.toggleSnackbar()}>
            Close
          </pu-button>
        </div>
      </Host>
    );
  }

}
