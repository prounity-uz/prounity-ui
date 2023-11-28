import { Component, Host, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'pu-dialog',
  styleUrls: {
    md: 'pu-dialogs.md.scss'
  },
  shadow: true,
})
export class PuDialogs {
  @State() dialogStatus: boolean = true;
  // @Listen('click', { capture: true })
  dialogToggle() {
    this.dialogStatus = !this.dialogStatus
  }
  render() {
    return (
      <Host>
        <pu-button>
          Open dialog
        </pu-button>
        <div onClick={this.dialogToggle} class={{ "close-dialog": true, "dialog-hide": this.dialogStatus }}></div>
        <div class={{ "dialog": true, "dialog-hide": this.dialogStatus }}>
          <div class="text-content">
            <span class="text-content_title">Basic dialog title</span>
            <span class="text-content_description">
              A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
            </span>
          </div>
          <div class="actions">
            <div class="actions_buttons">
              <pu-button fill='dialog'>Action 2</pu-button>
              <pu-button fill='dialog'>Action 1</pu-button>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
