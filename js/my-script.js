window.onscroll = function() {
    if ($(window).scrollTop() >= 57) {
        // document.getElementById('nav-scroll').classList.remove('invisible');
        // document.getElementById('nav-scroll').classList.add('visible');

        $('#nav-scroll').removeClass('invisible');
        $('#nav-scroll').addClass('visible');

        $('#nav-image').removeClass('visible');
        $('#nav-image .fadeInLeft').fadeOut();
        $('#nav-image').addClass('invisible');
    } else {
        $('#nav-scroll').removeClass('visible');
        $('#nav-scroll').addClass('invisible');

        $('#nav-image').removeClass('invisible');
        $('#nav-image .fadeInLeft').fadeIn();
        $('#nav-image').addClass('visible');
    }
}

$(document).ready(function() {

    $('.sk-cube-grid').fadeOut();

    $('#send').click(function() {
        if ($('#email').val() == '') {
            $('.alert').remove();
            $('.but').append(
                `
                    <div class="alert alert-danger alert-dismissible fade show p-1 w-75 text-center" role="alert">
                        <strong>Enter Your Email Please!</strong>
                        <button type="button" class="btn-close p-2" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `
            );
        } else {
            $('.alert').remove();

            $('.but').append(
                `
                    <div class="alert alert-success alert-dismissible fade show p-1 w-75 text-center" role="alert">
                        <strong>Email Send Success!</strong>
                        <button type="button" class="btn-close p-2" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `
            );
        }
    });
});