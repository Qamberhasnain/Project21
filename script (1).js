var row = 1;
var entry = document.getElementById("entry");


function store(){
    alert("Complaint Submitted Succesfully");
}

function showTypeWise(x){
    $('.health').css('display','none');
    $('.government').css('display','none');
    $('.employment').css('display','none');
    $('.other').css('display','none');
    if(x==1){
        $('.health').css('display','table-row');
    }
    else if(x==2){
        $('.government').css('display','table-row');
    }
    else if(x==3){
        $('.employment').css('display','table-row');
    }
    else if(x==4){
        $('.other').css('display','table-row');
    }
}

function showPlaceWise(x){
    $('.delhi').css('display','none');
    $('.punjab').css('display','none');
    $('.mumbai').css('display','none');
    $('.goa').css('display','none');
    if(x==1){
        $('.delhi').css('display','table-row');
    }
    else if(x==2){
        $('.punjab').css('display','table-row');
    }
    else if(x==3){
        $('.mumbai').css('display','table-row');
    }
    else if(x==4){
        $('.goa').css('display','table-row');
    }
}

// var display = document.getElementById("display");
    
// var newRow = display.insertRow(row);
// var cell1 = newRow.insertCell(0);
// var cell2 = newRow.insertCell(1);
// var cell3 = newRow.insertCell(2);
// var cell4 = newRow.insertCell(3);
// var cell5 = newRow.insertCell(4);
// var cell6 = newRow.insertCell(5);
// cell1.innerHTML = complaint;
// cell2.innerHTML = address;
// cell3.innerHTML = date;
// cell4.innerHTML = brief;
// cell5.innerHTML = image;
// cell6.innerHTML = video;
    
// row++;

