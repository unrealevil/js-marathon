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
    $msg.innerHTML= message;
    return $msg;
}
