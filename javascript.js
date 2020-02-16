let htmlText = checkHTML();

console.log(htmlText)

function checkHTML(){
    let doc = document.getElementById('body');
    let text = doc.innerHTML;
    return text;
}

validateHTML = (htmlText) => {
    let htmlValidationRegExp = /<.+?>/g;
    if(htmlText.length == 0){
        return false;
    }
    else{
        var text =  htmlText.match(htmlValidationRegExp);
        return text;
    }
}

function checkArray(){
    let tagArray = validateHTML(htmlText)
    console.log(tagArray)

    const arrWithSlashElements = tagArray.filter(e => e.includes('/'));
    const arrWithoutSlashElements = tagArray.filter(e => !e.includes('/'));
    console.log(arrWithSlashElements)
    console.log(arrWithoutSlashElements)

    if(arrWithSlashElements.length == arrWithoutSlashElements.length){
        console.log(true)
    }
    else{
        console.log(false)
    }

}

checkArray();

// function printedResult(){
//     var result = ('testing ' + htmlValidationRegExp)
//     return result;
// }

// document.getElementById('result').innerHTML = printedResult();