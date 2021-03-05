 function Create(){
    var inp1 =document.getElementById("input1").value;
    var inp2 =document.getElementById("input2").value;
    var inp3 =document.getElementById("input3").value;
    var inp4 =document.getElementById("input4").value;

    var new_data = {inp1,inp2,inp3,inp4};
{}
    if(localStorage.getItem('data')== null){

        localStorage.setItem('data', []);
    }

    var old_data = [];
    if (localStorage.getItem('data')) {
      old_data =JSON.parse(localStorage.getItem('data'));
    }
    old_data.push(new_data);

    localStorage.setItem('data',JSON.stringify(old_data));
    console.log(old_data);
    let tableRow="";
    for(i=0;i<=old_data.length-1; i++){
    tableRow+=`<tr><td>${old_data[i].inp1}</td> <td>${old_data[i].inp2}</td><td>${old_data[i].inp3}</td> <td>${old_data[i].inp4}</td><td><i class="fa fa-edit Edit-botton onclick="edit(${old_data[i].inp4})" ></i></td><td><i class="fa fa-trash Delete-botton"></i></td></tr>`;
       
    }
    var tbody=document.getElementById("table-data");
    tbody.innerHTML = tableRow;
     console.log("*",tableRow)  ;
}

function DeleteAll(){
    localStorage.setItem('data',JSON.stringify([]));
    console.log("all records are deleted");
    var tbody=document.getElementById("table-data");
    tbody.innerHTML = "";

}

function Edit(){
    localStorage.setItem('data',JSON.stringify([]));
    console.log("all records are edited");
    var tbody=document.getElementById("table-data");
  
}







  






