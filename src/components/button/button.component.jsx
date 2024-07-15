import { ButtonStyles } from "./button.styles";

export const ButtonStyleTypes = {
   default: 'default',
   google: 'google',
   inverse: 'inverse',
}

export default function Button({styleType, text, ...otherProps}) {
   return (
      <ButtonStyles $styleType={styleType || 'default'} {...otherProps}>{text}</ButtonStyles>
   )
}