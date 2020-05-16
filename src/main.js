import {render, RenderPosition} from "./utils/render.js";
import AddButtonComponent from "./components/add-button.js";
import InfoSectionComponent from "./components/info-section.js";
import InfoComponent from "./components/info.js";
import CostComponent from "./components/cost.js";
import MenuComponent from "./components/menu.js";
import FilterController from "./controllers/filter-controller.js";
import {generateEvents} from "./mock/event.js";
import TripController from "./controllers/trip-controller.js";
import PointsModel from "./models/points.js";

const EVENTS_COUNT = 20;

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsFilterHeaderElement = tripControlsElement.querySelector(`h2:nth-of-type(2)`);

const events = generateEvents(EVENTS_COUNT);
const pointsModel = new PointsModel();
pointsModel.setEvents(events);

render(tripControlsFilterHeaderElement, new MenuComponent(), RenderPosition.BEFORE);

const filterController = new FilterController(tripControlsElement, pointsModel);
filterController.render();

render(tripControlsElement, new InfoSectionComponent(), RenderPosition.BEFORE);

const addButtonComponent = new AddButtonComponent();
render(tripMainElement, addButtonComponent, RenderPosition.BEFOREEND);

const tripMainInfoSectionElement = tripMainElement.querySelector(`.trip-info`);
render(tripMainInfoSectionElement, new InfoComponent(), RenderPosition.BEFOREEND);
render(tripMainInfoSectionElement, new CostComponent(), RenderPosition.BEFOREEND);

// Trip
const tripEventsElement = document.querySelector(`.trip-events`);
const tripController = new TripController(tripEventsElement, pointsModel);
tripController.render();
tripController.setNewEventFormToggleHandler((isOpen) => {
  if (isOpen) {
    addButtonComponent.disableElement();
  } else {
    addButtonComponent.enableElement();
  }
});

addButtonComponent.setOnClickHandler(() => {
  filterController.reset();
  tripController.createEvent();
});
