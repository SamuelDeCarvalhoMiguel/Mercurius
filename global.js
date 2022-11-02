function validaForm(frm) {

        if(frm.nome.value == "") {

            alert("Por favor, indique o seu nome.");

            return false;
        }

        else if(frm.email.value == ""){
            alert("Por favor, indique o seu email.");

            return false;
        }

        else if(frm.sexo.value == ""){
            alert("Por favor, indique o seu sexo.")
        }
    }
