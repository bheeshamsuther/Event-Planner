
var userName = localStorage.getItem('newVar');
userName = JSON.parse(userName);
console.log(userName);
var name3 = userName.email,
name3 = name3.slice(0,name3.length-10)
console.log(name3);
document.getElementById("username").innerHTML = name3;

function logout(){
    window.location.href = "index.html";
    localStorage.removeItem('newVar');
}
function creatEvent() {
    window.location.href = "create.html"
}
function homeFun() {
    window.location.href = "index.html"
}



var creat2 = localStorage.getItem("creatnew");
console.log(creat2)
if (creat2 === null){
creat2 = [];
}
else{
creat2 = JSON.parse(creat2);
}



for (var i = 0; i < creat2.length; i++){

    var main = document.getElementById("main1")
    var div1 = document.createElement("div")
    div1.setAttribute("id" ,creat2[i].head)    
    div1.setAttribute("class" ,"card")
    div1.setAttribute("style" ,"width: 18rem")
    var image1 = document.createElement("img");
    image1.setAttribute("class","card-img-top");
    image1.setAttribute("src",creat2[i].image)
    div1.appendChild(image1)
    var div2 = document.createElement("div");
    div2.setAttribute("class","card-body")
    div1.appendChild(div2)
    var head = document.createElement("h5");
    head.setAttribute("class","card-title")
    var headT = document.createTextNode(creat2[i].head)
    head.appendChild(headT);
    div2.appendChild(head);
    var ul1 = document.createElement("ul");
    ul1.setAttribute("class","list-group list-group-flush")
    div1.appendChild(ul1)
   
    var li2 = document.createElement("li");
    li2.setAttribute("class" ,"list-group-item")
    var li2T = document.createTextNode(creat2[i].place)
    li2.appendChild(li2T);
    var li3 = document.createElement("li");
    li3.setAttribute("class" ,"list-group-item")
    var li3T = document.createTextNode(creat2[i].orgnizer)
    li3.appendChild(li3T);
    var li4 = document.createElement("li");
    li4.setAttribute("class" ,"list-group-item")
    var li5T = document.createTextNode(creat2[i].time)
    li4.appendChild(li5T);
    var li5 = document.createElement("li");
    li5.setAttribute("class" ,"list-group-item")
    var li5T = document.createTextNode(creat2[i].price);
     
    var li1 = document.createElement("li");
    li1.setAttribute("class" ,"list-group-item")
    var li1T = document.createTextNode(creat2[i].discription)
    li1.appendChild(li1T);

    li5.appendChild(li5T);
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    ul1.appendChild(li4)
    ul1.appendChild(li5)
    

 
    
        //  Going
    var span12 =  document.createElement("span");
    span12.setAttribute("id","span1")
    var txt5 = document.createTextNode("Going : " + creat2[i].like);
    
    span12.appendChild(txt5);
    div1.appendChild(span12);
    main.appendChild(div1);

        //  Not Going
    var span13 =  document.createElement("span");
    span13.setAttribute("id", "span2")
    var txt6 = document.createTextNode("  Not Going : "+ creat2[i].disLike);
    span13.appendChild(txt6);
    div1.appendChild(span13);
    main.appendChild(div1);

    

}