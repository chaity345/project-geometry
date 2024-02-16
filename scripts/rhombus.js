function calculateRhombusArea(){
    const base=getInputValue('rhombus-width');
    //console.log(base)
    const height=getInputValue('rhombus-length');
    //console.log(height)
    const area=0.5*base*height;
    setInnerTextById("rhombus-area",area);

    

}
//get common function for base and height
function getInputValue(inputFieldId){

    const inputField=document.getElementById(inputFieldId);
    const inputFieldText=inputField.value;
    const inputValue=parseFloat(inputFieldText);
    return inputValue;

}
//set area value in a common function
function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}