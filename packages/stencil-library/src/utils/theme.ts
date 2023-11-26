import { Color, CssClassMap } from "../interface";

export const createColorClasses = (color: Color | undefined | null, cssClassMap: CssClassMap): CssClassMap => {
  return typeof color === 'string' && color.length > 0
    ? {
        'pu-color': true,
        [`pu-color-${color}`]: true,
        ...cssClassMap,
      }
    : cssClassMap;
};