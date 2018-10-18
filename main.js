var lines = [
    "IT'S k A j QUARTER",
    "TEN HALF TWENTY",
    "FIVE l MINUTES p",
    "TO PAST v ELEVEN",
    "NINE FOUR EIGHT",
    "TWO FIVE TWELVE",
    "SEVEN SIX THREE",
    "ONE TEN r O'CLOCK"
];

$(".face").append("<div class='background'><div class='letters'></div></div>");

lines.forEach(function(line, lineNo) {
    $(".letters").append("<div class='line line-" + lineNo + "'></div>");

    line.split("").forEach(function(char) {
        if (char === "'") {
            $(".line-" + lineNo + " p:last-of-type").append("<span class='tick'>" + char.toUpperCase() + "</span>");
        }
        else if (char !== " ") {
            $(".line-" + lineNo).append("<p class='char'>" + char.toUpperCase() + "</p>");
        }
    })
})
