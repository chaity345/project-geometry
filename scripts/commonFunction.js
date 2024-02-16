function calculateParallelogramArea(){
    //for catching the input field by function
    const base=getInputValueById('parallelogram-base')
    

}
//create a common function for base and height
function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId)
    const inputFieldText=inputField.value;
    const inputValue=parseInt(inputFieldText);
    console.log(inputValue)

}