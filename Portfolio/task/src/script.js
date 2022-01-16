let algothiefWindow = document.querySelector("#algoThief-window");

let openAlgothiefWindow = document.querySelector("#algoThief-openwindow");

let closeAlgothiefWindow = document.querySelector("#algoThief-closewindow");

let virtualpianoWindow = document.querySelector("#virtualPiano-window");

let openVirtualpianoWindow = document.querySelector("#virtualPiano-openwindow");

let closeVirtualpianoWindow = document.querySelector("#virtualPiano-closewindow");

openAlgothiefWindow.onclick = function(){
    algothiefWindow.style.display = "block";
};

closeAlgothiefWindow.onclick = function(){
    algothiefWindow.style.display ="none";
}

openVirtualpianoWindow.onclick = function(){
    virtualpianoWindow.style.display = "block";
};

closeVirtualpianoWindow.onclick = function(){
    virtualpianoWindow.style.display ="none";
}


function changeImage() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
}