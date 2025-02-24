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
function startApp(name) {
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
    } else if (text.split(" ")[0] === ('hello')) {
        hello(text);
    } else if (text === 'list') {
        list();
    } else if (text.split(" ")[0] === 'add') {
        add(text);
    } else if (text.split(" ")[0] === 'remove') {
        remove(text);
    } else if (text.split(" ")[0] === 'edit') {
        edit(text);
    } else {
        unknownCommand(text);
    }
}

var tasks = ['task1', 'task2']

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
    console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
    text = text.split(' ')
    if (text.length == 1) console.log("hello!")
    else console.log('hello ' + text[1] + '!')

}


/**
 * show list
 *
 * @returns {void}
 */
function list() {

    for (let i = 0; i < tasks.length; i++) {
        console.log('task ' + (i * 1 + 1) + ': ' + tasks[i] + '\n')
    }

}


/**
 * add list
 *
 * @returns {void}
 */
function add(text) {
    if (text === 'add') console.log('Error')
    else {
        tasks.push(text.substring(4))
    }

}

/**
 * remove from list
 *
 * @returns {void}
 */
function remove(text) {
    if (text === 'remove') {
        tasks.pop()

    } else {

        text = text.split(' ')
        if (isNaN(text[1])) {
            console.log('enter number')
        } else if (text[1] > tasks.length) {
            console.log("this item does not exist")
        } else {

            tasks.splice(text[1] - 1, 1)
        }
    }
}

/**
 * edit list
 *
 * @returns {void}
 */
function edit(text) {
    text = text.split(' ')
    if (text == 'edit') console.log('Error')
    else if (isNaN(text[1])) {
        tasks[tasks.length - 1] = text.slice(1).join()
    } else if (text[1] <= tasks.length) {
        tasks[text[1] - 1] = text.slice(2).join()
    } else {
        console.log("item does not exist")
    }
}







/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
    console.log('Quitting now, goodbye!')
    process.exit();
}

// The following line starts the application
startApp("Zakaria Bashir")

// New command "help" 
function help() {
    console.log('help, quit, exit,  hello, add, add text, remove, remove num')
}