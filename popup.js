chrome.storage.local.get('data_waiting', function(res) {
  $("#wait_time").val(res.data_waiting);
  console.log(res.data_waiting);
});

$("#update_wait").click(function() {
    chrome.storage.local.set({ 'data_waiting': parseInt($("#wait_time").val())  });
})
