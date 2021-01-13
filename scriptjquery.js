$("#form").submit(function (e) {
  e.preventDefault()
});

$("#send").click(function(e){
  let name =$("#name")[0].name
  let nameV =$("#name").val()
  let email =$("#email")[0].name
  let emailV =$("#email").val()
  let message=$("#message")[0].name
  let messageV =$("#message").val()

  window.localStorage.setItem(`${name}`, `${nameV}`);
  window.localStorage.setItem(`${email}`, `${emailV}`);
  window.localStorage.setItem(`${message}`, `${messageV}`);
});
$("#reset").click(function(e){
  $("#name").val(" ")
  $("#email").val(" ")
  $("#message").val(" ")
  window.localStorage.clear();
});
