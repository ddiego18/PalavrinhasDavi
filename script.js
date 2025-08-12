document.addEventListener('DOMContentLoaded', () => {

    const todosOsBotoes = document.querySelectorAll('.botao-som');
    
    let audioAtual = null;

    todosOsBotoes.forEach(botao => {
        
        botao.addEventListener('click', () => {

            if (audioAtual) {
                audioAtual.pause();
                audioAtual.currentTime = 0;
            }

            const nomeDoAudio = botao.dataset.audio;

            const caminhoDoAudio = `Sounds/${nomeDoAudio}`;

            const novoAudio = new Audio(caminhoDoAudio);
            
            novoAudio.play();

            audioAtual = novoAudio;
        });
    });
});