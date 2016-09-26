/*var db;
var request = window.indexedDB.open("myDB.db",2);

request.onsuccess = function (event){
  db = event.target.result;
  console.log("DB loaded successfully");
};

request.onerror = function (event){

};
request.onupgradeneeded = function (event){
  db = event.target.result;
  console.log("DB initialized / created");
  db.createObjectStore("nameTbl",{keyPath:"itemId", autoIncrement:true});
};

function addName(){
  var n = $("#namefield").val();
  var s = $("#subjectfield").val();
  var transaction = db.transaction(["nameTbl"],"readwrite");
  var objectStore = transaction.objectStore("nameTbl");
  var request = objectStore.add({stuName:n, stuSub:s});
  request.onsuccess(function (event){
    var result = event.target.result;
    console.log(result);
  });
}

function getAllNames() {
  var transaction = db.transaction(["nameTbl"],"readonly")
  var objectStore = transaction.objectStore("nameTbl");
  var request = objectStore.openCursor();
  request.onsuccess = function (event){
    var cursor = event.target.result;
    if (cursor){
      console.log(cursor)
    }
  };
};*/

document.getElementById("root").innerHTML='hello';
/*
function connectDB(f){
	var request = indexedDB.open("myBase", 1);
	request.onerror = function(err){
		console.log(err);
	};
	request.onsuccess = function(){
		// При успешном открытии вызвали коллбэк передав ему объект БД
		f(request.result);
	}
	request.onupgradeneeded = function(e){
		// Если БД еще не существует, то создаем хранилище объектов.
		e.currentTarget.result.createObjectStore("myObjectStore", { keyPath: "key" });
		connectDB(f);
	}
}*/
