var _ = require('lodash');
var id = require('node-uuid').v4;
var lorem = require('lorem-ipsum');
var moment = require('moment');

var rand = function(start, end, step) {
  step = step || 1;

  // Floating point precision crap.
  var decimalPlaces = (step.toString().split('.')[1] || []).length;

  return parseFloat(_.sample(_.range(start || 0, end || 100, step || 1)).toFixed(decimalPlaces));
};

var periods = ['first-half', 'second-half', 'full-time'];
var gradingActions = ['grade', 'push', 'partial'];

//GET events
var events = {
  "events": [
    {
      "eventOutCome": {
        "periodScores": [
          {
            "eventPeriodType": "FIRST_HALF",
            "eventPeriod": "FIRST_HALF"
          },
          {
            "eventPeriodType": "FULL_EVENT",
            "eventPeriod": "FULL_EVENT"
          }
        ]
      },
      "name": "FK Austria Wien v Spartak Trnava",
      "id": 16461
    },
    {
      "eventOutCome": {
        "periodScores": [
          {
            "eventPeriodType": "FULL_EVENT",
            "eventPeriod": "FULL_EVENT"
          }
        ]
      },
      "name": "Lille OSC v FK Qäbälä",
      "id": 16416
    }
  ],
  "name": "UEFA Europa League",
  "sportName": "Soccer",
  "country": "Europe",
  "navigationTreNodeId": 224,
  "metaTagId": 239
};

//GET events
var getEvents = {
  "offset": 0,
  "per-page": 20,
  "total": 3,
  content: _.times(3, function(n) {
    return {
      'id': id(),
      "event-name": 'game ' + n,
      'sport': 'soccer',
      'competition': 'La Liga',
      'status': 'closed'
    };
  })
};

var selectGradingEvent = {
  "event-name": 'game ' + 1,
  'id': id(),
  "period": periods[1],
  'team-a': 2 + 1,
  'team-b': 0,
  'grading-action': gradingActions[1],
  'test': lorem({count: 2, units: 'sentences'}),
};

var addGrading = {
  "eventOutCome": {
    "periodScores": [
      {
        "eventPeriodName": "first-half",
        "homeScore": "",
        "awayScore": "",
        "grading-action": ""
      },{
        "eventPeriodName": "second-half",
        "homeScore": "",
        "awayScore": "",
        "grading-action": ""
      },{
        "eventPeriodName": "full-event",
        "homeScore": "",
        "awayScore": "",
        "grading-action": ""
      }
    ]
  },
  "name": "Joinville EC vs Goiás EC",
  "id": 19911
};

module.exports = {
  events: events,
  getEvents: getEvents,
  addGrading: addGrading,
  selectGradingEvent: selectGradingEvent
};