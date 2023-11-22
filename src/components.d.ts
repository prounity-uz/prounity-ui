/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PuButton {
        "disabled": boolean;
        "type": 'filled' | 'filled-tonal' | 'outlined' | 'elevated' | 'text';
    }
    interface PuCard {
        "disabled": boolean;
        "type": 'filled' | 'outlined' | 'elevated';
    }
    interface PuCheckbox {
        "disabled": boolean;
        "hasError": boolean;
    }
    interface PuChip {
        "disabled": boolean;
        "type": 'assist' | 'filter' | 'input' | 'suggestion';
    }
    interface PuDivider {
    }
    interface PuFab {
        "addItems": object;
        "color": 'surface' | 'primary' | 'secondary' | 'tertiary' | 'color' | 'text';
        "disabled": boolean;
        "icon": string;
        "type": 'small' | 'large' | 'elevated' | 'add' | 'text';
    }
    interface PuIcon {
        "type": 'filled' | 'outlined';
    }
    interface PuIconButtons {
        "disabled": boolean;
        "tooltip": string;
        "type": 'standart' | 'contained';
    }
    interface PuLists {
    }
    interface PuRadioButton {
        "checked": boolean;
        "disabled": boolean;
    }
    interface PuRippleEffect {
    }
    interface PuText {
        "type": 'display-text' | 'display-text-large' | 'display-text-small' |
    'headline-text' | 'headline-text-large' | 'headline-text-small' |
    'title-text' | 'title-text-large' | 'title-text-small' |
    'body-text' | 'body-text-large' | 'body-text-small' |
    'label-text' | 'label-text-large' | 'label-text-small';
    }
}
declare global {
    interface HTMLPuButtonElement extends Components.PuButton, HTMLStencilElement {
    }
    var HTMLPuButtonElement: {
        prototype: HTMLPuButtonElement;
        new (): HTMLPuButtonElement;
    };
    interface HTMLPuCardElement extends Components.PuCard, HTMLStencilElement {
    }
    var HTMLPuCardElement: {
        prototype: HTMLPuCardElement;
        new (): HTMLPuCardElement;
    };
    interface HTMLPuCheckboxElement extends Components.PuCheckbox, HTMLStencilElement {
    }
    var HTMLPuCheckboxElement: {
        prototype: HTMLPuCheckboxElement;
        new (): HTMLPuCheckboxElement;
    };
    interface HTMLPuChipElement extends Components.PuChip, HTMLStencilElement {
    }
    var HTMLPuChipElement: {
        prototype: HTMLPuChipElement;
        new (): HTMLPuChipElement;
    };
    interface HTMLPuDividerElement extends Components.PuDivider, HTMLStencilElement {
    }
    var HTMLPuDividerElement: {
        prototype: HTMLPuDividerElement;
        new (): HTMLPuDividerElement;
    };
    interface HTMLPuFabElement extends Components.PuFab, HTMLStencilElement {
    }
    var HTMLPuFabElement: {
        prototype: HTMLPuFabElement;
        new (): HTMLPuFabElement;
    };
    interface HTMLPuIconElement extends Components.PuIcon, HTMLStencilElement {
    }
    var HTMLPuIconElement: {
        prototype: HTMLPuIconElement;
        new (): HTMLPuIconElement;
    };
    interface HTMLPuIconButtonsElement extends Components.PuIconButtons, HTMLStencilElement {
    }
    var HTMLPuIconButtonsElement: {
        prototype: HTMLPuIconButtonsElement;
        new (): HTMLPuIconButtonsElement;
    };
    interface HTMLPuListsElement extends Components.PuLists, HTMLStencilElement {
    }
    var HTMLPuListsElement: {
        prototype: HTMLPuListsElement;
        new (): HTMLPuListsElement;
    };
    interface HTMLPuRadioButtonElement extends Components.PuRadioButton, HTMLStencilElement {
    }
    var HTMLPuRadioButtonElement: {
        prototype: HTMLPuRadioButtonElement;
        new (): HTMLPuRadioButtonElement;
    };
    interface HTMLPuRippleEffectElement extends Components.PuRippleEffect, HTMLStencilElement {
    }
    var HTMLPuRippleEffectElement: {
        prototype: HTMLPuRippleEffectElement;
        new (): HTMLPuRippleEffectElement;
    };
    interface HTMLPuTextElement extends Components.PuText, HTMLStencilElement {
    }
    var HTMLPuTextElement: {
        prototype: HTMLPuTextElement;
        new (): HTMLPuTextElement;
    };
    interface HTMLElementTagNameMap {
        "pu-button": HTMLPuButtonElement;
        "pu-card": HTMLPuCardElement;
        "pu-checkbox": HTMLPuCheckboxElement;
        "pu-chip": HTMLPuChipElement;
        "pu-divider": HTMLPuDividerElement;
        "pu-fab": HTMLPuFabElement;
        "pu-icon": HTMLPuIconElement;
        "pu-icon-buttons": HTMLPuIconButtonsElement;
        "pu-lists": HTMLPuListsElement;
        "pu-radio-button": HTMLPuRadioButtonElement;
        "pu-ripple-effect": HTMLPuRippleEffectElement;
        "pu-text": HTMLPuTextElement;
    }
}
declare namespace LocalJSX {
    interface PuButton {
        "disabled"?: boolean;
        "type"?: 'filled' | 'filled-tonal' | 'outlined' | 'elevated' | 'text';
    }
    interface PuCard {
        "disabled"?: boolean;
        "type"?: 'filled' | 'outlined' | 'elevated';
    }
    interface PuCheckbox {
        "disabled"?: boolean;
        "hasError"?: boolean;
    }
    interface PuChip {
        "disabled"?: boolean;
        "type"?: 'assist' | 'filter' | 'input' | 'suggestion';
    }
    interface PuDivider {
    }
    interface PuFab {
        "addItems"?: object;
        "color"?: 'surface' | 'primary' | 'secondary' | 'tertiary' | 'color' | 'text';
        "disabled"?: boolean;
        "icon"?: string;
        "type"?: 'small' | 'large' | 'elevated' | 'add' | 'text';
    }
    interface PuIcon {
        "type"?: 'filled' | 'outlined';
    }
    interface PuIconButtons {
        "disabled"?: boolean;
        "tooltip"?: string;
        "type"?: 'standart' | 'contained';
    }
    interface PuLists {
    }
    interface PuRadioButton {
        "checked"?: boolean;
        "disabled"?: boolean;
    }
    interface PuRippleEffect {
    }
    interface PuText {
        "type"?: 'display-text' | 'display-text-large' | 'display-text-small' |
    'headline-text' | 'headline-text-large' | 'headline-text-small' |
    'title-text' | 'title-text-large' | 'title-text-small' |
    'body-text' | 'body-text-large' | 'body-text-small' |
    'label-text' | 'label-text-large' | 'label-text-small';
    }
    interface IntrinsicElements {
        "pu-button": PuButton;
        "pu-card": PuCard;
        "pu-checkbox": PuCheckbox;
        "pu-chip": PuChip;
        "pu-divider": PuDivider;
        "pu-fab": PuFab;
        "pu-icon": PuIcon;
        "pu-icon-buttons": PuIconButtons;
        "pu-lists": PuLists;
        "pu-radio-button": PuRadioButton;
        "pu-ripple-effect": PuRippleEffect;
        "pu-text": PuText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pu-button": LocalJSX.PuButton & JSXBase.HTMLAttributes<HTMLPuButtonElement>;
            "pu-card": LocalJSX.PuCard & JSXBase.HTMLAttributes<HTMLPuCardElement>;
            "pu-checkbox": LocalJSX.PuCheckbox & JSXBase.HTMLAttributes<HTMLPuCheckboxElement>;
            "pu-chip": LocalJSX.PuChip & JSXBase.HTMLAttributes<HTMLPuChipElement>;
            "pu-divider": LocalJSX.PuDivider & JSXBase.HTMLAttributes<HTMLPuDividerElement>;
            "pu-fab": LocalJSX.PuFab & JSXBase.HTMLAttributes<HTMLPuFabElement>;
            "pu-icon": LocalJSX.PuIcon & JSXBase.HTMLAttributes<HTMLPuIconElement>;
            "pu-icon-buttons": LocalJSX.PuIconButtons & JSXBase.HTMLAttributes<HTMLPuIconButtonsElement>;
            "pu-lists": LocalJSX.PuLists & JSXBase.HTMLAttributes<HTMLPuListsElement>;
            "pu-radio-button": LocalJSX.PuRadioButton & JSXBase.HTMLAttributes<HTMLPuRadioButtonElement>;
            "pu-ripple-effect": LocalJSX.PuRippleEffect & JSXBase.HTMLAttributes<HTMLPuRippleEffectElement>;
            "pu-text": LocalJSX.PuText & JSXBase.HTMLAttributes<HTMLPuTextElement>;
        }
    }
}
