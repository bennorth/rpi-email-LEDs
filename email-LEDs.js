/*
  This program is hereby placed into the public domain by its authors.
*/

jQuery(document).ready(($) => {

    var slider = document.getElementById("myRange");
    var output = document.getElementById("slider-value");
    var photo = document.getElementById("leds-photo");


    function show_on_leds(n) {
        photo.src=`/blog/wp-content/uploads/2020/02/LEDs-showing-${n}.jpg`;
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
                frame = 1;
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

    window.requestAnimationFrame(update_display);
});
