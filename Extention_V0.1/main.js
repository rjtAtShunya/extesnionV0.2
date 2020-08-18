
        fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                create(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
     
    // Create a class for the element
class Square extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
      return ['c', 'l'];
    }
  
    constructor() {
      // Always call super first in constructor
      super();
  
      const shadow = this.attachShadow({mode: 'open'});
  
      const div = document.createElement('div');
      const style = document.createElement('style');
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  
    connectedCallback() {
      console.log('Custom square element added to page.');
     
    }
  
    disconnectedCallback() {
      console.log('Custom square element removed from page.');
    }
  
    adoptedCallback() {
      console.log('Custom square element moved to new page.');
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom square element attributes changed.');
   
    }
  }
  
  customElements.define('custom-square', Square);
  
 

  function create(data) {
    localStorage.setItem('data', JSON.stringify(data));
    // console.log(data)
    var data = JSON.parse(localStorage.getItem('data'));
    console.log(data)
    
      var mainContainer = document.getElementById("myData");
      for (var i = 0; i < data.length; i++) {
          var element = document.createElement(data[i].kind);
          element.innerHTML =   data[i].value ;
         
          // console.log("----d>",data[i].value[i])
          
          mainContainer.appendChild(element);
          document.getElementsByTagName(data[i].kind)[0].setAttribute("id", data[i].id); 
          // console.log(data[i].child[i].kind)
          document.getElementById(data[i].id).style =  data[i].style;
          // var child = document.createElement(data[i].child[i].kind);
          // child.innerHTML =   data[i].child[i].value ;
          // element.appendChild(child);
          // document.getElementsByTagName(data[i].kind)[0].setAttribute("id", data[i].id); 
          // console.log(data[i].child[i].kind)
          // document.getElementById(data[i].id).style =  data[i].style;
          
      }
     var data_new = {}
// populate the array


      for (i in data) {
        data = JSON.parse(JSON.stringify(data[i]));
        console.log("last",data.child)
        console.log("kind",data.kind)
  
      }
      console.log("last",data.child)
      console.log("kind",data.child.kind)

        // var child1 = document.createElement(data.child[i].kind[j]);
        // child1.innerHTML =   data.child[i].value[j] ;
         
        //   // console.log("----d>",data[i].value[i])
          
        //   element.appendChild(child1);
        //   document.getElementsByTagName(data.child[i].kind[j])[0].setAttribute("id",  data.child[i].id[j]); 
        //   // console.log(data[i].child[i].kind)
        //   document.getElementById(data.child[i].id[j]).style =  data.child[i].style[j];
      
      
        // for (j in myObj.cars[i].models) {
        //   x += myObj.cars[i].models[j] + "<br>";
        // }
    
  }