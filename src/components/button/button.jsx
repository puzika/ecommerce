import './button.scss';

export default function Button({styleType, text}) {
   return (
      <button className={`button button--${styleType || 'default'}`} type="submit">{text}</button>
   )
}