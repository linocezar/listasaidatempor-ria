class Lista{
    constructor(){
        this.Controle = 1;
        this.arrayListas = [];
        
        }
        salvar() {
           let lista = this.lerDados();
           if (this.validaCampos(lista)); {
               this.adicionar
           }
           console.log(lista);
           
        }

        adicionar(lista){
            this.arrayListas.push(lista);
            this.Controle++;

        }

        lerDados(){
            let lista = {}

            lista.Controle = this.Controle
            lista.matricula = document.getElementById('matricula').value;
            lista.nome = document.getElementById('nome').value;
            lista.execução = document.getElementById('execução').value;
            lista.fração = document.getElementById('fração').value;
            lista.endereço = document.getElementById('endereço').value;
            lista.pessoa = document.getElementById('pessoa').value;
            lista.vinculo = document.getElementById('vinculo').value;
            lista.locomoção = document.getElementById('locomoção').value;
            lista.raio = document.getElementById('raio').value;

            return lista;
        }

        validaCampos(lista) {
            let msg = '';
            if(lista.matricula == '') {
                msg += '- matricula não informada \n';
            }
            if(lista.matricula == '') {
                msg += ' - nome não informado \n';
            }
            if(msg != '') {
            alert(msg);
            return false
        }

        return true

        }

        cancelar() {
            alert('cancelada');
                    }
        }
        var lista = new Lista();

    