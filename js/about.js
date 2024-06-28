class Review {
    constructor(img, name, description) {
        this.img = img;
        this.name = name;
        this.description = description;
    }
}

let reviews = [
    new Review("./assets/reviews/1.png", "Валентин 30 лет",
        "Мне действительно помог <br>" +
        "мозгоплеск, теперь я могу <br>" +
        "дальше хейтить все кроме<br>" +
        "яблочной техники, спасибо"),
    new Review("./assets/reviews/2.png", "Сергей 26 лет",
        "Ох уж эта работа, наконец<br>" +
        "отдохнул от нее, хотел бы<br>" +
        "инвестировать суда"),
    new Review("./assets/reviews/3.png", "Это можешь быть ты",
        false),
]

let current = 0;

function switch_review(review) {
    let img = document.querySelector(".review__img");
    let name = document.querySelector(".review__name");
    let text = document.querySelector(".review__text");

    img.src = review.img;
    name.innerHTML = review.name;
    if (review.description == false) {
        document.querySelector(".send__review").style.display = "flex";
        text.innerHTML = "";
    } else if (review.description) {
        document.querySelector(".send__review").style.display = "none";
        text.innerHTML = review.description;
    } else {
        text.innerHTML = review.description;
    }

}


$(".arrow-left").click(function() {
    if (current == 0) return;
    let review = reviews[current - 1];

    switch_review(review);

    current--;
});

$(".arrow-right").click(function() {
    if (current == 3) return;
    let review = reviews[current + 1];

    switch_review(review);

    current++;
});

$(".review__send").click(() => location.reload());