// setTimeout(
//   () => (document.getElementById("gif1").style.visibility = "visible"),
//   3500
// );
// setTimeout(
//   () => (document.getElementById("cats").style.visibility = "visible"),
//   3500
// );

// setTimeout(
//   () => (document.getElementById("page").style.display = "block"),
//   6000
// );
// setTimeout(
//   () => (document.getElementById("landing").style.display = "none"),
//   6200
// );
var api_key =
  "live_N96Rpoj6dUytX0f9lepLkbXt4pxcF9CBtQuLkJqAv6B3gh2vgeqgXWqrHIMFKRL4";

// function ajax_get(url, callback) {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function () {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//       console.log("responseText:" + xmlhttp.responseText);
//       try {
//         var data = JSON.parse(xmlhttp.responseText);
//       } catch (err) {
//         console.log(err.message + " in " + xmlhttp.responseText);
//         return;
//       }
//       callback(data);
//     }
//   };

//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }

// ajax_get(
//   " https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_N96Rpoj6dUytX0f9lepLkbXt4pxcF9CBtQuLkJqAv6B3gh2vgeqgXWqrHIMFKRL4",
//   function (data) {
//     var html = [];
//     var breed = [];
//     var temper = [];
//     for (let i = 0; i < 10; i++) {
//       html[i] = '<img class="cat-image" src=' + data[i]["url"] + ">";
//       breed[i] =
//         '<h1 class="text"> Breed&#58; ' +
//         data[i]["breeds"][0]["name"] +
//         "</h1>";
//       temper[i] =
//         '<div class="text"> Temperament&#58; ' +
//         data[i]["breeds"][0]["temperament"] +
//         "</div>";
//       document.getElementById("image" + i).innerHTML = html[i];
//       document.getElementById("breed" + i).innerHTML = breed[i];
//       document.getElementById("temper" + i).innerHTML = temper[i];
//     }
//   }
// );

var name = "abyssinian";
function ajaxCall() {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/cats?playfulness=1",
    headers: { "X-Api-Key": "ndVomy3nIbiv/NKQNMxplA==bBTAdD8bsEM66oqN" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      var image =
        '<img style="object-fit: contain; width:100%; height:100%; margin: 0; bottom: 0px;  position: relative;" src=' +
        result[0].image_link +
        ">";
      document.getElementById("image1").innerHTML = image;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
ajaxCall();
