
//get form values by url 
var url=window.location.href
//delete + from url
 theUrl= url.replaceAll("+"," ")
 // get the index of each value
 indexOfTitle= theUrl.indexOf("title")
indexOfArtical=theUrl.indexOf("artical")
indexOfimg=theUrl.indexOf("img")
//subtract the values of each inpul from url
title= theUrl.substring(indexOfTitle+6, indexOfArtical-1);
artical=theUrl.substring( indexOfArtical+8,indexOfimg-1)
img=theUrl.substring( indexOfimg+4, theUrl.length)
//add blog function write form values in html tags
function addBlog(titl,articl,image){
    let divTag = document.getElementById("main");
    //put title in #blogh tag exist in (theblog.html) file
    titleCont=document.createTextNode(titl);
    spanTag= document.getElementById("blogTitle");
    spanTag.appendChild(titleCont);
    hTag= document.getElementById("blogh");
    hTag.appendChild(spanTag)
    // put artical in p tag and append it to div tag in (theblog.html) file
    articlaCont=document.createTextNode(articl);
    pTag= document.createElement("p")
    pTag.appendChild(articlaCont);
    divTag.appendChild(pTag);

    //add img src attirpute 
    
    img=document.getElementById("blogImage");
    imgAtrri= document.createAttribute("src")
    imgAtrri.value="img/"+image;
    img.setAttributeNode(imgAtrri); 
}
//viw function pass html tags of add blog to the html page
function view(){
  addBlog(title,artical,img)
}
