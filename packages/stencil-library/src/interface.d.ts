type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
export type PredefinedColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error';
export type Color = LiteralUnion<PredefinedColors, string>;
export type CssClassMap = { [className: string]: boolean };
