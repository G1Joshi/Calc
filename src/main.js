function insert(val) {
  document.fm.in.value += val;
}

function equal() {
  exp = document.fm.in.value;
  if (exp)
    document.fm.in.value = eval(exp);
}

function clr() {
  document.fm.in.value = '';
}

function back() {
  var exp = document.fm.in.value;
  document.fm.in.value = exp.substring(0, exp.length - 1);
}