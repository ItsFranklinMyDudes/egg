function egg(options = {}) {
    if(!options) throw new TypeError("NO_ARGUMENTS: No arguments was provided")
    if(!options.text) throw new TypeError('NO_MESSAGE: No message option was provided')
    if(!options.emoji) false

    //main code
    if(options.emoji == true) {
        return options.text.toLowerCase().split('').map(data => {
                if(/[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g.test(data)) {
                    return `🥚`
                }
                return data
            }).join('');
    } else {
        return options.text.toLowerCase().split('').map(data => {
            if(/[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g.test(data)) {
                return `egg `
            }
            return data
        }).join('');
    }
}

module.exports = egg