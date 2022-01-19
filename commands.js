const fs = require('fs'); const request = require('request');

function impresion(arr , fun){
  if(fun){
    fs.readFile(arr, 'utf8', (err, archivo) => {
      if (err) throw err
      let lineas = fun(archivo)
      lineas.forEach(linea => process.stdout.write(linea + '\n'))
      process.stdout.write('\nprompt > ');
    })
  }else{
    process.stdout.write(arr);
    process.stdout.write('\nprompt > ');
  }

}

module.exports ={
  pwd: function(){
    impresion(process.argv[1].slice(5, -8))
  },
  date: function(){
    impresion(Date())
  },
  ls: function(){
    fs.readdir(__dirname, (err, archivos) => {
      if(err) throw err
      archivos.forEach(archivo => process.stdout.write(archivo+'\n'))
      process.stdout.write('\nprompt > ');
    })
  },
  echo: function(txt){
    impresion(txt)
  },
  cat: function (file) {
    let files = file.split(' ')
    files.forEach(fileName =>{
      impresion(file, (archivo) => [archivo])
    })
  },
  head: function (file) {
    impresion(file, (archivo) => archivo.split('\n', 5))
  },
  tail: function (file) {
    impresion(file, (archivo) => archivo.split('\n').slice(-5))
  },
  sort: function (file) {
    impresion(file, (archivo) => archivo.split('\n').sort())
  },
  wc: function (file) {
    impresion(file, (archivo) => [archivo.split('\n').length])
  },
  uniq: function (file) {
    impresion(file, (archivo) => archivo.split('\n').filter((linea, i, arr) => linea != arr[i + 1]))
  },
  curl: function (page) {
    request(page, function (error, response, body) {
      impresion(body);
    })
  }
}