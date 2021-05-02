// Collapsible Tabs
    
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
        
    }
    });
} 

count11 = 0;
document.getElementById("1").onclick = change11;  
function change11() {
    if (count11%2==0){
        document.getElementById("11").style.opacity="1"
    }
    else {
        document.getElementById("11").style.opacity="0"
    }
    count11+=1;
    return count11;
}   

count12 = 0;
document.getElementById("2").onclick = change12;  
function change12() {
    if (count12%2==0){
        document.getElementById("12").style.opacity="1"
    } 
    else {
        document.getElementById("12").style.opacity="0"
    }
    count12+=1;
    return count12;
}   

count13 = 0;
document.getElementById("3").onclick = change13;  
function change13() {
    if (count13%2==0){
        document.getElementById("13").style.opacity="0.9"
    } 
    else {
        document.getElementById("13").style.opacity="0"
    }
    count13+=1;
    return count13;
}  

count14 = 0;
document.getElementById("4").onclick = change14;  
function change14() {
    if (count14%2==0){
        document.getElementById("14").style.opacity="1"
    } 
    else {
        document.getElementById("14").style.opacity="0"
    }
    count14+=1;
    return count14;
}   