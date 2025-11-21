import { toggleHeaderDiplay } from "../animation/toggleHeaderdisplay";


export function hideAll(isVisible){ 
  toggleHeaderDiplay(isVisible)
  Array.from(document.querySelectorAll('section')).forEach(ele=>ele.remove());
 

}