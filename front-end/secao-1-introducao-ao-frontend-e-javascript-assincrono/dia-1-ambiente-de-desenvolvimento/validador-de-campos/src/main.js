import validator from 'validator';
import './style.css';

const validadeBtn = document.querySelector('button');
const dropDown = document.querySelector('#dropdown');
const inputText = document.querySelector('input');
const answerText = document.querySelector('#answer');

const UUID_VERSION = 4;

validadeBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(inputText.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputText.value),
    email: validator.isEmail(inputText.value),
    uuid: validator.isUUID(inputText.value, UUID_VERSION),
    url: validator.isEmail(inputText.value),
  };

  answerText.innerHTML = `A validação retornou ${campos[dropDown.value]}`;
});
