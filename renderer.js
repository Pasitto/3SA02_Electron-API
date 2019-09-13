const {shell} = require('electron')
const os = require('os')
const part = require('path')
const notification = {
    title: 'Electron',
    body: 'This is Electron Notification. That Works!!',
    icon:  part.join(__dirname,'./icon.png')
}
const notificationButton = document.getElementById('button-noti')
const fileManagerBtn = document.getElementById('button-file')

notificationButton.addEventListener('click',() => {
    const myNotification = new window.Notification(notification.title, notification)

    myNotification.onclick = () => {
        console.log('Notification clicked')
    }
});

fileManagerBtn.addEventListener('click', (event) => {
    shell.showItemInFolder(os.homedir())
});