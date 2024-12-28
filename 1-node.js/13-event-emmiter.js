const EventEmitter  = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`Data Recieved from ${name} with id ${id}`);
})
customEmitter.prependListener('Samar',(name,id)=>{
    console.log('Learning things through documentation');
})

//order of emit matters a lot
customEmitter.emit('response','John',34);
customEmitter.emit('Samar');

