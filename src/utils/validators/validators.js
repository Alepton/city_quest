// requiredField - обязательное поле
export const requiredField = value => {
  if (value) return undefined; //если есть value (текст вписан)
  return 'Field is required'; //ошибка "поле обязательное"

}

// maxLength - максимальная длина (проверка максималльной длины текста)
/*export const maxLength30 = value => {
  if (value.lenght > 30) return "Max length is 30 symbols"; //если value текст больше 30 символов, то будет ошибка)
  return undefined;
}
*/

//что бы каждый раз не вписывать значение максимальной длинны (30 или 50 или 10)
//и не дублировать код, запишем эту функцию с замыканием:
export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength)
  return `Max length is ${maxLength} symbols`;
  return undefined;
}
