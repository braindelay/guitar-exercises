

const clearLastExercise = () => {
    $('#tone').empty()
    $('#scale').empty()
    $('#exercise').empty()
    $('#notes').empty()
    $('.fb-container').empty()    
}

const loadNextExercise  = () => {
    $.get('exercise?' + $('#practice').serialize())
    .then((exercise) => {
        clearLastExercise()
        $('#tone').text(exercise.tone)
        $('#scale').text(exercise.scale)
        $('#exercise').text(exercise.exercise)
        $('#notes').text(exercise.noteNames.join(' '))
        fretboard.Fretboard.drawAll('.fb-container', {
            'showTitle': true

        })
    })
    .fail((error) => {
        console.log(`Failed: ${JSON.stringify(error)}`)
    })

}
