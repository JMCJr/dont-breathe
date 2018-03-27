
$(document).ready(() => {
  console.log("loading");

// $.ajax({
//       method: "post",
//       url: "/city/:country/:city",
//       data: data,
//       dataType: "json",
//       success: data => {
//         console.log('success!');
//         window.location.href = "/city/:country/:city";
//       }
//     });

const $commentMaker = $('#comment-maker');
  $commentMaker.submit( e=> {
  e.preventDefault();
  const data = $(e.target).serialize();
  console.log(data);
  var city = $('#hidd-city').val();
  var country = $('#hidd-country').val();
  var airQuality = $('#hidd-air').val();
  var com_text = $('actualComm').val();
  data.airQual = $('#airQualValue').text;
  $.ajax({
    url: `/city/${country}/${city}`,
    method: 'POST',
    data: {
      city: $('#hidd-city').val(),
      country: $('#hidd-country').val(),
      airQuality: $('#hidd-air').val(),
      com_text: $('#actualComm').val()
    },
    datatype: 'JSON',
    success: function(result){

      window.location.href="/city"
    }
  });
});

});