class Merch {
    constructor(description, price) {
        this.description = description;
        this.price = price;
    }
}

merch_items = {
    "1": new Merch("С этим гелем для стирки вы сможете <br>" +
        "очистить вашу одежду так, что бы <br>" +
        "она влияла на защиту ваших <br>" +
        "нейронов. Они станут загрязнятся <br>" +
        "намного медленнее", "700 руб."),
    "2": new Merch("Наши влажные салфетки<br>" +
        "созданы для ухода и гигиены,<br>" +
        "предназначенное для очищения<br>" +
        "кожи и поверхностей", "300 руб."),
    "3": new Merch("Чистящее средство освежай создано<br>" +
        "для легкой фазы очистки нейронов<br>" +
        "от повседневного стресса", "900 руб."),
    "4": new Merch("Это средство ускорит активность<br>" +
        "ваших нейронов на 3 часа с момента<br>" +
        "нанесения спрея", "950 руб."),
    "5": new Merch("Календарь помогает следить за<br>" +
        "важными датами, событиями<br>" +
        "и задачами, делая вашу жизнь более<br>" +
        "упорядоченной и продуктивной", "1400 руб."),
}



let isClicked = false;
let $this = null;

function removeExcept(number) {
    $(".merch__column").each(function(index) {
        if (index != number - 1) {
            $(this).remove();
        }
    });
}

$(document).ready(function() {

    $(".merch__add_btn").click(function() {
        let count = Number($(".merch-price__counter").text());
        $(".merch-price__counter").text(count + 1);
        if (count == 0) {
            $(".merch-price__counter").css("opacity", "1");
        }
    })

    $('.merch__product').click(function() {
        $this = $(this);
        if (isClicked) {
            location.reload();
        }
        isClicked = true;
        // Hide all products except the clicked one
        $('.merch__product').not($this).addClass('hide').remove();

        let item = merch_items[$this.attr("class").split(" ")[1].split("_")[1]];

        document.getElementById("merch-description").innerHTML = item.description;
        document.getElementById("merch-price").innerHTML = item.price;
        // Move the clicked product to the center

        $this.parent().addClass('move-to-center');
        $this.addClass("rotate");
        $this.addClass("scale-up");
        $this.parent().parent().css("gap", "0px");
        $('.merch__content_glb').fadeIn(500);


        removeExcept($this.parent().attr("class").split(" ")[1].split("merch__column")[1]);

        if (window.innerWidth <= 480) {
            $this.css("width", "80vw");
            $('.merch__content_glb').css("padding-left", "20px");
            $('.merch__content_glb').css("padding-right", "20px");
        }

        if (window.innerWidth <= 1350) {
            $this.parent().parent().css("gap", "30px");
            return;
        }

        setTimeout(function() {
            $this.parent().addClass('move-to-left-200');
        }, 200); // Match the transition duration

        setTimeout(() => {
            $('.merch__content_glb').addClass('move-to-left-100');
        }, 400);

    });


});

// 1920 - 1919
let valueBeforew = window.innerWidth;

function onresize_merch(event) {
    if ($this == null) return;
    if (valueBeforew - window.innerWidth > 0) {

        if (window.innerWidth <= 1350) {
            $this.parent().parent().css("gap", "30px");
            $this.parent().removeClass('move-to-left-200');
            $('.merch__content_glb').removeClass('move-to-left-100');
        }

        if (window.innerWidth <= 480) {
            $this.css("width", "80vw");
            $('.merch__content_glb').css("padding-left", "20px");
            $('.merch__content_glb').css("padding-right", "20px");
        }
    } else {
        // increase



        if (window.innerWidth >= 1350) {
            $this.parent().parent().css("gap", "0px");
            $this.parent().addClass('move-to-left-200');
            $('.merch__content_glb').addClass('move-to-left-100');
        }

        if (window.innerWidth > 480) {
            $this.css("width", "450px");
            $('.merch__content_glb').css("padding-left", "0px");
            $('.merch__content_glb').css("padding-right", "0px");
        }
    }

    valueBeforew = window.innerWidth;
}

window.onresize = onresize_merch;