  /**
   * This is the main Node.js server script for your project
   * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
   */

  const path = require("path")

  // Require the fastify framework and instantiate it
  const fastify = require("fastify")({
    // Set this to true for detailed logging:
    logger: false,
  });

  // ADD FAVORITES ARRAY VARIABLE FROM TODO HERE

  // Setup our static files
  fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "public"),
    prefix: "/", // optional: default '/'
  });

  // Formbody lets us parse incoming forms
  fastify.register(require("@fastify/formbody"));

  // View is a templating manager for fastify
  fastify.register(require("@fastify/view"), {
    engine: {
      handlebars: require("handlebars"),
    },
  });

  // Load and parse SEO data
  const seo = require("./src/seo.json");
  if (seo.url === "glitch-default") {
    seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
  }

  /**
   * Our home page route
   *
   * Returns src/pages/index.hbs with data built into it
   */
  fastify.get("/", function (request, reply) {
    // params is an object we'll pass to our handlebars template
    const config = require("./src/exercise-config.json");

    // Add the color properties to the params object
    const params = {
      scales: config.scales,
      exercises: config.exercises,
      seo: seo,
      //tunings: Object.keys(fretboard.Tunings.guitar6)
    };

    // The Handlebars code will be able to access the parameter values and build them into the page
    return reply.view("/src/pages/index.hbs", params);
  });

  fastify.get("/exercise", function (request, reply) {
    const plan = derive_plan(request);
    const exercise = derive_exercise(plan);
    return reply.send(exercise);
  });

  // Run the server and report out to the logs
  fastify.listen(
    { port: process.env.PORT, host: "0.0.0.0" },
    function (err, address) {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
      console.log(`Your app is listening on ${address}`);
      fastify.log.info(`server listening on ${address}`);
    }
  );

  const derive_plan = (request) => {
    const plan = {
      scales: [],
      exercises: [],
    };

    Object.keys(request.query).forEach(function (key) {
      if (key.startsWith("scale_") && request.query[key] == "on") {
        plan.scales.push(key.substring(key.indexOf("_") + 1));
      }

      if (key.startsWith("exercise_") && request.query[key] == "on") {
        plan.exercises.push(key.substring(key.indexOf("_") + 1));
      }
    });

    return plan;
  };

  const musicomatic = require("musicomatic");
  const derive_exercise = (plan) => {
    const config = require("./src/exercise-config.json");

    const selected_scale =
      plan.scales[Math.floor(Math.random() * plan.scales.length)];
    const selected_exercise =
      plan.exercises[Math.floor(Math.random() * plan.exercises.length)];

    let modeName = null;
    switch (selected_scale) {
      case "major":
        modeName = "Ionian";
        break;
      default:
        modeName = musicomatic.MODE_NAMES.find(
          (c) => c.toLowerCase() == selected_scale.toLowerCase()
        );
    }
    let chordBases = null;
    let chordNumerals = null;

    const tone = config.tones[Math.floor(Math.random() * config.tones.length)];

    let mode;
    let scaleValues = null
    if (modeName) {
      mode = musicomatic.mode(modeName);
      chordBases = mode.chordBases;
      chordNumerals = mode.chordNumerals;
      scaleValues = mode.keyByTonic(tone).notes
    }

    const majorMode = musicomatic.mode("Ionian").keyByTonic(tone);
    const fifthAbove = majorMode.notesByDegree["5"];
    const fifthBelow = majorMode.notesByDegree["4"];

    const exercise = {
      tone: tone,
      scale: config.scales.find((c) => c.name === selected_scale),
      exercise: config.exercises.find((c) => c.name === selected_exercise),
      chordBases: chordBases,
      fifthAbove: fifthAbove,
      fifthBelow: fifthBelow,
      chordNumerals: chordNumerals,
      modeName: modeName,
      scaleValues:scaleValues,
    };

    return exercise;
  }