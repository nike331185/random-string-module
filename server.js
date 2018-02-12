module.exports = {
    RandomChar:  function(num){
        var string = "abcdefghijklmnopqrstuvwxyz0123456789";
        var str = '';
        var i = 0;
        while(i < num){
            console.log(string.charAt(Math.floor(Math.random() * string.length)),Math.floor(Math.random() * string.length));
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
        }
        return str;
    }
}
