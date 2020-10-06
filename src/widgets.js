export const buttonDefault = (title, onClick = null) => {
    const $button = document.createElement('button');
    $button.className = 'button';
    $button.innerText = title;
    if (onClick) {
        $button.addEventListener('click', onClick);
    }
    return $button;
}

export const buttonGreen = (title, onClick = null) => {
    const $button = document.createElement('button');
    $button.className = 'button btn-green';
    $button.innerText = title;
    if (onClick) {
        $button.addEventListener('click', onClick);
    }
    return $button;
}

export const messageBig = (message) => {
    const $msg = document.createElement('div');
    $msg.className = 'message-big';
    $msg.innerHTML = message;
    return $msg;
}

export const buttonSelectPokemon = ({level, image, name}, onClick = null) => {
    const $button = document.createElement('button');
    $button.className = 'button pokemon-btn';
    $button.innerHTML = `
            <span class="lvl">Lv. ${level}</span>
            <img src="${image}" class="sprite" alt="${name}">
            <div class="details">
                <h2 class="name">${name}</h2>
            </div>
`;
    if (onClick) {
        $button.addEventListener('click', onClick);
    }
    return $button;
}
