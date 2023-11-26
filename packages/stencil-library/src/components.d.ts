/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color } from "./interface";
export { Color } from "./interface";
export namespace Components {
    interface PuBadge {
    }
    interface PuButton {
        "buttonType": string;
        "color"?: Color;
        "disabled": boolean;
        "expand"?: 'full' | 'block';
        "fill"?: 'filled' | 'filled-tonal' | 'outlined' | 'elevated' | 'text';
    }
    interface PuIcon {
        "fill"?: 'outlined' | 'filled';
    }
    interface PuInput {
        "disabled": boolean;
        "placeholder"?: string;
    }
    interface PuNavigationBar {
    }
}
declare global {
    interface HTMLPuBadgeElement extends Components.PuBadge, HTMLStencilElement {
    }
    var HTMLPuBadgeElement: {
        prototype: HTMLPuBadgeElement;
        new (): HTMLPuBadgeElement;
    };
    interface HTMLPuButtonElement extends Components.PuButton, HTMLStencilElement {
    }
    var HTMLPuButtonElement: {
        prototype: HTMLPuButtonElement;
        new (): HTMLPuButtonElement;
    };
    interface HTMLPuIconElement extends Components.PuIcon, HTMLStencilElement {
    }
    var HTMLPuIconElement: {
        prototype: HTMLPuIconElement;
        new (): HTMLPuIconElement;
    };
    interface HTMLPuInputElement extends Components.PuInput, HTMLStencilElement {
    }
    var HTMLPuInputElement: {
        prototype: HTMLPuInputElement;
        new (): HTMLPuInputElement;
    };
    interface HTMLPuNavigationBarElement extends Components.PuNavigationBar, HTMLStencilElement {
    }
    var HTMLPuNavigationBarElement: {
        prototype: HTMLPuNavigationBarElement;
        new (): HTMLPuNavigationBarElement;
    };
    interface HTMLElementTagNameMap {
        "pu-badge": HTMLPuBadgeElement;
        "pu-button": HTMLPuButtonElement;
        "pu-icon": HTMLPuIconElement;
        "pu-input": HTMLPuInputElement;
        "pu-navigation-bar": HTMLPuNavigationBarElement;
    }
}
declare namespace LocalJSX {
    interface PuBadge {
    }
    interface PuButton {
        "buttonType"?: string;
        "color"?: Color;
        "disabled"?: boolean;
        "expand"?: 'full' | 'block';
        "fill"?: 'filled' | 'filled-tonal' | 'outlined' | 'elevated' | 'text';
    }
    interface PuIcon {
        "fill"?: 'outlined' | 'filled';
    }
    interface PuInput {
        "disabled"?: boolean;
        "placeholder"?: string;
    }
    interface PuNavigationBar {
    }
    interface IntrinsicElements {
        "pu-badge": PuBadge;
        "pu-button": PuButton;
        "pu-icon": PuIcon;
        "pu-input": PuInput;
        "pu-navigation-bar": PuNavigationBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pu-badge": LocalJSX.PuBadge & JSXBase.HTMLAttributes<HTMLPuBadgeElement>;
            "pu-button": LocalJSX.PuButton & JSXBase.HTMLAttributes<HTMLPuButtonElement>;
            "pu-icon": LocalJSX.PuIcon & JSXBase.HTMLAttributes<HTMLPuIconElement>;
            "pu-input": LocalJSX.PuInput & JSXBase.HTMLAttributes<HTMLPuInputElement>;
            "pu-navigation-bar": LocalJSX.PuNavigationBar & JSXBase.HTMLAttributes<HTMLPuNavigationBarElement>;
        }
    }
}
