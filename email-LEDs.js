/*
  This program is hereby placed into the public domain by its authors.
*/

jQuery(document).ready(($) => {

    var slider = document.getElementById("myRange");
    var output = document.getElementById("slider-value");


    function show_on_leds(n) {
        $("#leds-simulation-container .leds-photo").css("display", "none");
        $(`#leds-value-${n}`).css("display", "block");
    }

    const async_load_image = (url =>
        new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = (() => resolve(img));
            img.src = url;
        }));

    const async_create_para = (async (n, url) => {
        let img = await async_load_image(url);
        let p = document.createElement("p");
        p.setAttribute('class', 'leds-photo');
        p.setAttribute('id', `leds-value-${n}`);
        p.appendChild(img);
        return p;
    });

    let LED_para_promises = [];
    for (let n = 0; n != 8; ++n) {
        LED_para_promises.push(
            async_create_para(n,
                              `/blog/wp-content/uploads/2020/02/LEDs-showing-${n}.jpg`));
    }

    let old_number = 0;
    let frames = 1;
    function update_display() {
        let new_number = slider.value;

        output.innerHTML = slider.value;

        if (new_number < 8) {
            show_on_leds(new_number);
        } else {
            if (old_number < 8) {
                frames = 1;
                show_on_leds(0);
            }

            frames += 1;
            if (frames == 61) {
                frames = 1;
                show_on_leds(0);
            } else if (frames == 31) {
                show_on_leds(7);
            }
        }

        old_number = new_number;
        window.requestAnimationFrame(update_display);
    }

    Promise.all(LED_para_promises).then(LED_paras => {
        const container = $("#leds-simulation-container")[0];
        LED_paras.forEach(p => container.appendChild(p));

        $("#leds-simulation-placeholder").hide();
        show_on_leds(0);

        window.requestAnimationFrame(update_display);
    });
});
