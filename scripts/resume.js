window.onload = function()
{
  document.querySelectorAll('.timeline-nav').forEach(icon => icon.addEventListener('click', shiftTimeline));
}


function shiftTimeline(e) {
  let navArrow = e.target;

  /* Ideally this shouldn't be click-able.. */
  if (navArrow.classList.contains("timeline-nav-inactive"))
    return;

  let currentEvent = document.querySelector('.timeline-event-selected');
  if (navArrow.textContent == "<")
  {
    /* See previous comment about making the arrow unclick-able */
    if (currentEvent.previousElementSibling == null)
      return;
    
    currentEvent.previousElementSibling.classList.add("timeline-event-selected");
    if (currentEvent.previousElementSibling.previousElementSibling == null)
        navArrow.classList.add("timeline-nav-inactive");
      
    navArrow.parentElement.nextElementSibling.firstElementChild.classList.remove("timeline-nav-inactive");
  }
  else if (navArrow.textContent == ">")
  {
    /* See previous comment about making the arrow unclick-able */
    if (currentEvent.nextElementSibling == null)
      return;

      currentEvent.nextElementSibling.classList.add("timeline-event-selected");
      if (currentEvent.nextElementSibling.nextElementSibling == null)
        navArrow.classList.add("timeline-nav-inactive");
      
      navArrow.parentElement.previousElementSibling.firstElementChild.classList.remove("timeline-nav-inactive");
  }
  currentEvent.classList.remove("timeline-event-selected");
  console.log(currentEvent.classList);
}