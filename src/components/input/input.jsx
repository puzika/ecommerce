import './input.scss';

export default function Input({label, inputOptions}) {
   return (
      <label className={`input`}>
         <input className={`input__field`} {...inputOptions}/>
         <span className={`input__label ${inputOptions.value ? 'input__label--shrinked' : ''}`}>{label}</span>
      </label>
   )
}