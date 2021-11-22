const editPortrait = document.querySelector('.edit-portrait');
const form = document.getElementById('portrait-form');
const submitBtn = document.getElementById('submit-btn');
const portrait = document.querySelector('.portrait');
const textPortrait = document.getElementById('text');
const appTitle = document.querySelector('.app-title');
const textPortraitInput = document.getElementById('text-portrait');
const uploadedView = document.getElementById('uploaded_view');

const repeatText = (text, count) => {
  return text.repeat(count);
}

const handleSubmit = (e) => {
  e.preventDefault();

  const uploadedViewImage = document.querySelector('img');
  const textPortraitInputValue = textPortraitInput.value;

  if (uploadedViewImage && textPortraitInputValue) {

    const maxRepeat = 20500;
    const wordCount = textPortraitInputValue.length;

    console.log(uploadedViewImage);

    editPortrait.classList.add('hide');
    portrait.classList.remove('hide');
    appTitle.classList.add('hide');

    // apply correct repeat count to text
    for (let i = 0; i * wordCount <= maxRepeat + wordCount; i++) {
      textPortrait.innerHTML = repeatText(textPortraitInputValue + ' ', i);
    }

    textPortrait.style.cssText = `
      background: url(${uploadedViewImage.src});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
    `;
    return
  }
}

const handleTextInput = (e) => {
  console.log(e.target.value);
  if (e.target.value) {
    submitBtn.classList.remove('disabled');
    submitBtn.disabled = false;
    return
  }
  submitBtn.classList.add('disabled');
  submitBtn.disabled = true;
}

textPortraitInput.addEventListener('input', handleTextInput);
form.addEventListener('submit', handleSubmit);

var btnUpload = $("#upload_file"),
  btnOuter = $(".button_outer");
btnUpload.on("change", function (e) {
  var ext = btnUpload.val().split('.').pop().toLowerCase();
  if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
    $(".error_msg").text("Not an Image...");
  } else {
    $(".error_msg").text("");
    submitBtn.classList.remove('disabled');
    submitBtn.disabled = false;
    btnOuter.addClass("file_uploading");
    setTimeout(function () {
      btnOuter.addClass("file_uploaded");
    }, 3000);
    var uploadedFile = URL.createObjectURL(e.target.files[0]);
    setTimeout(function () {
      $("#uploaded_view").append('<img src="' + uploadedFile + '" />').addClass("show");
    }, 3500);
  }
});
$(".file_remove").on("click", function (e) {
  $("#uploaded_view").removeClass("show");
  $("#uploaded_view").find("img").remove();
  btnOuter.removeClass("file_uploading");
  btnOuter.removeClass("file_uploaded");
});