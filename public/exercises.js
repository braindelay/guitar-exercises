const preparePage = () => {
  prepareTunings();
  prepareExerciseButtons();
};

const prepareTunings = () => {
  Object.keys(fretboard.Tunings.guitar6).forEach((t) => {
    $("#tuning").append($(`<option value="${t}">${t}</option>`));
  });
};
const prepareExerciseButtons = () => {
  $("#selectedTone").on("change", () => loadNextExercise(true));
  $("#selectedScale").on("change", () => loadNextExercise(true));
  $("#selectedExercise").on("change", () => loadNextExercise(true));
};

const clearLastExercise = () => {
  $("#tone").empty();
  $("#updatedTone").empty();
  $("#scale").empty();
  $("#exercise").empty();
  $("#notes").empty();
  $(".fb-container").empty();
  $("#description").empty();
  $(".fretboard").remove();
  $("#chords").empty();

  $("#manualTone").val(null);
  $("#manualScale").val(null);
  $("#manualExercise").val(null);
};

const toggleLoading = (isLoading) => {
  $("#nextExercise").attr("disabled", isLoading);
  $(".show-when-loading").attr("hidden", !isLoading);
  $(".hide-when-loading").attr("hidden", isLoading);
};

const loadNextExercise = (useSelection) => {
  toggleLoading(true);
  $('.collapseOnNextExercise').collapse('hide')
  
  clearLastExercise();

  if (useSelection) {
    $("#manualTone").val($("#selectedTone option:selected").val());
    $("#manualScale").val($("#selectedScale option:selected").val());
    $("#manualExercise").val($("#selectedExercise option:selected").val());
  }

  const practicePath = $("#practice").serialize();
  $.get(`exercise?${practicePath}`)
    .then((exercise) => {
      // aren't timing issues fun
      clearLastExercise();
      const scale_name = `${exercise.tone} ${exercise.scale.name}`;
      const scale_note_names = exercise.scaleValues
        ? exercise.scaleValues
        : fretboard.asNotes(scale_name).toUpperCase().split(" ");

      const tuning = $("#tuning").val() ? $("#tuning").val() : "standard";

      updateExerciseText(exercise, tuning);
      renderNotesAndChordBases(exercise, scale_note_names);
      renderFretboard(scale_name, tuning);
      renderStaff(scale_note_names);

      toggleLoading(false);
    })
    .fail((error) => {
      console.log(`Failed: ${JSON.stringify(error)}`);
    });
};

const updateExerciseText = (exercise, tuning) => {
  $("#exerciseDescription").html(exercise.exercise.description);
  $("#fifthBelow").html(exercise.fifthBelow);
  $("#fifthTone").html(exercise.tone);
  $("#fifthAbove").html(exercise.fifthAbove);
  $("#tuningDescription").html(tuning);

  $("#selectedTone").val(exercise.tone);
  $("#selectedScale").val(exercise.scale.name);
  $("#selectedExercise").val(exercise.exercise.name);

  $("#headerTone").html(exercise.tone);
  $("#headerScale").html(exercise.scale.label);
  $("#headerExercise").html(exercise.exercise.label);
};


const renderNotesAndChordBases = (exercise, scale_note_names) => {
  const colours = [
    "red", "green", "blue", "black", "purple", "grey", "orange",
    "maroon", "fuschia", "lime", "teal", "aqua"
  ];

  $("#notes").append($("<b>").text(`Notes: `));
  scale_note_names.forEach((tone, i) => {
    $("#notes").append(
      $(`<span style='color:${colours[i]}'>`).text(`${tone} `)
    );
  });

  if (exercise.chordBases) {
    $("#chords").append($("<b>").text(`Diatonic chords: `));
    scale_note_names.forEach((tone, i) => {
      $("#chords").append(
        $(`<span style='color:${colours[i]}'>`).text(
          `${tone}${exercise.chordBases[i]} `
        )
      );
    });
  }
};

const renderFretboard = (scale_name, tuning) => {
  $("#fb-container").attr("data-notes", scale_name);
  fretboard.Fretboard.drawAll("#fb-container", {
    leftHanded: $("#leftHanded").is(":checked"),
    fretWidth: 30,
    fretHeight: 20,
    showTitle: true,
    tuning: fretboard.Tunings.guitar6[tuning],
  });
};

const renderStaff = (scale_note_names) => {
  const flipNotes = {
    A: 'CDEFG',
    B: 'CDEFGA',
    C: 'CDEFGAB',
    D: 'C',
    E: 'CD',
    F: 'CDE',
    G: 'CDEF'
   }

  const firstNote = scale_note_names[0].charAt(0)
  const staffNotes = scale_note_names.map((note, index) => {
    const staffNote = note.charAt(0);
    let appliedStaffNote = 
      flipNotes[firstNote].includes(staffNote) 
      ? staffNote.toLowerCase()
      : staffNote

    let accidental = "";
    if (note.endsWith("bb")) {
      accidental = "__";
    } else if (note.endsWith("b")) {
      accidental = "_";
    } else if (note.endsWith("##")) {
      accidental = "^^";
    } else if (note.endsWith("#")) {
      accidental = "^";
    }
    return `${accidental}${appliedStaffNote}`;
  });

  var abcString = `    
  L:1/4
  | ${staffNotes.join(" ")} |
  `
  const visualOptions = {};
  ABCJS.renderAbc("staff", abcString, visualOptions);
};
