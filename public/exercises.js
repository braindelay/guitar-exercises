

const clearLastExercise = () => {
    $('#exercise-details').html(`
    <div id = "exercise-loader" class="spinner-border" role="status">
        <span class="sr-only"></span>
    </div>
    `)
    $('#tone').empty()
    $('#scale').empty()
    $('#exercise').empty()
    $('#notes').empty()
    $('.fb-container').empty()   
    $('#description').empty() 
}

const loadNextExercise  = () => {
    clearLastExercise()
    $.get('exercise?' + $('#practice').serialize())
    .then((exercise) => {

        const scale_name  = `${exercise.tone} ${exercise.scale.name}`
        const scale_note_names = fretboard.asNotes(scale_name).toUpperCase()
        
        // workaround for an odd bug
        const tonic = scale_note_names.split(' ').shift()
        if (tonic === '') {
            loadNextExercise()
        }

        $('#exercise-details').html(`
        <div id = "exercise-details">
          <h1>${exercise.tone} ${exercise.scale.label} ${exercise.exercise.label}</h1>   
          <span><i>${exercise.exercise.description}</small></i></span>       
          <p><div id="notes"></div></p>
          <p><div id="chords"></div></p>
          <div  class="fb-container" 
                data-frets="17"  
                data-notes="${scale_name}" 
                data-showTitle="true">
            </div>
        </div>
        `)   

        const colors = ['red','green', 'blue', 'black', 'purple', 'grey', 'orange']
        $('#notes').append($("<b>").text(`Notes: `))
        scale_note_names.split(' ').forEach((tone, i) => {
            $('#notes').append($(`<span style='color:${colors[i]}'>`).text(`${tone} `)) 
        })

        if ( exercise.chordBases) {
            $('#chords').append($("<b>").text(`Diatonic chords: `))
            scale_note_names.split(' ').forEach((tone, i) => {
                $('#chords').append($(`<span style='color:${colors[i]}'>`).text(`${tone}${exercise.chordBases[i]} `)) 
            })
              
        }
        
        fretboard.Fretboard.drawAll('.fb-container', {
            'leftHanded': $('#leftHanded').is(":checked"),
            'fretWidth':30
        })


    })
    .fail((error) => {
        console.log(`Failed: ${JSON.stringify(error)}`)
    })

}
