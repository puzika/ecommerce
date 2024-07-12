import './x-icon.scss';

export default function XIcon({onClick}) {
   return (
      <div onClick={onClick} className="x-icon">
         <div className="x-icon__container"></div>
      </div>
   )
}