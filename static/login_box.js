var scrollDelay, requesting = false;
function changeTab(tab, navigate = false) {
  if (typeof scrollDelay === "undefined") scrollDelay = 500;
  $('.auth-widget').hide();
  $('#' + tab).show();
  if (navigate) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#' + tab).offset().top - 100
    }, scrollDelay);
  }
}

function submitForm(id = 'login') {
  swalLoading('Đang xử lý...', false);
  $(`${id}`).append('<input style="display: none" id="c1" name="c1" value="' + btoa('GOYIIwuNtC7oD9tag4h4EHn8EfKheRE9HZfAwOdt' + '@' + kb + '@' + fp) + '">');
  $(`${id}`).submit();
}

function fortgotPassword () {
  swalLoading('Liên hệ admin để khôi phục mật khẩu.');
}

function toggleOtpModal(show = false) {
  $('body')[show ? 'addClass' : 'removeClass']('modal-open');

  $('#modalOTP')[show ? 'addClass' : 'removeClass']('show');
  $('.modal-backdrop-otp')[show ? 'addClass' : 'removeClass']('show');
}

$(window).ready(function() {
  $('.text-lower').change(function() {
    $(this).val($(this).val().toLowerCase());
  });

  $('.modal-backdrop-otp, .modal [data-dismiss="modal"]').click(function() {
    toggleOtpModal(false);
  });
});