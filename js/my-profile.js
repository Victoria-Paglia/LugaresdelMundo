document.addEventListener("DOMContentLoaded", function (e) {
    let perfil = localStorage.getItem('profile');

    if (perfil) {

        perfil = JSON.parse(perfil);

        if (perfil.imgUrl != "") {
            document.getElementById("imgProfile").src = perfil.imgUrl;
        }

        document.getElementById("imgUrl").value = perfil.imgUrl;
        document.getElementById("name").value = perfil.nombres;
        document.getElementById("surname").value = perfil.apellidos;
        document.getElementById("age").value = perfil.edad;
        document.getElementById("e-mail").value = perfil.email;
        document.getElementById("phone").value = perfil.telefono;
    }

    document.getElementById("envCambios").addEventListener("click", function (e) {
        let validate = true;
        let imgUrl = document.getElementById("imgUrl")
        let nombres = document.getElementById("name")
        let apellidos = document.getElementById("surname")
        let edad = document.getElementById("age")
        let email = document.getElementById("e-mail")
        let telefono = document.getElementById("phone")

        if (nombres.value === '') {
            nombres.classList.add("is-invalid")
            validate = false;
        } else {
            nombres.classList.remove("is-invalid")
        }

        if (apellidos.value === '') {
            apellidos.classList.add("is-invalid")
            validate = false;
        } else {
            apellidos.classList.remove("is-invalid")
        }

        if (edad.value === '') {
            edad.classList.add("is-invalid")
            validate = false;
        } else {
            edad.classList.remove("is-invalid")
        }

        if (email.value === '') {
            email.classList.add("is-invalid")
            validate = false;
        } else {
            email.classList.remove("is-invalid")
        }

        if (telefono.value === '') {
            telefono.classList.add("is-invalid")
            validate = false;
        } else {
            telefono.classList.remove("is-invalid")
        }

        if (validate){
            localStorage.setItem('profile', JSON.stringify({
                nombres: nombres.value,
                apellidos: apellidos.value,
                edad: edad.value,
                imgUrl: imgUrl.value,
                email: email.value,
                telefono: telefono.value
            }));
            
            window.localtion = "my-profile.html"
        }
    })
})