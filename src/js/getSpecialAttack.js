export default function getSpecialAttack(object){
  const {special} = object;
  
  for(const prop in special) {
    if(!special[prop].hasOwnProperty.call('description')) {
      special[prop].description = 'Описание недоступно';
    }
  }
  
  return special;
}
