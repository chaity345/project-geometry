function calculateParallelogramArea(){
    //for catching the input field by function
    const base=getInputValueById('parallelogram-base')
    //console.log("base",base)
    const height=getInputValueById('parallelogram-height');
    //console.log(height)
    const area= base* height;
    //console.log(area)
    setInnerTextById('parallelogram-area',area);



    

}
//create a common function for base and height
function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId)
    const inputFieldText=inputField.value;
    const inputValue=parseInt(inputFieldText);
    //console.log(inputValue)
    return inputValue;

}
//get a common function for display area
function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId)
     element.innerText=area;

}

 