import hasClass from './hasClass'
import removeClass from './removeClass'
import addClass from './addClass'

export default function toggleClass(element, className){
  if (element.classList)
    element.classList.toggle(className);
  else if (hasClass(element, className))
    removeClass(element, className)
  else
    addClass(element, className)
}
