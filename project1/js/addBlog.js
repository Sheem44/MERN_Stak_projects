
var url=window.location.href

 theUrl= url.replaceAll("+"," ")

 indexOfTitle= theUrl.indexOf("title")
indexOfArtical=theUrl.indexOf("artical")
indexOfimg=theUrl.indexOf("img")

title= theUrl.substring(indexOfTitle+6, indexOfArtical-1);
artical=theUrl.substring( indexOfArtical+8,indexOfimg-1)
img=theUrl.substring( indexOfimg+4, theUrl.length)

function addBlog(titl,articl,image){
  let divTag = document.getElementById("main");
  //title
  titleCont=document.createTextNode(titl);
  spanTag= document.getElementById("blogTitle");
  spanTag.appendChild(titleCont);
  hTag= document.getElementById("blogh");
  hTag.appendChild(spanTag)
  //artical
  articlaCont=document.createTextNode(articl);
  pTag= document.createElement("p")
  pTag.appendChild(articlaCont);
  divTag.appendChild(pTag);
  //img
  
  img=document.getElementById("blogImage");
  imgAtrri= document.createAttribute("src")
  imgAtrri.value="img/"+image;
  img.setAttributeNode(imgAtrri); 
}

function view(){
  addBlog(title,artical,img)
}
