import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-badge',
  styleUrls: {
    md: 'badge.md.scss'
  },
  shadow: true,
})
export class PuBadge {

  @Element() el!: HTMLElement;

  componentDidRender() {
    const textContent = this.el.textContent;

    console.log('textContent', textContent);
    
    if(textContent) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = "20pt";
      const textWidth = ctx.measureText(textContent).width;
      this.el.style.width = textWidth + 8 + 'px';
      this.el.classList.add('large');
    } else {
      this.el.classList.add('small');
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
