import {MONTH_NAMES} from "../const.js";
import {castTimeFormat} from "../utils.js";
import EventComponent from "../components/event.js";

const dayInfoElementsTemplate = (count, dateString) => {
  const dateObj = JSON.parse(dateString);
  const {date, month, year} = dateObj;
  const newDateString = `${year}-${month}-${date}`;
  return (
    `<span class="day__counter">${count}</span>
    <time class="day__date" datetime="${newDateString}">${MONTH_NAMES[month]} ${castTimeFormat(date)}</time>`
  );
};

const createTripDayTemplate = (dayWithEvents) => {
  const {eventSort, daysCount, uniqDate, events} = dayWithEvents;
  const dayInfoMarkup = eventSort ? dayInfoElementsTemplate(daysCount, uniqDate) : ``;
  const eventsMarkup = events.map((event) => {

    const eventComponent = new EventComponent(event);
    return eventComponent.getTemplate();
  }).join(`\n`);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        ${dayInfoMarkup}
      </div>
      <ul class="trip-events__list">
      ${eventsMarkup}
      </ul>
    </li>`
  );
};