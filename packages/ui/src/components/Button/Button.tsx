import { forwardRef } from "react";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components'
import { button } from "./Button.panda";
import { RecipeVariantProps } from "../../../styled-system/types";

export type ButtonProps = Omit<AriaButtonProps, 'className' | 'style'> & RecipeVariantProps<typeof button>; 

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant = 'primary', ...rest }, ref) => {
  return (
    <AriaButton type="button" {...rest} ref={ref} className={button({ variant })}>
      {children}
    </AriaButton>
  );
})
Button.displayName = "Button";
