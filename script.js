document.getElementById('sendButton').addEventListener('click',function(){
    const messageInput=document.getElementById('messageInput');
    const messageText=messageInput.ariaValueMax.trim();
        if(messageText){
            const messagesList=document.getElementById('messagesList');
            const li=document.createElement('li');
            li.textContent=messageText;
            messagesList.appendChild(li);
            messageInput.value="l";
        } else{
            alert("Veuillez entrer un message.");
        }
    
});
document.getElementById('messageInput').
addEventListener('keypress',function(event){
    if(event.key==='Enter'){
        document.getElementById('sendButton').click()
    }
})

