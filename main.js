var lines = [
    "IT'S k a j quarter",
    "ten half TWENTY",
    "FIVE l MINUTES p",
    "to PAST v eleven",
    "nine four eight",
    "two five TWELVE",
    "seven six three",
    "one ten r o'clock"
];

$(".face").append("<div class='background'><div class='letters'></div></div>");

lines.forEach(function(line, lineNo) {
    $(".letters").append("<div class='line line-" + lineNo + "'></div>");

    line.split("").forEach(function(char) {
        console.log(char);
        console.log(char.toUpperCase());

        if (char === "'") {
            $(".line-" + lineNo + " p:last-of-type").append("<span class='tick'>" + char.toUpperCase() + "</span>");
        }
        else if (char === " ") {

        }
        else if (char.toUpperCase() === char) {
            $(".line-" + lineNo).append("<p class='char highlight'>" + char.toUpperCase() + "</p>");
        }
        else if (char.toLowerCase() === char) {
            $(".line-" + lineNo).append("<p class='char'>" + char.toUpperCase() + "</p>");
        }
    })
})
