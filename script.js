//escolher imagem para o carrossel - mudar classe e etc...
//rever essa parte da aula para confirmação
        $(document).ready(function() {
            
            let slideAtual = 1;
            let listaSlides = ["banner-promocao1", "banner-promo2", "banner"]

            setInterval(mudarSlide, 1000)

            function mudarSlide() {

                if(slideAtual > 0) {
                    $("carrossel").removeClass(listaSlides[slideAtual - 1])
                }else if (slideAtual == 0) {
                    $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1])
                }
                $("carrossel").addClass(listaSlides[slideAtual])

                slideAtual++

                if(slideAtual > listaSlides.length -1) {
                    slideAtual = 0;
                }
            }

            $("#barras").click(function() {
                
                $("menu").toggleClass("menu-ativo");

            })

        })

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';   
    }
}

function inscricaoPromocao(){
    let email = document.getElementById("campo-email").value
    
    
}