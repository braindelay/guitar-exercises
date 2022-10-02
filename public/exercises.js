

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

        $('.fb-container').attr('data-notes', `${exercise.tone} ${exercise.scale.name}`)
        
        fretboard.Fretboard.drawAll('.fb-container', {
            'showTitle': true
        })

        var notes = []
        const allNotes = $('.fretboard').find('title')

        allNotes.each(i => {
            const current = allNotes[i].firstChild.textContent.replace(/[0-9]/g, '');
            if (!notes.includes(current)) {
                notes.push(current)
            }
        })
        $('#notes').text(`Notes: ${notes.join(" ")}`)


    })
    .fail((error) => {
        console.log(`Failed: ${JSON.stringify(error)}`)
    })

}
