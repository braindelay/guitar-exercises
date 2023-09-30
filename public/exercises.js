const clearLastExercise = () => {
  $("#tone").empty();
  $("#scale").empty();
  $("#exercise").empty();
  $("#notes").empty();
  $(".fb-container").empty();
  $("#description").empty();
};

const loadNextExercise = () => {
  clearLastExercise();
  $.get("exercise?" + $("#practice").serialize())
    .then((exercise) => {
      const scale_name = `${exercise.tone} ${exercise.scale.name}`;
      const scale_note_names = 
        exercise.scaleValues ? exercise.scaleValues :  
        fretboard.asNotes(scale_name).toUpperCase().split(" ");

      // workaround for an odd bug
      const tonic = scale_note_names[0];
      if (tonic === "") {
        loadNextExercise();
      }

      const colors = [
        "red",
        "green",
        "blue",
        "black",
        "purple",
        "grey",
        "orange",
      ];

      const tuning = $("#tuning").val() ? $("#tuning").val() : 'standard'

      $('#toneButton').html(`${exercise.tone}`)
      $('#scaleButton').html(`${exercise.scale.label}`)
      $('#exerciseButton').html(`${exercise.exercise.label}`)
      $('#exerciseDescription').html(exercise.exercise.description)
      $('#fifthBelow').html(exercise.fifthBelow)
      $('#fifthTone').html(exercise.tone)
      $('#fifthAbove').html(exercise.fifthAbove)
      $('#tuningDescription').html(tuning)

      $("#notes").append($("<b>").text(`Notes: `));
      scale_note_names.forEach((tone, i) => {
        $("#notes").append(
          $(`<span style='color:${colors[i]}'>`).text(`${tone} `)
        );
      });

      if (exercise.chordBases) {
        $("#chords").empty()
        $("#chords").append($("<b>").text(`Diatonic chords: `));
        scale_note_names.forEach((tone, i) => {
          $("#chords").append(
            $(`<span style='color:${colors[i]}'>`).text(
              `${tone}${exercise.chordBases[i]} `
            )
          );
        });
      }

      $('#fb-container').empty()  
      $('#fb-container').attr('data-notes', scale_name)
      $('.fretboard').remove()

      fretboard.Fretboard.drawAll("#fb-container", {
        leftHanded: $("#leftHanded").is(":checked"),
        fretWidth: 30,
        fretHeight: 20,
        showTitle: true,
        tuning: fretboard.Tunings.guitar6[tuning]
      });
    })
    .fail((error) => {
      console.log(`Failed: ${JSON.stringify(error)}`);
    });
};
