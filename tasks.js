
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text = text.replace(/\n/, '').trim()
  if (text === 'quit' || text === 'exit') {
    quit();
  }
  else if (text.split(" ")[0] === ('hello')) {
    hello(text);
  }
  else if (text === 'list') {
    list();
  }
  else if (text.split(" ")[0] === 'add') {
    add(text);
  }
  else{
    unknownCommand(text);
  }
}

var tasks = ['task1','task2']

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  text=text.split(' ')
  if (text.length == 1) console.log("hello!")
  else console.log('hello '+ text[1]+'!')

}


/**
 * show list
 *
 * @returns {void}
 */
 function list(){
  
  for(let i =0 ;i< tasks.length ; i++){
    console.log('task '+(i*1+1)+ ': ' + tasks[i]+ '\n')
  }

}


/**
 * add list
 *
 * @returns {void}
 */
 function add(text){
  if ( text ==='add') console.log('Error')
  else {
    tasks.push(text.substring(4))
  }

}






/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Zakaria Bashir")

// New command "help" 
function help(){
  console.log('help, quit, exit, extended hello')
}
