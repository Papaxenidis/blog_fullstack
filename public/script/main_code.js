// ΤΙΚ




function val() {
    sel = document.getElementById("floatingSelect");
    var x = sel.options[sel.selectedIndex].text;
    x = x.split(/[*]/)
    document.getElementById("area1").innerHTML=x[0];
    document.getElementById("area2").innerHTML=x[1];
    document.getElementById("area3").innerHTML=x[0];
    document.getElementById("area4").innerHTML=x[1];


  }