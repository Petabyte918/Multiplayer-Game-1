const handler = {};
/**
 * Appends a new chat message on the chatbox
 *
 * @param {string} nick
 * @param {string} hasClass
 * @param {string} msg
 */
handler.appendMessage = function(nick, hasClass, msg){
    let userImage;
    if (hasClass === 'user-message'){
        userImage = './Media/blue-cube.png';
    }
    else if (hasClass === 'server-message') {
        userImage = './Media/Server.png'
    }

    let element =
        `<div class="chat-text chat-body">
            <div class="icon-container">
                <img src="${userImage}"  class="chat-icon">
                <br/>
                <div>[${nick}]</div>
            </div>
            <p class="${hasClass}">${msg}</p>
        </div>`;
    chatBox.append(element);

};

handler.buyUpgrade = function(upgrade, player){

};