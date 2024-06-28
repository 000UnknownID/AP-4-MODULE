let clicked = false;
let currentPoster = 1;
let operand = "-";

let random_top_1 = 0;
let random_top_2 = 0;
let random_top_3 = 0;


function getRandomInt(min, max) {
    return Math.floor((Math.random() * max - min) + min);
}

$(".events__poster_img").click(function() {
    $(this).animate({
        opacity: 0,
    }, 200, function() {
        if (currentPoster == 3) {
            currentPoster = 1;
        } else {
            currentPoster++;
        }
        $(this).attr("src", "./assets/poster_events_" + currentPoster + ".png");

        if (window.innerWidth >= 850) {
            let top_1 = Number($(".text-1").css("top").split("px")[0]);
            let top_2 = Number($(".text-2").css("top").split("px")[0]);
            let top_3 = Number($(".text-3").css("top").split("px")[0]);

            if (operand == "-") {
                random_top_1 = getRandomInt(49, 50);
                random_top_2 = getRandomInt(70, 250);
                random_top_3 = getRandomInt(70, 120);
            }

            if (operand == "-") {
                console.log(top_1);
                console.log(top_1 - random_top_1);
                document.documentElement.style.setProperty("--top-text1", top_1 - random_top_1 + "px");
                document.documentElement.style.setProperty("--top-text2", top_2 - random_top_2 + "px");
                document.documentElement.style.setProperty("--top-text3", top_3 - random_top_3 + "px");
                operand = "+";
            } else {
                console.log(top_1 + random_top_1);
                console.log(Number(top_1 + random_top_1) + "px");
                document.documentElement.style.setProperty("--top-text1", Number(top_1 + random_top_1) + "px");
                document.documentElement.style.setProperty("--top-text2", Number(top_2 + random_top_2) + "px");
                document.documentElement.style.setProperty("--top-text3", Number(top_3 + random_top_3) + "px");
                operand = "-";
            }

        }

        $(this).animate({
            opacity: 1,
        }, 500, function() {
            clicked = true;
        });
    });
});

// let random_left_1 = getRandomInt(30, 50);
// let random_left_2 = getRandomInt(30, 50); 
// let random_right_3 = getRandomInt(100, 150);

// let left_1 = $(".text-1").css("left").split("px")[0];
// let left_2 = $(".text-2").css("left").split("px")[0];
// let right_3 = $(".text-3").css("right").split("px")[0];

// document.documentElement.style.setProperty("--left-text1", left_1 - random_left_1 + "px");
// document.documentElement.style.setProperty("--left-text2", left_2 - random_left_2 + "px");
// document.documentElement.style.setProperty("--right-text3", right_3 - random_right_3 + "px");    