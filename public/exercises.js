const clearLastExercise = () => {
    $("#exercise-details").html(`
      <div id = "exercise-loader" class="spinner-border" role="status">
          <span class="sr-only"></span>
      </div>
      `);
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
  
        $("#exercise-details").html(`
          <div id="exercise-details" >
              <div class = "row">
                  <h1>${exercise.tone} ${exercise.scale.label} ${exercise.exercise.label}</h1>   
                  <span><i>${exercise.exercise.description}</small></i></span>  
              </div>
              <div class = "row">
                  <div class = "col">
                      <div class = "row">
                          <div class = "col">
                              <p><div id="notes"></div></p>
                              <p><b>Fifths: </b>
                              <span style='color:${colors[3]}'>${exercise.fifthBelow}</span>
                              &#8592;
                              <span style='color:${colors[0]}'>${exercise.tone}</span> 
                              &#8592;
                              <span style='color:${colors[4]}'>${exercise.fifthAbove}</span> 
                              </p>
                              <p><div id="chords"></div></p>
                          </div>
                      </div>
                      <div class = "row">
                        <div class = "col"><b>Tuning:</b> ${$("#tuning").val()}</div>
                      </div>
                      <div class = "row">                          
                          <div class = "col" id = "fb-container" 
                                  data-frets="23"  
                                  data-notes="${scale_name}" 
                                  data-showTitle="true">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `);
  
        $("#notes").append($("<b>").text(`Notes: `));
        scale_note_names.forEach((tone, i) => {
          $("#notes").append(
            $(`<span style='color:${colors[i]}'>`).text(`${tone} `)
          );
        });
  
        if (exercise.chordBases) {
          $("#chords").append($("<b>").text(`Diatonic chords: `));
          scale_note_names.forEach((tone, i) => {
            $("#chords").append(
              $(`<span style='color:${colors[i]}'>`).text(
                `${tone}${exercise.chordBases[i]} `
              )
            );
          });
        }
  
        console.log($("#tuning").val())
        console.log($("#tuning").val())
        fretboard.Fretboard.drawAll("#fb-container", {
          leftHanded: $("#leftHanded").is(":checked"),
          fretWidth: 30,
          fretHeight: 20,
          showTitle: true,
          tuning: fretboard.Tunings.guitar6[$("#tuning").val()]
        });
      })
      .fail((error) => {
        console.log(`Failed: ${JSON.stringify(error)}`);
      });
  };
  