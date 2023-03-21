import './style.css'

const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const surpriseBtn = document.querySelector('#surprise-btn');
const image = document.querySelector('#image');
const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://aws.random.cat/meow';

const handleDogBtn = () => {
    fetch(DOG_API)
    .then(res => res.json())
    .then(data => {
        const { message } = data;
        image.src = message;
    });
};

const handleCatBtn = () => {
    fetch(CAT_API)
    .then(res => res.json())
    .then(data => {
        const { file } = data;
        image.src = file;
    });
};

const resolveTimeout = (value, delay) => {
    return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

const handleSurpriseBtn = () => {
    const timeout1 = (Math.random() * 1000) + 800;
    const timeout2 = (Math.random() * 1000) + 800;

    Promise.any([
        resolveTimeout(fetch(CAT_API), timeout1),
        resolveTimeout(fetch(DOG_API), timeout2)
    ])
    .then(res => res.json())
    .then(data => {
        const dataArray = Object.values(data)
        const [ value ] = dataArray;
        image.src = value;
    });
};


dogBtn.addEventListener('click', handleDogBtn);
catBtn.addEventListener('click', handleCatBtn);
surpriseBtn.addEventListener('click', handleSurpriseBtn);