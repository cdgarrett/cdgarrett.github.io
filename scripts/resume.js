window.onload = function()
{
  document.querySelector('#timeline-nav-ul').childNodes.forEach(li => li.addEventListener('click', shiftTimeline));
}


function shiftTimeline(e) {
  //Check nav link is not inactive

  //Check which nav link was clicked

  //Figure out currently selected timeline event
  
  //Remove selected class from current event

  //Get prev/next event and apply selected class

  //If at either end of list, apply inactive class

  if (e.target.textContent == "Prev")
  {
    console.log("prev");
  }
  else if (e.target.textContent == "Next")
  {
    console.log("next");
  }
}