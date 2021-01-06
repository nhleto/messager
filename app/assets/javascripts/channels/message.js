App.message = App.cable.subscriptions.create("MessageChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const messageDisplay = document.querySelector('#message-display')
    messageDisplay.insertAdjacentHTML('beforeend', this.template(data))
  },
  template(data) {
    return `<article class="message">
              <div class="message-header">
                <p>${data.user.email}</p>
              </div>
              <div class="message-body">
                <p>${data.body}</p>
              </div>
            </article>`
  }
});

// document.addEventListener("turbolinks:load", () => {
//   let form = document.querySelector('#message-form')
//   if(form) {
//     form.addEventListener('submit', (e) => {
//       e.preventDefault()
//       let messageInput = document.querySelector('#message-input').value
//       if(messageInput == '') return;
//       const message = {
//         body: messageInput
//       }
//       App.message.send({message: message})
//     })
//   }
// })
