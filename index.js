// first javascript

// build 2x2 array of buttons
const listButton = [];
for (let i=1; i<=8; i++) {
    const tempArray = [];
    for (let j=1; j<=8; j++) {
        myItem = 'but'+i.toString()+j.toString();
        tempArray.push(myItem);
    };
    listButton.push(tempArray);
};
// random pick to start
function recomPick(id) {        ;
    //console.log(listButton[0]);
    let pick = Math.floor(Math.random()*(8-1+1)+1)-1;
    //console.log(pick);
    //console.log(id.id);
    const p = document.getElementById(listButton[0][pick]);
    //console.log(p.className);
    p.className = 'btn btn-primary';
}
// track selection against recommendation
function selectPick(id) {
    //console.log(id.id);
    const x = document.getElementById(id.id);
    //console.log(parseInt(x.id.substr(3, 1)));
    console.log(x.className);
    if (x.className == 'btn btn-primary') {
         x.className = 'btn btn-success';
    } else {
        
        x.className = 'btn btn-danger';
    }
    
    let pick = Math.floor(Math.random()*(8-1+1)+1)-1;
    //console.log(pick);
   
    const p = document.getElementById(listButton[parseInt(x.id.substr(3, 1))][pick]);
    //console.log(p.className);
    p.className = 'btn btn-primary';
}
// build html cards
for (let k=1; k<=8; k++) {
    for (let i=1; i<=8; i++) {

        myName = 'but'+k.toString()+i.toString();
        //console.log(myName);
        myHtml =  "<div class='card' style='width: 6rem;'><div class='card-body'><h5 class='card-title'>" + i + "</h5><p class='card-text'></p><a href='#' id="+myName+" onclick='selectPick(this)' class='btn btn-secondary'>Select</a></div></div>";
        myCol = "colxx"+k;
        let myText = document.getElementById(myCol);
        myText.innerHTML += myHtml;
    };
};
