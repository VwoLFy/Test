function checkSpam(str) {
    if (!str) return false;
    str = str.toLowerCase();
    if ( str.includes("viagra") || str.includes("xxx") ) {
        return true;
    }
    return false;
}
alert( checkSpam( prompt() ) );