


division = document.querySelector('div.container')

console.log(division);

function calcTip() {
    sllc = document.getElementById('IsSelection')
    // value option gives the value of the value attribute 
    // text gives the value stored in the TextNode
    valueOfTextNode = sllc[sllc.selectedIndex].text
    console.log(valueOfTextNode)
    valueConvertToDecimal = valueOfTextNode /100
    console.log(valueConvertToDecimal)

    getInputId = document.getElementById('input_')
    valueInserted = Number(getInputId.value)
    // console.log(typeof valueInserted)
    console.log(valueInserted)
    valueCalculatedOfTip = valueInserted * valueConvertToDecimal
    console.log(valueCalculatedOfTip)
    costIncludingTip = parseInt(valueInserted + valueCalculatedOfTip)
    console.log(costIncludingTip)
    // valueByTwo = valueOf*2
    // newValue = (Math.round(valueByTwo * 10)/10)
    paragraph = document.createElement('p');
    paragraph.style.color = "red"
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })
    formatTotalTip = formatter.format(costIncludingTip)
    
    paragraph.innerHTML = formatTotalTip

    section = document.getElementById('isSection')
    section.appendChild(paragraph)
    console.log(paragraph)
    // paragraph.innerHTML = valueCalculatedOfTip
    // // valueInserted*valueConvertToDecimal
    // console.log(paragraph);
    // // console.log(valueByTwo)

    // console.log(valueInserted)
    // console.log(valueConvertToDecimal)
    // console.log(valueInserted*valueConvertToDecimal)

    // console.log(valueConvertToDecimal*newValue)
}
