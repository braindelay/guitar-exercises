

const clearLastExercise = () => {
    $('#tone').empty()
    $('#scale').empty()
    $('#exercise').empty()
    $('#notes').empty()
    $('.fb-container').empty()   
    $('#description').empty() 
}

const loadNextExercise  = () => {
    $.get('exercise?' + $('#practice').serialize())
    .then((exercise) => {
        clearLastExercise()
        $('#tone').text(exercise.tone)
        $('#scale').text(exercise.scale.label)
        $('#exercise').text(exercise.exercise.label)
        $('#description').text(exercise.exercise.description)

        const scale_name  = `${exercise.tone} ${exercise.scale.name}`
        const scale_note_names = fretboard.asNotes(scale_name).toUpperCase()
        
        // workaround for an odd bug
        const tonic = scale_note_names.split(' ').shift()
        if (tonic === '') {
            loadNextExercise()
        }

        const colors = ['red','green', 'blue', 'black', 'grey', 'orange']

        $('#notes').append($("<b>").text(`Notes: `))
        scale_note_names.split(' ').forEach((colour, i) => {
            $('#notes').append($(`<span style='color:${colors[i]}'>`).text(`${colour} `)) 
        })

        

        $('.fb-container').attr('data-notes', scale_name)
        fretboard.Fretboard.drawAll('.fb-container', {
            'showTitle': true,
            'leftHanded': $('#leftHanded').is(":checked")
        })


    })
    .fail((error) => {
        console.log(`Failed: ${JSON.stringify(error)}`)
    })

}
