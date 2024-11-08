$(document).ready(function(){
    $(".buttm").click(function () {
        var User_Name = $("#user_name").val();
        var Pass_word = $("#PASSWORD").val();
       
        if((User_Name === "")|(Pass_word === "")){
            $(".erorr").css("display", "none");
            $(".erorr").css("display", "block");
        }else {
            $(".erorr").css("display", "none");

            const data = {
                UserName: User_Name,
                Password: parseInt(Pass_word)
            };
            
            
              
            fetch('http://localhost:5000/connect/loggin', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Convert data to JSON string for the request body
            })
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;;
                
            })
            .catch(error => console.error('Error:', error));
        }


        
    })
})

