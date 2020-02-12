var htmlText = checkHTML();
console.log(htmlText)

function checkHTML(){
    var doc = document.getElementById('body');
    var text = doc.innerHTML;
    //return div to be validated
    return text;
}

validateHTML = (htmlText) => {
    //for finding each html tag that needs to be validated
    var htmlValidationRegExp = new RegExp("<.+?>")

    //checks the length of the div element holding all the tags to be checked -- return boolean
    if(htmlText.length == 0){
        return false;
    }
    else{
        //return tag elements 
        var findText = htmlText.match(htmlValidationRegExp)
        return findText;
    }
}
// return htmlText;
console.log(validateHTML(htmlText))
