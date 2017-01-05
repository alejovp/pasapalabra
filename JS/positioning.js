
/*Need to be onload because we are calling the script before 
 *the html element in the DOM. Another option is to place the 
 *function call right after the elements in the DOM.
*/
function locateTheCircles() {
  //Get the circles.
  var outerCircle = document.getElementById('container');
  var innerCircles = document.getElementsByClassName('inner');
  var refCircle = document.getElementById('ref');
  
  //Calculate the circles radius.
  var outerRadio = parseInt(window.getComputedStyle(outerCircle).getPropertyValue('width')) / 2;
  var innerRadio = parseInt(window.getComputedStyle(innerCircles[0]).getPropertyValue('width')) / 2;
  var refRadio = parseInt(window.getComputedStyle(refCircle).getPropertyValue('width')) / 2;

  /*Alpha is the angle of the outer circle where I want to start with 
   *the inner circles and Delta is the angular distance between them.
   */
  var alpha = Math.PI / 2;
  var delta = 2 * Math.PI / innerCircles.length;
  
  /*
   * Calculate the coordinates of the starting inner circle using 
   * trigonometric circles properties and then with the angular distance Delta
   * calculate the rest. In order to locate these inner circles around the center
   * of the outer circle we need to add the radius because the default reference
   * in the document for the div's is top cero left cero.
   * 
   */
  for (var i = 0; i < innerCircles.length; i++) { 
    innerCircles[i].style.left = (outerRadio - innerRadio) + ((outerRadio - 1.5*innerRadio) * Math.cos(alpha)) + "px";
    innerCircles[i].style.top = (outerRadio - innerRadio) - ((outerRadio - 1.5*innerRadio) * Math.sin(alpha)) + "px";
    alpha = alpha - delta;
  }

  //Locate the reference circle in the outer circle's center.
  refCircle.style.top = outerRadio - refRadio + "px";
  refCircle.style.left = outerRadio - refRadio + "px";

}