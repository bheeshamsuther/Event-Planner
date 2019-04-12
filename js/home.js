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
    localStorage.removeItem("creatnew")
}
var creat2 = localStorage.getItem("creat");
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
    var div3 = document.createElement("div");
    div3.setAttribute("id","div3")
    var button1= document.createElement("input");
    button1.setAttribute("id",creat2[i].head)
    button1.setAttribute("class" , "btn btn-outline-info")
    button1.setAttribute("type","button")
    button1.setAttribute("value","Going");
    div3.appendChild(button1);
    var button2= document.createElement("input");
    button2.setAttribute("class" , "btn btn-outline-info")
    button2.setAttribute("id",creat2[i].head)
    button2.setAttribute("type","button")
    button2.setAttribute("value","Not Going");
    div3.appendChild(button2);
    div1.appendChild(div3);
    main.appendChild(div1);


    button1.addEventListener("click", function () {

        // 
        var intrest = localStorage.getItem("creat");
        intrest = JSON.parse(intrest);
        var creat2 = localStorage.getItem("newVar");
        creat2 = JSON.parse(creat2);
        for (var j = 0; j < intrest.length; j++){
          if (this.id === intrest[j].head){
          alert("True");
          flag = true;
            for (var k = 0; k < intrest[j].likeEmail.length; k++){
                if (intrest[j].likeEmail[k] === creat2.email){
                    alert("Your Email Is Already Here");            
                    flag = false;
                    break;
            }
           } 
            var check1 = "true"
            if (flag === true){
             for (var l = 0; l < intrest[j].disLikeEmail.length; l++){
                if (intrest[j].disLikeEmail[l] === creat2.email){
                    check1 = "flase"
                    intrest[j].disLikeEmail.splice(l,1)
                    intrest[j].disLike-- //= notintrest[j].intrest0 - 1;
                    intrest[j].like++ //= notintrest[j].notIntrest0 + 1;
                    intrest[j].likeEmail.push(creat2.email);
                    document.getElementById(this.id).style.backgroundColor = red;
                    localStorage.setItem("creat", JSON.stringify(intrest));
                }
            }
             if (check1 === "true"){
             intrest[j].like //= notintrest[j].notIntrest0 + 1;
             intrest[j].likeEmail.push(creat2.email);
             localStorage.setItem("creat", JSON.stringify(intrest));
        }
    }
    break;
    }
    }
    })
    
    button2.addEventListener("click", function () {
        var notintrest = localStorage.getItem("creat");
        notintrest = JSON.parse(notintrest);
        var creat2 = localStorage.getItem("newVar");
         creat2 = JSON.parse(creat2);
        for (var j = 0; j < notintrest.length; j++){
         if (this.id === notintrest[j].head){
         alert("True");
         flag = true;
            for (var k = 0; k < notintrest[j].disLikeEmail.length; k++){
                 if (notintrest[j].disLikeEmail[k] === creat2.email){
                    alert("Your Email Is Already Here");
                    flag = false;
                    break;
            }
           } 
           var check = "true"
           if (flag === true){
            for (var l = 0; l < notintrest[j].likeEmail.length; l++){
                if (notintrest[j].likeEmail[l] === creat2.email){
                    check = "false"
                    notintrest[j].likeEmail.splice(l,1);
                    notintrest[j].like-- 
                    notintrest[j].disLike++ 
                    notintrest[j].disLikeEmail.push(creat2.email);
                    localStorage.setItem("creat", JSON.stringify(notintrest));
                }
            }
            if (check === "true"){
                notintrest[j].disLike++ 
                notintrest[j].disLikeEmail.push(creat2.email);
                localStorage.setItem("creat", JSON.stringify(notintrest));
          }
         }
         break;
        }

       }
     })
    



}