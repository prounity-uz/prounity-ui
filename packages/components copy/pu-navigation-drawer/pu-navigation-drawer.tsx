import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'pu-navigation-drawer',
  styleUrl: 'pu-navigation-drawer.scss',
  shadow: true,
})
export class PuNavigationDrawer {
  @State() toggleDrawer: boolean = false

  drawer() {
    console.log(this.toggleDrawer);

    this.toggleDrawer = !this.toggleDrawer
  }
  render() {
    return (
      <Host>
        <div onClick={() => this.drawer()} class={"navigation"} aria-visible={this.toggleDrawer ? "show" : "hide"}>
          <div class={"navigator-view"}></div>
          <div class={"navigation-drawer"}>
          </div>
        </div>
        <pu-button type='text' onClick={() => this.drawer()}>
          Show modal navigation drawer
        </pu-button>
        <slot></slot>
      </Host>
    );
  }

}
