$(document).ready(slider);

function slider(){
    $('#img1').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider1f
    });
}

function slider1f(){
    $('#img1').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider2
    });
}

function slider2(){
    $('#img2').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider2f
    });
}

function slider2f(){
    $('#img2').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider3
    });
}

function slider3(){
    $('#img3').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider3f
    });
}

function slider3f(){
    $('#img3').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider
    });
}
