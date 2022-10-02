const loadNextExercise  = () =>{
    $.get('exercise?' + $('#practice').serialize())
    .then((exercise) => {
        $('#tone').text(exercise.tone)
        $('#scale').text(exercise.scale)
        $('#exercise').text(exercise.exercise)

    })

}
