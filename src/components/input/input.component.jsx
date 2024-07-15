import { InputStyles, InputFieldStyles, InputLabelStyles } from "./input.styles";

export default function Input({label, inputOptions}) {
   return (
      <InputStyles>
         <InputFieldStyles {...inputOptions}/>
         <InputLabelStyles filled={inputOptions.value}>{label}</InputLabelStyles>
      </InputStyles>
   )
}