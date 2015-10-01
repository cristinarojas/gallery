(function() {
'use strict';

$(document).ready(function () {
    var jsonURL = "public/js/data/gallery.json";
    var imgList = "";
    var images;

    $.getJSON(jsonURL, function (data) {
        $.each(data.gallery, function (index, image) {
            imgList += '<div class="col-md-4"><img class="image" src= "' + image.url + '"></div>';
        });

        $('#theRow').html(imgList);

        images = document.getElementsByClassName('image');

        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener('click', function() {
                showImage(this);
            }, false);
        }

        function showImage(image) {
            var fullImage;
            var fullImageDiv = document.getElementById('fullImage');
            var elImageShow = document.getElementById('imageShow');
            var elRow = document.getElementById('theRow');

            elImageShow.classList.remove('imageShow');

            fullImageDiv.innerHTML = '<img class="image-full" src= "' + image.src + '">';

            elRow.className = 'row hide';


        }

        function close() {
            var elRow = document.getElementById('theRow');
            var elImageShow = document.getElementById('imageShow');

            elImageShow.className = 'imageShow imageShowConf';
            elRow.className = 'row';
        }

        var elClose = document.getElementById('close');
        elClose.addEventListener('click', close, false);
    });
});
}());

