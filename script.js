class Perfil{
    constructor(senha, hobbie){
        this.senha = senha
        this.hobbie = hobbie
    }
}
function cadastrar(){
    let senha = document.getElementById('senha-sign')
    let confirmaSenha = document.getElementById('senha-sign-confirma')
    let username = document.getElementById('username-sign')
    let hobbie = document.getElementById('hobbie')
    let perfil = new Perfil(senha.value, hobbie.value)
    if(localStorage.getItem(username)){
        alert('este nome de usuário já existe')
    }else if(senha.value == confirmaSenha.value && senha.value != '' && username.value != '' && hobbie.value != 0){
        localStorage.setItem(username.value, JSON.stringify(perfil))
        alert('você se cadastrou, boa')
        senha.value = ''
        username.value = ''
        hobbie.value = 0
        confirmaSenha.value = ''

    }else if(senha.value != confirmaSenha.value){
        alert('você não colocou a mesma senha nos dois blocos')
    }else{
        alert('preencha todos os campos')
    }
}
function verificar(){
    let username = document.getElementById('username-log')
    let senha = document.getElementById('senha-log')
    let perfilString = localStorage.getItem(username.value)
    if(perfilString){
        let perfilObjeto = JSON.parse(perfilString)//precisa transformar em objeto para eu conseguir recuperar o valor
        if(senha.value == perfilObjeto["senha"]){
            localStorage.setItem('username', username.value)
            window.location.href = 'noticias.html'
        }
        else{
            alert('senha errada')
            window.location.reload()
        }
    }else{
        alert('não existe esse ')
    }
}
function carregarImagens(){
    let usuarioAtivo = localStorage.getItem('username')
    let usuarioDados = JSON.parse(localStorage.getItem(usuarioAtivo))
    let hobbie = usuarioDados["hobbie"]
    let apresentacao = document.getElementById('apresentacao')
    apresentacao.innerHTML=`Bem vindo ${usuarioAtivo}`
    apresentacao.className = 'display-4 '
    let imagens = Array()

    if(hobbie =='esporte'){
        let imagens = ['close-up-athlete-running.jpg','esportes.png','man-working-out-gym.jpg','sports-tools.jpg','volei.jpg','ministerio-esporte.jpg']
        let descricao = ['Usain Bolt, decide encerrar carreira', 'Estudos indicam que fazer esportes diminui o stress e a depressão ',
        'Enteda o fenômeno dos gyms tiktokers','Como o contato com vários esportes podem influenciar o adolescente na vida adulta','volei, conheça o esporte que vem tomando o coração dos brasileiros',
        'Ministério do Esporte, comenta sobre os riscos de uma vida sedentária']
        for(let i in imagens){
            let coisa = document.getElementById(`noticia${parseInt(i)+1}`)
            coisa.innerHTML=  `<img class="img-fluid pt-5 pr-5 pl-5 pb-0 mb-0" src="imagens/${imagens[i]}"><p> ${descricao[i]}</p>`    
        }
    }else if(hobbie =='videogame'){
        let imagens = ['videogames.jpg','videogames.jpg','videogames.jpg','videogames.jpg','videogames.jpg','videogames.jpg']
        for(let i in imagens ){
            let coisa = document.getElementById(`noticia${parseInt(i)+1}`)
            coisa.innerHTML=`<img class="img-fluid pt-5 pr-5 pl-5 pb-0 mb-0" src="imagens/${imagens[i]}">`    
        }
    }else if(hobbie =='artes'){
        let imagens = ['aquarela.jpg','artes.jpg','banner.jpg','close-up-woman-painting.jpg','mulherSentada.jpg','aquarela.jpg']
    
        for(let i in imagens ){
            let coisa = document.getElementById(`noticia${parseInt(i)+1}`)
            coisa.innerHTML=`<img class="img-fluid pt-5 pr-5 pl-5 pb-0 mb-0" src="imagens/${imagens[i]}">`    
        }
    }
}
function verificarSenha(){
    senha = document.getElementById('senha-sign')
    confirmaSenha = document.getElementById('senha-sign-confirma')
    if(senha.value != confirmaSenha.value){
        confirmaSenha.style.backgroundColor= 'rgb(251, 118, 118)'
    }else{
        confirmaSenha.style.backgroundColor = 'rgb(93, 230, 93)' 
    }
}