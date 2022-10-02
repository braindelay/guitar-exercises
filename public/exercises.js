

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
        $('#notes').text(`Notes: ${fretboard.asNotes(scale_name).toUpperCase()}`)

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
