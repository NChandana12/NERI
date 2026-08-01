export const RULES = {
  "Building Fire": {
    source: "NFPA & FEMA",

    principles: [
      "Prioritize human life over property.",
      "Evacuate immediately if safe to do so.",
      "Never use elevators during a fire.",
      "Call emergency services as soon as possible.",
      "Stay low if smoke is present.",
      "Do not re-enter a burning building."
    ],

    actions: {
      EVACUATE: {
        priority: 100,
        rules: [2]
      },
      CALL_911: {
        priority: 80,
        rules: [4]
      },
      STAY_LOW: {
        priority: 60,
        rules: [5]
      },
      USE_ELEVATOR: {
        priority: 0,
        rules: [3]
      },
      REENTER_BUILDING: {
        priority: 0,
        rules: [6]
      },
      WAIT: {
        priority: 20,
        rules: []
      }
    }
  },

  Earthquake: {
    source: "FEMA",

    principles: [
      "Drop, Cover, and Hold On.",
      "Stay indoors until shaking stops.",
      "Avoid windows and heavy furniture.",
      "Do not use elevators.",
      "Check for injuries after shaking ends.",
      "Be prepared for aftershocks."
    ],

    actions: {
      DROP_COVER_HOLD: {
        priority: 100,
        rules: [1]
      },
      STAY_INDOORS: {
        priority: 80,
        rules: [2]
      },
      AVOID_WINDOWS: {
        priority: 60,
        rules: [3]
      },
      CHECK_INJURIES: {
        priority: 40,
        rules: [5]
      },
      USE_ELEVATOR: {
        priority: 0,
        rules: [4]
      },
      RUN_OUTSIDE: {
        priority: 20,
        rules: []
      }
    }
  },

  "Medical Emergency": {
    source: "American Red Cross",

    principles: [
      "Check scene safety first.",
      "Call emergency services.",
      "Assess responsiveness.",
      "Provide first aid within your training.",
      "Do not move seriously injured victims unless necessary."
    ],

    actions: {
      CHECK_SCENE: {
        priority: 100,
        rules: [1]
      },
      CALL_911: {
        priority: 80,
        rules: [2]
      },
      ASSESS_RESPONSIVENESS: {
        priority: 60,
        rules: [3]
      },
      PROVIDE_FIRST_AID: {
        priority: 40,
        rules: [4]
      },
      MOVE_VICTIM: {
        priority: 0,
        rules: [5]
      },
      IGNORE_VICTIM: {
        priority: 20,
        rules: []
      }
    }
  },

  "Chemical Spill": {
    source: "OSHA",

    principles: [
      "Avoid direct exposure.",
      "Isolate the contaminated area.",
      "Wear appropriate PPE.",
      "Notify emergency responders.",
      "Do not attempt cleanup without training."
    ],

    actions: {
      AVOID_EXPOSURE: {
        priority: 100,
        rules: [1]
      },
      ISOLATE_AREA: {
        priority: 80,
        rules: [2]
      },
      WEAR_PPE: {
        priority: 60,
        rules: [3]
      },
      CALL_HAZMAT: {
        priority: 40,
        rules: [4]
      },
      CLEAN_SPILL: {
        priority: 0,
        rules: [5]
      },
      IGNORE_SPILL: {
        priority: 20,
        rules: []
      }
    }
  }
};