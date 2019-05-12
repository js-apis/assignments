let bot = new RiveScript();

bot.loadFile('brian.rive').then(botReady).catch(botNotReady)

const message_container = document.querySelector('.messages')
const form = document.querySelector('form')
const input_box = document.querySelector('input')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    selfReply(input_box.value);
    input_box.value = ''
    command(input_box.value)

})

function botReply(message) {
    message_container.innerHTML += `<div class="bot">${message}</div>`;
    location.href = '#edge';
}

function selfReply(message) {
    message_container.innerHTML += `<div class="self">${message}</div>`;
    location.href = '#edge';

    bot.reply("local-user", message).then(function (reply) {
        botReply(reply);
    });
    console.log(message)
    
    var keys = message.split(" ")
    console.log(keys)
    
    for(let i = 0; i<keys.length; i++){
        if (keys[i] == "microsoft"){
        $(".graph-1").show('slow');
        $(".graph-2").hide('slow');
        $(".graph-3").hide('slow');

        }
    
        if (keys[i] == "beijing" || keys[i] == "Beijing"){
            $(".graph-2").show('slow');
            $(".graph-1").hide('slow');
            $(".graph-3").hide('slow');

        }
        
        if (keys[i] == "weather" || keys[i] == "Weather"){
            $(".graph-3").show('slow');
            $(".graph-2").hide('slow');
            $(".graph-1").hide('slow');
        }
        
        
    }
    
    
}

function botReady() {
    bot.sortReplies();
    botReply('Hello, I am FRIDAY, your personal assistant');
}

function botNotReady(err) {
    console.log("An error has occurred.", err);
}


function command(message){
    console.log(message)
}


