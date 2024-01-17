
function gets() {
    return 10;
}

function print(string){
    console.log(string);
}


//module.exports.gets = gets;

module.exports = {
    //gets: gets,
    //print: print
    // ou como é o mesmo nome
    gets, print
};