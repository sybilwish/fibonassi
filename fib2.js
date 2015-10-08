jQuery(document).ready(function($) {
  $("form").on("submit", function(e){
    e.preventDefault();
    var n = $("input[name=n]").val();
    $('#result').html(fib2(n));
  });
});

// sybile code
// function fib(n){
//   if(n==0){
//     return 0;
//   }

//   if(n==1){
//     return 1;
//   }

//   if(n>=2){
//     return fib(n-1) + fib(n-2);
//   }

//   return "error";
// }

function fib2(n){
  return (n<=1? n : fib2(n-1) + fib2(n-2));
}
