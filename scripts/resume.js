window.onload = function()
{
  document.querySelectorAll('.arrow').forEach(icon => icon.addEventListener('click', shiftTimeline));
}


function shiftTimeline(e) {
  console.log(e);

  /* Sanity check - This shouldn't actually be click-able */
  if (e.target.classList.contains("timeline-nav-inactive"))
    return;
    
  let navArrow = e.target;
  let currentEvent = document.querySelector('.timeline-event-selected');

  console.log(currentEvent);
  if (navArrow.classList.contains("left"))
  {
    if (currentEvent.previousElementSibling == null)
      return;
    
    currentEvent.previousElementSibling.classList.add("timeline-event-selected");
    if (currentEvent.previousElementSibling.previousElementSibling == null)
        navArrow.parentElement.classList.add("timeline-nav-inactive");
    
    document.querySelector(".right").parentElement.classList.remove("timeline-nav-inactive");
  }
  else if (navArrow.classList.contains("right"))
  {
    if (currentEvent.nextElementSibling == null)
      return;

      currentEvent.nextElementSibling.classList.add("timeline-event-selected");
      if (currentEvent.nextElementSibling.nextElementSibling == null)
        navArrow.parentElement.classList.add("timeline-nav-inactive");
      
        document.querySelector(".left").parentElement.classList.remove("timeline-nav-inactive");
  }
  currentEvent.classList.remove("timeline-event-selected");
  console.log(currentEvent.classList);
}