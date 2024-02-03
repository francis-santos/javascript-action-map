const CAT = 'gato';
const FISH = 'peixe';
const EAGLE = 'aguia';

const chooseAnimal = document.getElementById('chooseAnimal');

function getCatAction() {
    return 'O gato anda na terra';
}

function getFishAction() {
    return 'O peixe nada no mar';
}

function getEagleAction() {
    return 'A águia voa no céu';
}

// Bloco de código usando if
const actionIf = document.getElementById('actionIf');

function chooseIfAction() {
    if (chooseAnimal.value === CAT) {
        actionIf.innerHTML = getCatAction();
    }

    if (chooseAnimal.value === FISH) {
        actionIf.innerHTML = getFishAction();
    }

    if (chooseAnimal.value === EAGLE) {
        actionIf.innerHTML = getEagleAction();
    }
}

const chooseIfButton = document.getElementById('chooseIf');
chooseIfButton.addEventListener('click', chooseIfAction);
// Bloco de código usando if

// Bloco de código usando mapa de ações
const actions = {
    [CAT]: getCatAction,
    [FISH]: getFishAction,
    [EAGLE]: getEagleAction,
}

const actionMap = document.getElementById('actionMap');

function chooseActionMap() {
    actionMap.innerHTML = actions[chooseAnimal.value]();
}

const chooseActionMapButton = document.getElementById('chooseActionMap');
chooseActionMapButton.addEventListener('click', chooseActionMap);
// Bloco de código usando mapa de ações