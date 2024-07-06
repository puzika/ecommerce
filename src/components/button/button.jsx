import './button.scss';

export default function Button({styleType, text, ...otherProps}) {
   return (
      <button className={`button button--${styleType || 'default'}`} {...otherProps}>{text}</button>
   )
}