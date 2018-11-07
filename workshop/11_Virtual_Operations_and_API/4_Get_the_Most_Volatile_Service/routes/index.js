const express = require('express');
const router = express.Router();

const DynatraceService = require('../services/DynatraceService');

const dtsvc = new DynatraceService(
  process.env.DT_ENVIRONMENT_ID, 
  process.env.DT_CLUSTER, 
  process.env.DT_API_TOKEN);

/* GET home page. */
router.get('/', async (req, res, next) => {

  // Get all events
  let eventList = await dtsvc.getEvents();

  const entityList = [];
  const entityListArray = [];

  // Create an associative array of entities to avoid duplicates  
  if(eventList.events && eventList.events.length) {
    eventList.events.forEach((event) => {
      if(!entityList[event.entityId]) {
        entityList[event.entityId] = {
          entityId: event.entityId,
          entityName: event.entityName,
          events: [],
        }
      }
      // Push into events array of a given entity
      entityList[event.entityId].events.push(event);
    });
  }

  // Convert associative array into a regular, indexed one
  Object.keys(entityList).forEach(function (key, index) {
    entityListArray.push(this[key]);
  }, entityList);

  // Sort the array by number of events descending
  const entityListArraySorted = entityListArray.sort((a, b) => {
    if(a.events.length < b.events.length) return 1;
    if(a.events.length > b.events.length) return -1;
    return 0;
  });

  // Renders the view with the data provided in `entityList`
  res.render('index', { title: 'Most volatile service', entityList: entityListArraySorted});
});

module.exports = router;