
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

function myEvent() {
    window.location.href = "myevent.html"
}
function homeFun() {
    window.location.href = "home.html"
}

function creatFun() {
    var tagname = [];
    var discription = document.getElementsByTagName("textarea");
    var tagname1 = document.getElementsByTagName("input");
    for (var i =0; i < tagname1.length; i++){
    tagname.push(tagname1[i].value)
    }
    var main = document.getElementById("main1");
    console.log(main)
    var div1 = document.createElement("div")
    div1.setAttribute("class" ,"card")
    div1.setAttribute("style" ,"width: 18rem")
    var image1 = document.createElement("img");
    image1.setAttribute("class","card-img-top");
    var images = tagname[5];
    images = images.slice(12)
    image1.setAttribute("src",images)
    div1.appendChild(image1)
    var div2 = document.createElement("div");
    div2.setAttribute("class","card-body")
    div1.appendChild(div2)
    var head = document.createElement("h5");
    head.setAttribute("class","card-title")
    var headT = document.createTextNode(tagname[0])
    head.appendChild(headT);
    div2.appendChild(head);
    var ul1 = document.createElement("ul");
    ul1.setAttribute("class","list-group list-group-flush")
    div1.appendChild(ul1)
    var li2 = document.createElement("li");
    li2.setAttribute("class" ,"list-group-item")
    var li2T = document.createTextNode(tagname[1])
    li2.appendChild(li2T);
    var li3 = document.createElement("li");
    li3.setAttribute("class" ,"list-group-item")
    var li3T = document.createTextNode(tagname[4])
    li3.appendChild(li3T);
    var li4 = document.createElement("li");
    li4.setAttribute("class" ,"list-group-item")
    var li5T = document.createTextNode(tagname[2])
    li4.appendChild(li5T);
    var li5 = document.createElement("li");
    li5.setAttribute("class" ,"list-group-item")
    var li5T = document.createTextNode(tagname[3]);
     
    var li1 = document.createElement("li");
    li1.setAttribute("class" ,"list-group-item")
    var li1T = document.createTextNode(discription[0].value)
    li1.appendChild(li1T);

    li5.appendChild(li5T);
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    ul1.appendChild(li4)
    ul1.appendChild(li5)
    
    var div3 = document.createElement("div");
    div3.setAttribute("id","div3");
    var button2= document.createElement("input");
    button2.setAttribute("id", tagname[0]);

    button2.setAttribute("class" , "btn btn-outline-info")
    button2.setAttribute("type","button")
    button2.setAttribute("value","Delete");
    div3.appendChild(button2);
    div1.appendChild(div3);
    main.appendChild(div1)
    var user = localStorage.getItem("newVar");
    user = JSON.parse(user);
    // console.log(user)
    var creat =  {
       email1 : {
           email : user.email
       },
        head : tagname[0],
        place : tagname[1],
        time : tagname[2],
        price : tagname[3],
        orgnizer : tagname[4],
        image: images,
        discription : discription[0].value,
        like : 0,
        disLike : 0,
        likeEmail : [user.email],
        disLikeEmail : [user.email]
    }
    var creat1 = localStorage.getItem("creat");
    if (creat1 === null){
        creat1 = [];
    }
    else{
        creat1 = JSON.parse(creat1);
    }
    var creatnew=[]
    for (var j = 0; j < creat1.length; j++){
        if (creat1[j].email1.email === user.email){
    creatnew.push(creat1[j])
        }
    }
    creatnew.push(creat);
    localStorage.setItem("creatnew" , JSON.stringify(creatnew))
    creat1.push(creat);
    localStorage.setItem("creat" , JSON.stringify(creat1))

    button2.addEventListener("click", function () {
        var li = this.parentNode.parentNode;
        console.log(li)
        var delet1 = localStorage.getItem('creatnew');
        delet1 = JSON.parse(delet1);
        for (var i = 0; i < delet1.length; i++){
        if (this.id === delet1[i].head){
        console.log(delet1[i].head)
        console.log(i)
        delet1.splice(i, 1)
        creatnew = delet1;  
        localStorage.setItem("creatnew", JSON.stringify(creatnew))
                break;
            }
        }
        var delet = localStorage.getItem('creat');
        delet = JSON.parse(delet);
        for (var i = 0; i < delet.length; i++){
        if (this.id === delet[i].head){
        delet.splice(i, 1)
        creat1 = delet;  
        localStorage.setItem("creat",JSON.stringify(creat1))
                break;
            }
        }
        li.remove();
    
        })
}






var creat2 = localStorage.getItem("creatnew");
if (creat2 === null){
    creat2 = [];
}
else{
    creat2 = JSON.parse(creat2);
}
for (var i = 0; i < creat2.length; i++){
    var main = document.getElementById("main1")
    var div1 = document.createElement("div")
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
    
    var div3 = document.createElement("div");
    div3.setAttribute("id","div3")
    var button2= document.createElement("input");
    button2.setAttribute("id" ,creat2[i].head )
    button2.setAttribute("class" , "btn btn-outline-info");
    button2.setAttribute("type","button");
    button2.setAttribute("value","Delete");
    div3.appendChild(button2);
    div1.appendChild(div3);
    main.appendChild(div1);

    button2.addEventListener("click", function () {
        var li = this.parentNode.parentNode;
        var delet1 = localStorage.getItem('creatnew');
        delet1 = JSON.parse(delet1);
        
        for (var i = 0; i < delet1.length; i++){
        if (this.id === delet1[i].head){
        delet1.splice(i, 1)
        creatnew = delet1;  
        localStorage.setItem("creatnew", JSON.stringify(creatnew))
        break;
        }}
        var delet = localStorage.getItem('creat');
        delet = JSON.parse(delet);    
        for (var i = 0; i < delet.length; i++){
        if (this.id === delet[i].head){
        delet.splice(i, 1)
        creat1 = delet;  
        localStorage.setItem("creat",JSON.stringify(creat1))    
                break;
            }
        }
 
        li.remove();    
        })
}

