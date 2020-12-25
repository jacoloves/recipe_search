let RKUTEN_APP_ID = "1008202337986225363"
let url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=${RKUTEN_APP_ID}&categoryType=medium`

let recipes = []

$.ajax({
    url: url,
    dataType: 'json'
})
    .then(
        function (data) {
            recipes = data.result.medium;
            // for (let i = 0; i < recipes.length; i++) {
            //     console.log(recipes[i].categoryName);
            // }
        },
        function () {
            alert("読み込み失敗")
        }
    )

document.getElementById("push_button").onclick = function () {
  let search_mes = document.getElementById("search").value;
  let arr =  []; 

  for (let i = 0; i < recipes.length; i++) {
    //console.log(recipes[i].categoryName);
    target_categoryName = recipes[i].categoryName;
    target_categoryUrl = recipes[i].categoryUrl;
    if (target_categoryName.indexOf(search_mes) > 0) {
      let arr2 = [];
      arr2.push(target_categoryName, target_categoryUrl)
      arr.push(arr2);
    }
  }
  let target_div = document.getElementById("categories")
  for (let i = 0; i < arr.length; i++) {
    let add_p = document.createElement('p');
    let atag = document.createElement('a');
    atag.setAttribute('href', arr[i][1])
    let text = document.createTextNode(arr[i][0]);
    let text2 = document.createTextNode(arr[i][1]);
    add_p.appendChild(text);
    target_div.appendChild(add_p);
    atag.appendChild(text2);
    target_div.appendChild(atag);
  }
};
