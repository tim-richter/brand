import { cva } from "../../../styled-system/css";

export const button = cva({
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    outlineOffset: 2,
    lineHeight: 1.2,
    borderRadius: 10,
    fontWeight: 600,
    minWidth: 60,
    paddingInlineStart: 12,
    paddingInlineEnd: 12,
    paddingTop: 10,
    paddingBottom: 10,
    transitionProperty: 'color, background-color, border-color',
    transitionDuration: '200ms',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'primary',
        color: 'white'
      }
    }
  }
})
