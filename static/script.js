// console.log("i am working");
let loader = document.getElementById("preloader");

window.addEventListener("load", ()=>{
    loader.classList.add('disappear');
})

// JavaScript code to update the displayed value
const progressBar = document.getElementById("progress");
const selectedValue = document.getElementById("selectedValue");

progressBar.addEventListener("input", function() {
    selectedValue.textContent = progressBar.value;
});


document.addEventListener("DOMContentLoaded", function() {
    $('#prediction-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/index',
            data: $(this).serialize(),
            success: function(response) {
                $('#result').text(response.result);
                $('#predicted-salary').text(response.result);
                $('#exampleModal').modal('show');
            },
            error: function(xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
        });
    });
});
