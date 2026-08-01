const scenarios = [
  {
    id: 1,
    title: "Building Fire",
    question:
      "A fire has started in the office kitchen. What should you do first?",

    options: [
      "Pull the nearest fire alarm",
      "Use the elevator",
      "Ignore the smoke",
      "Finish your work",
    ],

    answer: 0,

    feedback:
      "Excellent decision. Activating the fire alarm immediately alerts everyone and starts evacuation procedures.",

    points: 20,
  },

  {
    id: 2,
    title: "Smoke Filled Corridor",

    question:
      "Heavy smoke is filling the hallway while you evacuate.",

    options: [
      "Run as fast as possible",
      "Stay low and move toward the nearest exit",
      "Open every door",
      "Wait for someone else",
    ],

    answer: 1,

    feedback:
      "Correct. Staying low reduces smoke inhalation and improves visibility.",

    points: 20,
  },

  {
    id: 3,
    title: "Medical Emergency",

    question:
      "A colleague suddenly collapses during evacuation.",

    options: [
      "Leave immediately",
      "Call emergency services and provide first aid if trained",
      "Record the incident",
      "Move the person unnecessarily",
    ],

    answer: 1,

    feedback:
      "Correct. Contact emergency services immediately and assist only if you are trained to do so.",

    points: 20,
  },

  {
    id: 4,
    title: "Blocked Exit",

    question:
      "Your nearest emergency exit is blocked by debris.",

    options: [
      "Push through the debris",
      "Use another marked emergency exit",
      "Return to your desk",
      "Break a random window",
    ],

    answer: 1,

    feedback:
      "Correct. Always follow designated evacuation routes and use an alternative emergency exit.",

    points: 20,
  },

  {
    id: 5,
    title: "Assembly Point",

    question:
      "Everyone has safely evacuated the building. What should you do next?",

    options: [
      "Go back inside",
      "Wait at the designated assembly point",
      "Drive home immediately",
      "Remove the safety barriers",
    ],

    answer: 1,

    feedback:
      "Correct. Stay at the assembly point until emergency responders provide further instructions.",

    points: 20,
  },

  {
    id: 6,
    title: "Electrical Hazard",

    question:
      "You notice exposed electrical wires after a flood.",

    options: [
      "Touch the wires to check them",
      "Report the hazard and keep everyone away",
      "Pour water on the wires",
      "Ignore the hazard",
    ],

    answer: 1,

    feedback:
      "Correct. Exposed electrical equipment can remain live and must be reported immediately.",

    points: 20,
  },

  {
    id: 7,
    title: "Earthquake",

    question:
      "An earthquake begins while you're inside a building.",

    options: [
      "Run outside immediately",
      "Drop, Cover and Hold On",
      "Stand near the windows",
      "Use the elevator",
    ],

    answer: 1,

    feedback:
      "Excellent. 'Drop, Cover and Hold On' is the recommended response during an earthquake.",

    points: 20,
  },

  {
    id: 8,
    title: "Chemical Spill",

    question:
      "A hazardous chemical container has leaked inside the laboratory.",

    options: [
      "Clean it without protection",
      "Evacuate the area and report the spill",
      "Ignore it",
      "Turn on every fan",
    ],

    answer: 1,

    feedback:
      "Correct. Evacuating and reporting the spill minimizes exposure and ensures trained responders can handle it safely.",

    points: 20,
  },
];

export default scenarios;