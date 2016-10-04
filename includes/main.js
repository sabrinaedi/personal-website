runslide()

function runslide() {
    $("#Intro1").hide()
    $("#Intro2").hide()
    $("#Intro1").fadeIn(1500).delay(3500).fadeOut(1500, function() {
        $("#Intro2").fadeIn(1500).delay(3500).fadeOut(1500, function() {
            runslide()
        })
    })
}