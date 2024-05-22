$(document).ready(function(){
    $('#compra').validate({
        rules:{
            fullname:{
                required: true,
                minlength: 5
            },
            mail:{
                required: true,
                email: true
            },
            anos:{
                required: true,
                number: true
            },
            direccion:{
                required: true
            },
            metodo:{
                required: true
            },
        }
    })
})