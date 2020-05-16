import AbstractSmartComponent from "../components/abstract-smart-component.js";
import {destinations, transferTypes, activityTypes, offersByType, Destinations, Mode} from "../const.js";
import {capitalize} from "../utils/common.js";
import {getRandomItemsfromArray, getRandomPhotos, destinationDescriptions, MIN_DESCRIPTION_PHRASES, MAX_DESCRIPTION_PHRASES, MIN_PHOTOS, MAX_PHOTOS} from "../mock/event.js";
import cloneDeep from "../../node_modules/lodash/cloneDeep";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const createEventTypesMarkup = (allTypes, type) => {
  return allTypes.map((eventType) => {
    eventType = eventType.toLowerCase();
    const isChecked = eventType === type.toLowerCase() ? `checked` : ``;
    return (
      `<div class="event__type-item">
        <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}" ${isChecked}>
        <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalize(eventType)}</label>
      </div>`
    );
  }).join(`\n`);
};

const compareOffers = (offerOne, offerTwo) => {
  if (offerOne.type.toLowerCase() === offerTwo.type.toLowerCase() &&
    offerOne.title === offerTwo.title &&
    offerOne.price === offerTwo.price) {
    return true;
  }
  return false;
};

const createAvailableOffersMarkup = (allOffersForEventType, selectedEventOffers) => {
  return allOffersForEventType.map((offerForEventType) => {
    let isChecked = ``;
    if (selectedEventOffers.length > 0) {
      for (const selectedEventOffer of selectedEventOffers) {
        if (compareOffers(offerForEventType, selectedEventOffer)) {
          isChecked = `checked`;
        }
      }
    }

    const {type, title, price} = offerForEventType;

    return (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" data-offer-type=${type} type="checkbox" name="event-offer-${type}" value="${type}" ${isChecked}>
        <label class="event__offer-label" for="event-offer-${type}-1">
          <span class="event__offer-title">${title}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${price}</span>
        </label>
      </div>`
    );
  }).join(`\n`);
};

const createOffersSectionMarkup = (allOffersForEventType, selectedEventOffers) => {
  const eventOffersMarkup = createAvailableOffersMarkup(allOffersForEventType, selectedEventOffers);
  return (
    `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${eventOffersMarkup}
        </div>
      </section>`
  );
};

const createDescriptionMarkup = (availableDescription) => {
  return (
    `<p class="event__destination-description">${availableDescription}</p>`
  );
};

const createPhotosMarkup = (photos) => {
  return photos.map((photo) => {
    return (
      `<img class="event__photo" src="${photo}" alt="Event photo">`
    );
  }).join(`\n`);
};

const createDestinationInfoMarkup = (destinationInformation) => {
  const {description, photos} = destinationInformation;
  const descriptionMarkup = !description ? `` : createDescriptionMarkup(description);
  const photosMarkup = photos.length > 0 ? createPhotosMarkup(photos) : ``;

  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${descriptionMarkup}
      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${photosMarkup}
        </div>
      </div>
    </section>`
  );
};

const createDestinationOptionsMarkup = () => {
  return destinations.map((destination) => {
    return (
      `<option value="${destination}"></option>`
    );
  }).join(`\n`);
};

const checkType = (type) => {
  const types = activityTypes.map((it) => it.toLowerCase());
  type = type.toString().toLowerCase();

  return types.includes(type) ? ` in` : ` to`;
};

const createTripEventEditFormTemplate = (event, options = {}) => {
  const {time, price, isFavorite} = event;
  const {type, destination, offers, destinationInfo} = options;

  const transferTypeEventsMarkup = createEventTypesMarkup(transferTypes, type);
  const activityTypeEventsMarkup = createEventTypesMarkup(activityTypes, type);
  const isActionType = checkType(type);

  const {startTime, endTime} = time;
  const availableOffersForEventType = offersByType[type.toLowerCase()];
  const offersSectionMarkup = availableOffersForEventType.length > 0 ? createOffersSectionMarkup(availableOffersForEventType, offers) : ``;
  const destinationInfoSectionMarkup = !destinationInfo ? `` : createDestinationInfoMarkup(destinationInfo);
  const favoriteButton = isFavorite ? `checked` : ``;
  const destinationOptions = createDestinationOptionsMarkup();

  let isDescription = false;
  let isPhotos = false;
  if (destinationInfo) {
    const {description, photos} = destinationInfo;
    isDescription = description !== `` ? true : false;
    isPhotos = false;
    if (photos) {
      isPhotos = photos.length > 0 ? true : false;
    }
  }
  const destinationInfoSectionMarkup = (isDescription || isPhotos) ? createDestinationInfoMarkup(destinationInfo) : ``;
  const destinationOptions = createDestinationOptionsMarkup();

            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${destinationOptions}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">
              From
            </label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">
              To
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTime}">
  return (
    `<form class="event trip-events__item event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>
              ${transferTypeEventsMarkup}
            </fieldset>

            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>
              ${activityTypeEventsMarkup}
            </fieldset>
          </div>
        </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
          </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${capitalize(type)} ${isActionType}
          </label>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>

          <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${favoriteButton}>
          <label class="event__favorite-btn" for="event-favorite-1">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
            </svg>
          </label>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${offersSectionMarkup}
          ${destinationInfoSectionMarkup}
        </section>
      </form>
    </li>`
  );
};

const getOfferByOfferType = (eventType, offerType) => {
  const offers = offersByType[eventType];
  for (const offer of offers) {
    if (offer.type === offerType) {
      return offer;
    }
  }

  return null;
};

const getDestinationInformation = (destinationName) => {
  for (const destinationElement of Destinations) {
    if (destinationElement.name === destinationName) {
      return destinationElement;
    }
  }

  return null;
};

const parseFormData = (formData) => {
  const eventType = formData.get(`event-type`);
  const selectedOffers = [];
  for (const [key, value] of formData.entries()) {
    if (key.startsWith(`event-offer-`)) {
      const offerType = value;
      const offer = getOfferByOfferType(eventType, offerType);
      if (offer) {
        selectedOffers.push(offer);
      }
    }
  }

  const destination = formData.get(`event-destination`);
  const destinationInformation = getDestinationInformation(destination);
  const destinationPhotos = destinationInformation.pictures;

  const photoUrls = [];
  for (let {src} of destinationPhotos) {
    photoUrls.push(src);
  }

  return {
    type: eventType,
    destination,
    offers: selectedOffers,
    destinationInfo: {
      description: destinationInformation.description,
      photos: photoUrls
    },
    time: {
      startTime: moment(formData.get(`event-start-time`), `DD/MM/YY HH:mm`),
      endTime: moment(formData.get(`event-end-time`), `DD/MM/YY HH:mm`)
    },
    price: formData.get(`event-price`)
  };
};

export default class EventEdit extends AbstractSmartComponent {
  constructor(event, mode) {
    super();
    this._event = event;
    this._mode = mode;
    this._copyEventFields(event);
    this._submitHandler = null;
    this._favoriteHandler = null;
    this._closeHandler = null;
    this._deleteButtonClickHandler = null;
    this._flatpickrStartDate = null;
    this._flatpickrEndDate = null;
    this._subscribeOnEvents();
    this._removeFlatpickrStartDate();
    this._removeFlatpickrEndDate();
    this._applyFlatpickrStartDate();
    this._applyFlatpickrEndDate();
  }

  setEventEditFormSubmitHandler(handler) {
    this.getElement().querySelector(`form`).addEventListener(`submit`, handler);

    this._submitHandler = handler;
  }

  setEventFavoriteClickHandler(handler) {
    this.getElement().querySelector(`input[name=event-favorite]`).addEventListener(`click`, handler);

    this._favoriteHandler = handler;
  }

  setDeleteButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, handler);

    this._deleteButtonClickHandler = handler;
  }

  setCloseButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);

    this._closeHandler = handler;
  }

  removeElement() {
    this._removeFlatpickrStartDate();
    this._removeFlatpickrEndDate();
    super.removeElement();
  }

  getData() {
    const form = this.getElement();
    const formData = new FormData(form);
    const event = parseFormData(formData);
    event.id = this._event.id;
    event.isFavorite = this._event.isFavorite;

    return event;
  }

  getTemplate() {
    return createTripEventEditFormTemplate(this._event, {
      type: this._type,
      destination: this._destination,
      destinationInfo: this._destinationInfo,
      offers: this._selectedOffers
    });
  }

  recoveryListeners() {
    this.setEventEditFormSubmitHandler(this._submitHandler);
    this.setEventFavoriteClickHandler(this._favoriteHandler);
    this.setCloseButtonClickHandler(this._closeHandler);
    this._subscribeOnEvents();
  }

  rerender() {
    super.rerender();
    this._applyFlatpickrStartDate();
    this._applyFlatpickrEndDate();
  }

  reset() {
    const event = this._event;
    this._copyEventFields(event);

    this.rerender();
  }

  _copyEventFields(event) {
    this._type = event.type;
    this._destination = event.destination;
    this._destinationInfo = cloneDeep(event.destinationInfo);
    this._selectedOffers = event.offers.slice();
    this._price = event.price;
    this._startTime = event.time.startTime;
    this._endTime = event.time.endTime;
  }

  _removeFlatpickr(datePropertyName) {
    const flatpickrDate = this[datePropertyName];
    if (flatpickrDate) {
      flatpickrDate.destroy();
      this[datePropertyName] = null;
    }
  }

  _removeFlatpickrStartDate() {
    this._removeFlatpickr(`_flatpickrStartDate`);
  }

  _removeFlatpickrEndDate() {
    this._removeFlatpickr(`_flatpickrEndDate`);
  }

  _applyFlatpickr(datePropertyName, element) {
    this._removeFlatpickr(datePropertyName);

    this[datePropertyName] = flatpickr(element, {
      altInput: true,
      allowInput: true,
      enableTime: true,
      altFormat: `d/m/y H:i`,
      dateFormat: `d/m/y H:i`
    });
  }

  _applyFlatpickrStartDate() {
    const startDateElement = this.getElement().querySelector(`input[name=event-start-time]`);
    this._applyFlatpickr(`_flatpickrStartDate`, startDateElement);
  }

  _applyFlatpickrEndDate() {
    const endDateElement = this.getElement().querySelector(`input[name=event-end-time]`);
    this._applyFlatpickr(`_flatpickrEndDate`, endDateElement);
  }

  _subscribeOnTypeChange() {
    this.getElement().querySelector(`.event__type-list`).addEventListener(`change`, (evt) => {
      this._type = evt.target.value;

      this.rerender();
    });
  }

  _subscribeOnPriceChange() {
    this.getElement().querySelector(`input[name=event-price]`).addEventListener(`change`, (evt) => {
      this._price = evt.target.value;
    });
  }

  _subscribeOnOffersChange() {
    this.getElement().querySelector(`.event__available-offers`).addEventListener(`change`, (evt) => {
      if (evt.target.tagName !== `INPUT`) {
        return;
      }

      const availableOffers = offersByType[this._type.toLowerCase()];
      const typeOfClickedOffer = evt.target.dataset.offerType;

      if (evt.target.checked) {
        const selectedOffer = availableOffers.filter((availableOffer) => availableOffer.type === typeOfClickedOffer);
        this._selectedOffers = this._selectedOffers.concat(selectedOffer);
      } else {
        this._selectedOffers = this._selectedOffers.filter((selectedOffer) => selectedOffer.type !== typeOfClickedOffer);
      }

      this.rerender();
    });
  }

  _subscribeOnDestinationChange() {
    this.getElement().querySelector(`.event__input--destination`).addEventListener(`change`, (evt) => {
      if (evt.target.value.toLowerCase() !== this._destination.toLowerCase()) {
        this._destination = evt.target.value;
        // Временно
        const newDescription = getRandomItemsfromArray(destinationDescriptions, MIN_DESCRIPTION_PHRASES, MAX_DESCRIPTION_PHRASES).join(` `);
        const newPhotos = getRandomPhotos(MIN_PHOTOS, MAX_PHOTOS);

        this._destinationInfo.description = newDescription;
        this._destinationInfo.photos = newPhotos;
      }

      this.rerender();
    });
  }

  _subscribeOnStartTimeChange() {
    this.getElement().querySelector(`input[name=event-start-time]`).addEventListener(`change`, (evt) => {
      this._startTime = evt.target.value;
    });
  }

  _subscribeOnEndTimeChange() {
    this.getElement().querySelector(`input[name=event-end-time]`).addEventListener(`change`, (evt) => {
      this._endTime = evt.target.value;
    });
  }

  _subscribeOnEvents() {
    this._subscribeOnTypeChange();
    this._subscribeOnPriceChange();
    this._subscribeOnOffersChange();
    this._subscribeOnDestinationChange();
    this._subscribeOnStartTimeChange();
    this._subscribeOnEndTimeChange();
  }
}
