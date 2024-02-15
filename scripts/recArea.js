function calculateRectangularArea(){
    //get the rectangular width
    const rectangularWidthInput=document.getElementById('rectangular-width');
    const rectangularWidthText=rectangularWidthInput.value;
    const width=parseFloat(rectangularWidthText);
    // console.log(width)

    //get the rectangular length
    const rectangularLengthInput= document.getElementById('rectangular-length');
    const rectangularLengthText=rectangularLengthInput.value;
    const length=parseFloat(rectangularLengthText);
    //console.log(length)

    //get the area of rectangular
    const area = width*length;

    //display the area
    const areaSpan=document.getElementById('rectangular-area');
    areaSpan.innerText=area;

}