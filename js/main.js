window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    this.init();
    document.getElementById('tt').addEventListener('click', function(){
      var a =  new Audio('assets/audios/tt.mp3');
      a.play();
    })



  // getRepoInfo("CatDown")
  // .then( (data) => {
  //   document.querySelector("#starsCatDown").innerHTML = data.stargazers_count
  // });

  var myrow = document.querySelector("#techsRow");

  pics.forEach( url => {

    var pic = new Techs(url).init();

    myrow.appendChild( new Row( pic ) );

  });


};

 

window.onscroll = function(){
    
    var windowBottom =  200;

    document.querySelectorAll(".project, .section").forEach(el =>{

      var objB  = el.getBoundingClientRect().y;
      
      var opacity = window.getComputedStyle(el).getPropertyValue("opacity");
      if(objB > windowBottom){

        if(  opacity == 1 ){ this.fade(el) }
        
      }else{
        if( opacity == 0 ) { this.unfade(el) }
      }
    });


}

function fade(el) {
  el.classList.add('hide-out');
  el.classList.remove('show-out') 
  el.classList.add('show');
}

function unfade(el) {
  el.classList.add('show');
  el.classList.remove('hide') 
  el.classList.remove('hide-out');

}




var pics = [
  {url: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/bciJjUAsRzG6UQbCRcVe", name : "Bootstrap"},
  {url:"https://miro.medium.com/max/344/1*tZHcs0d7MAG-BBcjBekZYA.png", name : "Javascript"},
  {url:"https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png", name : "Java"},
  {url:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png", name : "Python"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", name : "React"},
  {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png", name : "Git"},
  {url:"https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png", name : "Docker"},
  {url:"https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png" , name : "HTML"},
  {url:"https://image.flaticon.com/icons/png/512/732/732190.png" , name : "CSS" },
  {url:"https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png", name : "Node"},
  {url: "https://www.mysql.com/common/logos/logo-mysql-170x115.png", name: "MySQL"},
  {url: "https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png", name: "MongoDB"},
  {url: "https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png", name: "Vue.js"},
]



class Techs{
  constructor(imageObj){
    this.imageObj = imageObj;
  }

  init(){
    let container  = ElementFactory("div", ["container"]);
    let box = ElementFactory("div", ["box"]);
    let spin = ElementFactory("div", ["spin-container"]);
    let shape = ElementFactory("div", ["shape"]);
    let bd = ElementFactory("div", ["bd"]);
    bd.setAttribute("style", "--urlImage : url("+this.imageObj.url+")");

    shape.appendChild(bd);
    spin.appendChild(shape);
    box.appendChild(spin);
    container.appendChild(box);
    let tooltip = new Tooltip(this.imageObj.name);
    tooltip.querySelector(".icon").appendChild( container );
    return tooltip;

  }
};

class Row{
  constructor(child){
    var d = document.createElement("div");

    d.setAttribute("class","col-6 col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-4");
    d.appendChild(child);
    
    
    return d;
  }
};



/**
 * 
 * @param {String} el 
 * @param {String} classList 
 * @returns {HTMLElement}
 */
function ElementFactory(el, classList){
  let d = document.createElement(el);

  classList.forEach(cl => {
    d.classList.add(cl);
  });

  return d;
}

class Tooltip{
  constructor(text){

    var d = document.createElement("div");
    d.setAttribute("class","iconscontainer");
    var di = document.createElement("div");
    di.setAttribute("class", "icon");
    var spn = document.createElement("span");
    spn.innerHTML = text;

    di.appendChild(spn);
    d.appendChild(di);

    return d;

  }
};



function getRepoInfo(repo){
  return fetch(`https://api.github.com/repos/david123ramos/${repo}`, {method: 'GET'} ).then(resp => resp.json());
}

