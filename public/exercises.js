
const preparePage= () =>{
  prepareTunings()
  prepareExerciseButtons()
}

const prepareTunings=() => {
  Object.keys(fretboard.Tunings.guitar6).forEach( (t) => {
    $('#tuning').append($(`<option value="${t}">${t}</option>`))
 })
}
const prepareExerciseButtons = () => {
  $('#selectedTone').on('change', () =>loadNextExercise(true) )
  $('#selectedScale').on('change', () =>loadNextExercise(true)) 
  $('#selectedExercise').on('change', () =>loadNextExercise(true))
}

const clearLastExercise = () => {
  $("#tone").empty();
  $('#updatedTone').empty();
  $("#scale").empty();
  $("#exercise").empty();
  $("#notes").empty();
  $(".fb-container").empty();
  $("#description").empty();

  $('#manualTone').val(null)
  $('#manualScale').val(null)
  $('#manualExercise').val(null)

};

const loadNextExercise = (useSelection) => {
  clearLastExercise();

  if (useSelection) {

    $('#manualTone').val($('#selectedTone option:selected').val())
    $('#manualScale').val($('#selectedScale option:selected').val())
    $('#manualExercise').val($('#selectedExercise option:selected').val())
  }
  

  const practicePath =  $("#practice").serialize()
  $.get(`exercise?${practicePath}`)
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


      $('#exerciseDescription').html(exercise.exercise.description)
      $('#fifthBelow').html(exercise.fifthBelow)
      $('#fifthTone').html(exercise.tone)
      $('#fifthAbove').html(exercise.fifthAbove)
      $('#tuningDescription').html(tuning)

      $('#selectedTone').val(exercise.tone)
      $('#selectedScale').val(exercise.scale.name)
      $('#selectedExercise').val(exercise.exercise.name)

      $('#headerTone').html(exercise.tone)
      $('#headerScale').html(exercise.scale.label)
      $('#headerExercise').html(exercise.exercise.label)


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
