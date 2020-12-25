let RKUTEN_APP_ID = "128033943c2c27b5912129bc6778402d"
let url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=128033943c2c27b5912129bc6778402d`
$.ajax({
    url: url,
    dataType: 'json'
})
    .then(
        function (data) {
            console.log(data)
        },
        function () {
            alert("読み込み失敗")
        }
    )

document.getElementById("push_button").onclick = function () {
    let search_mes = document.getElementById("search").value;

};
