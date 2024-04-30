class Perfil{
    constructor(senha, hobbie){
        this.senha = senha
        this.hobbie = hobbie
    }
}//não precisei para realizar o cadastro, porém é legal eu deixar na manga
function cadastrar(){
    let senha = document.getElementById('senha-sign')
    let username = document.getElementById('username-sign')
    let hobbie = document.getElementById('hobbie')
    let perfil = new Perfil(senha.value, hobbie.value)
    if(localStorage.getItem(username)){
        alert('este nome de usuário já existe')
    }else{
        localStorage.setItem(username.value, JSON.stringify(perfil))
        alert('você se cadastrou, boa')
        senha.value = ''
        username.value = ''
        hobbie.value = 0

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
            let btn = document.createElement('button')
            btn.className = 'btn btn-primary'
            btn.innerHTML = '<i class="fa-regular fa-bookmark"></i>'
            let coisa = document.getElementById(`noticia${parseInt(i)+1}`)
            coisa.innerHTML=  `<img class="img-fluid pt-5 pr-5 pl-5 pb-0 mb-0" src="imagens/${imagens[i]}"><p> ${descricao[i]}</p>`    
            coisa.appendChild(btn)
        }
    }else if(hobbie =='videogame'){
        let imagens = ['eu','gosto','muito','de','videogames','eeee']
        for(let i in imagens ){
            let coisa = document.getElementById(`noticia${parseInt(i)+1}`)
            coisa.innerHTML=imagens[i]    
        }
    }else if(hobbie =='artes'){
        let imagens = ['eu','gosto','muito','de','artes','eeee']
        for(let i in imagens ){
            let coisa = document.getElementById(`noticia${parseInt(i)+1}`)
            coisa.innerHTML=imagens[i]    
        }
    }
}