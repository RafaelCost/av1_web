
function Message() {
    this.message = "";
    this.name = "";
}

var msg_list = [];


function ShowMessages() {
    // document.getElementById("demo").innerHTML = '';
    document.getElementById("muralmessage").innerHTML = "";

    for( var i = 0; i < msg_list.length; i++){ 
        var msg = msg_list[i]
        var msg_ = Object.values(msg)
        console.log(Object.values(msg));
        var form = document.createElement("form");
        form.style.marginTop = "20px";
        
        var text_element = document.createTextNode(msg_[0]+ ': '+ msg_[1]);
        form.appendChild(text_element)

        var button_element = document.createElement("BUTTON");
        button_element.className = "btn_Send_Message";
        button_element.style.marginLeft = "20px"
        button_element.setAttribute("type", "button");
        button_element.setAttribute("onclick", "DeleteMessage("+i+")");
        var t = document.createTextNode("Excluir");
        button_element.appendChild(t);


        form.appendChild(button_element)

        document.getElementById("muralmessage").appendChild(form)
        // = Object.values(msg);
      };
}

function SendMessage() {
    var msg = new Message();
    msg.message = document.getElementById("username").value
    msg.name = document.getElementById("usermsg").value

    document.getElementById("username").value = "";
    document.getElementById("usermsg").value = "";

    msg_list.push(msg)
    // console.log(msg_list)
    ShowMessages()

}

function DeleteMessage(id_) {
    console.log(id_)
    var filtered = msg_list.filter(function(value, index, arr){ 
        return index != id_;
    });

    msg_list = filtered
    console.log(msg_list)
    ShowMessages()

}
