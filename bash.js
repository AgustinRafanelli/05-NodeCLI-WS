const commands = require("./commands")
// Un prompt como output
process.stdout.write('prompt > ');
// El evento STDIN 'data' se dispara  cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim().split(' ');
  if(cmd.length > 1){
    let aux = ''
    for(i = 1 ; i<cmd.length ; i++){
      aux += cmd[i]+' '
    }
    aux = aux.trim();
    (commands[cmd[0]]) ? commands[cmd[0]](aux) : process.stdout.write('Comando invalido\nprompt > ');
  }else{
    (commands[cmd[0]]) ? commands[cmd[0]]() : process.stdout.write('Comando invalido\nprompt > ');
  }








});