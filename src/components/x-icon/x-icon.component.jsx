import './x-icon.styles';
import { XIconContainer, X} from './x-icon.styles';

export default function XIcon({onClick}) {
   return (
      <XIconContainer onClick={onClick}>
         <X></X>
      </XIconContainer>
   )
}