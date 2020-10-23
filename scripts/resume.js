window.onload = function()
{
  document.querySelectorAll('.timeline-nav').forEach(nav => nav.addEventListener('click', shiftTimeline));
  document.querySelectorAll('.timeline-date').forEach(date => date.addEventListener('click', jumpToDate));
  document.querySelectorAll('.timeline-event').forEach(event => event.addEventListener('animationend', removeAnimation));}

function shiftTimeline(e) {
  console.log(e.target);

  /* Sanity check - This shouldn't actually be click-able */
  if (e.target.classList.contains("timeline-nav-inactive"))
    return;
    
  let navArrow = e.target;
  let currentEvent = document.querySelector('.timeline-event-selected');
  let timelineDate = document.querySelector('.timeline-date-selected');

  currentEvent.classList.remove("timeline-event-selected");
  timelineDate.classList.remove("timeline-date-selected");

  /* Shift left, toggle active/inactive styling on event, nav arrows, and timeline dots */
  if (navArrow.classList.contains("timeline-nav-prev"))
  {
    if (currentEvent.previousElementSibling == null)
      return;
    
    currentEvent.classList.add("timeline-event-leave-r")
    currentEvent.previousElementSibling.classList.add("timeline-event-selected", "timeline-event-enter-l");
        
    if (currentEvent.previousElementSibling.previousElementSibling == null)
        navArrow.classList.add("timeline-nav-inactive");
    
    document.querySelector(".right").parentElement.classList.remove("timeline-nav-inactive");
    timelineDate.parentElement.previousElementSibling.firstElementChild.classList.add("timeline-date-selected")
  }
  /* Shift right, toggle active/inactive styling on event, nav arrows, and timeline dots */
  else if (navArrow.classList.contains("timeline-nav-next"))
  {
    if (currentEvent.nextElementSibling == null)
      return;

      currentEvent.classList.add("timeline-event-leave-l")
      currentEvent.nextElementSibling.classList.add("timeline-event-selected", "timeline-event-enter-r");
      if (currentEvent.nextElementSibling.nextElementSibling == null)
        navArrow.classList.add("timeline-nav-inactive");
      
      document.querySelector(".left").parentElement.classList.remove("timeline-nav-inactive");
      timelineDate.parentElement.nextElementSibling.firstElementChild.classList.add("timeline-date-selected")
  }
}

function jumpToDate(e) {
  let currDateElement = document.querySelector('.timeline-date-selected');
  let currEventElement = document.querySelector('.timeline-event-selected');
  let currDate = currDateElement.getAttribute("data-date");

  /* Remove existing active/inactive styles */
  currDateElement.classList.remove('timeline-date-selected');
  currEventElement.classList.remove('timeline-event-selected');
  document.querySelector('.timeline-nav-prev').classList.remove('timeline-nav-inactive');
  document.querySelector('.timeline-nav-next').classList.remove('timeline-nav-inactive');

  /* Find the corresponding timeline event description and re-apply necessary styles*/
  let newDate = e.target.getAttribute("data-date");
  document.querySelectorAll('.timeline-event').forEach(timelineEvent => {
    if (newDate == timelineEvent.getAttribute("data-date"))
    {
      e.target.classList.add("timeline-date-selected");
      timelineEvent.classList.add("timeline-event-selected");

      // Determine direction of event enter/leave animations
      if (newDate.split("-")[1] > currDate.split("-")[1])
      {
        currEventElement.classList.add("timeline-event-leave-r");
        timelineEvent.classList.add("timeline-event-enter-l");
      }
      else
      {
        currEventElement.classList.add("timeline-event-leave-l");
        timelineEvent.classList.add("timeline-event-enter-r");
      }

      // If we're at either end of the timeline, set the appropriate nav arrow inactive 
      if (e.target.parentElement.previousElementSibling == null)
        document.querySelector('.timeline-nav-prev').classList.add('timeline-nav-inactive');
      else if (e.target.parentElement.nextElementSibling == null)
        document.querySelector('.timeline-nav-next').classList.add('timeline-nav-inactive');
    }
  });
}

function removeAnimation(e) {
  this.classList.remove("timeline-event-enter-r", "timeline-event-leave-r", "timeline-event-enter-l", "timeline-event-leave-l");
}