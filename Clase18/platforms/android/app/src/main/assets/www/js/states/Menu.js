Menu = function(game){

}

Menu.prototype = {
    create:function(){
        that = this;
        $.ajax(
            {
                url : "http://18.208.26.24/proyecto/juego/public/api/users",
                method : "GET",
                dataType : "json",
                success:function(response){
                    response.data.forEach(function(element,index){
                        console.log(element.first_name);
                    });
                }
            }
        );
        $.ajax(
            {
                url : "http://18.208.26.24/proyecto/juego/public/api/users",
                method : "POST",
                dataType : "json",
                data : {
                    email : "pcsilval@upc.edu.pe",
                    first_name : "Luis",
                    last_name : "Valdivia"
                },
                success:function(response){
                    console.log(response);
                    if(response.msg == "ERROR")
                    console.log("Hola");
                }
            }
        );
    }
}