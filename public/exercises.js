

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
        $('#scale').text(exercise.scale.label)
        $('#exercise').text(exercise.exercise)

        $('.fb-container').attr('data-notes', `${exercise.tone} ${exercise.scale.name}`)
        
        fretboard.Fretboard.drawAll('.fb-container', {
            'showTitle': true
        })
    })
    .fail((error) => {
        console.log(`Failed: ${JSON.stringify(error)}`)
    })

}
