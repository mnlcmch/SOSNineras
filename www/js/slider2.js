$(document).ready(slider);

function slider(){
    $('#img4').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider1f
    });
}

function slider1f(){
    $('#img4').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider2
    });
}

function slider2(){
    $('#img5').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider2f
    });
}

function slider2f(){
    $('#img5').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider3
    });
}

function slider3(){
    $('#img6').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider3f
    });
}

function slider3f(){
    $('#img6').transition({
        animation  : 'scale',
        duration   : '2s',
        onComplete : slider
    });
}
