/* eslint-disable no-restricted-syntax */
const input = document.querySelector('.input');
const askBtn = document.querySelector('.askBtn');
const dialog = document.querySelector('.dialog');
const clear = document.querySelector('.clear');


const array = [
  'Например, за просмотром любимого фильма! Вот тебе ссылка на топ 250 лучших фильмов на <a href="https://www.kinopoisk.ru/lists/movies/top250/" target="_blank">кинопоискe</a>',
  'Вот отличный вариант для домашних занятий <a href="https://www.youtube.com/watch?v=hj1_a7umGNI" target="_blank">йогой</a>',
  'Это замечательная идея! Рекомендую заглянуть <a href="https://afisha.yandex.ru/moscow" target="_blank">сюда</a>',
  'Правильно! Не откладывай на завтра то, что можно съесть сегодня! Вот тебе для <a href="https://jaymi-oliver.ru/recepty" target="_blank">вдохновения</a>',
  'Кажется, я знаю, что отлично <a href="https://music.yandex.ru/home" target="_blank">подойдет</a>! Включай на всю!',
  'Я не волшебник, а только учусь 🙃... давай попробуем еще раз?',
  'Самое время позвонить друзьям 🙃',
  'Прекрасного настроения и до новых встреч!',
  'Замечательно! Уверена, что и у тебя так же',
];

function getBotAnswer(valueFromInput, botAnswers) {
  let newQuestion = '';
  for (let i = 0; i < valueFromInput.length; i += 1) {
    if (valueFromInput[i] !== '?') {
      newQuestion += valueFromInput[i];
    }
  }
  const newArr = newQuestion.split(' ');

  for (let el of newArr) {
    switch (el) {
      case 'вечером':
        return botAnswers[0];
      case 'вечер':
        return botAnswers[0];
      case 'посмотреть':
        return botAnswers[0];
      case 'перерыв':
        return botAnswers[1];
      case 'рабочее':
        return botAnswers[1];
      case 'размяться':
        return botAnswers[1];
      case 'заняться':
        return botAnswers[1];
      case 'активным':
        return botAnswers[1];
      case 'активное':
        return botAnswers[1];
      case 'выйти':
        return botAnswers[2];
      case 'прогуляться':
        return botAnswers[2];
      case 'улицу':
        return botAnswers[2];
      case 'приготовить':
        return botAnswers[3];
      case 'еда':
        return botAnswers[3];
      case 'еду':
        return botAnswers[3];
      case 'съесть':
        return botAnswers[3];
      case 'вкусненькое':
        return botAnswers[3];
      case 'музыка':
        return botAnswers[4];
      case 'музыку':
        return botAnswers[4];
      case 'послушать':
        return botAnswers[4];
      case 'встретиться':
        return botAnswers[6];
      case 'друзья':
        return botAnswers[6];
      case 'друзьями':
        return botAnswers[6];
      case 'друг':
        return botAnswers[6];
      case 'другом':
        return botAnswers[6];
      case 'увидеться':
        return botAnswers[6];
      case 'пока':
        return botAnswers[7];
      case 'свидания':
        return botAnswers[7];
      case 'дела':
        return botAnswers[8];
    }
   
    }
    if ('undefined'){
      return botAnswers[5];
  }
}

function addClientText(inputValue) {
  if (!inputValue) return;
  const clientSide = document.createElement('div');
  const clientText = document.createElement('div');
  clientSide.className = 'clientSide';
  clientText.className = 'clientText';
  clientText.innerText = inputValue;
  clientSide.appendChild(clientText);
  dialog.appendChild(clientSide);

  const timerId = setTimeout(() => {
    const botSide = document.createElement('div');
    const botText = document.createElement('div');
    botSide.className = 'botSide';
    botText.className = 'botText';
    botText.innerHTML = getBotAnswer(inputValue, array);
    botSide.appendChild(botText);
    dialog.appendChild(botSide);
    botSide.scrollIntoView();
 
    clearTimeout(timerId);

  }, 2000);

}

function addText() {
  if (!input.value) return;
  console.log(input.value);
}
askBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addText();
  addClientText(input.value);
  input.value = '';
});

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addText();
    addClientText(input.value);
    input.value = '';
  }
});

function pasteAnswer() {
  const botSide = document.createElement('div');
  const botText = document.createElement('div');
  botSide.className = 'botSide';
  botText.className = 'botText';
  botText.innerHTML = getBotAnswer(input.value, array);
  botSide.appendChild(botText);
  dialog.appendChild(botSide);
  botSide.scrollIntoView();
}



clear.addEventListener('click', () => {
  while (dialog.children.length > 1) {
    dialog.removeChild(dialog.lastChild);
  }
});
