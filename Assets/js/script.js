// reconhecimento de quando o usuário aperta a tecla - corpo do site
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    // saber o que foi digitado
    let song = document.querySelector('#input').value;

    // condição se tiver alguma coisa
    if (song !== '') {
        // transforma em um array
        let songArray = song.split('');
        playComposition(songArray);
    }
})


function playSound(sound) {
    // arquivo de audio - baseado na tecla que se baseou
    let audioElement = document.querySelector(`#s_${sound}`)
    // elemento da tela;
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    // verifica se achou alguma coisa
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    // Condição de borda nas teclas
    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300);
    }
}

// função que executa o que o usuário irá digitar
function playComposition(songArray) {
    // intervalo entre item
    let walt = 0

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, walt);

        walt += 250;
    }
}


