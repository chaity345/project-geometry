/* objective: get base,height of a triangle.calculate the area by using provided formula and then display the area
step 1:get base value of triangle
step 2: added an id in the base input field
step 3: use getElement by id to access the input field
step 4: get value from the input field(value is string now) 
step 5:convert the value to a number(use parseFloat)

*/





function calculateTriangleArea(){
    //get the triangle base 
    const triangleBaseInput=document.getElementById('triangle-base') ;
    //get the value of input text
    const triangleBaseText=triangleBaseInput.value;
    //by default they are string input
    //to get number input change string to number
    const base=parseFloat(triangleBaseText);
    //console.log(base)

    //get triangle height
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value;
    const height= parseFloat(triangleHeightText);
    //console.log(height)

    //get the area
    const area= 0.5* base*height;
    console.log("area is the triangle is",area)
    //display triangle area
    const triangleAreaSpan=document.getElementById('tringle-area');
    //set the area into the areaSpan
    triangleAreaSpan.innerText=area;


}

