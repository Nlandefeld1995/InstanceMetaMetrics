// circle updated


// Today's date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;

//// 
// card/page
function data_last_updated_function(){

  domo.get('/data/v1/lastupdated' , {format: 'array-of-objects'}).then(kpi_update);
  domo.get('/data/v1/lastupdated' , {format: 'array-of-objects'}).then(dataset_update);
  domo.get('/data/v1/lastupdated' , {format: 'array-of-objects'}).then(kpi_views_function);
  domo.get('/data/v1/lastupdated' , {format: 'array-of-objects'}).then(user_login_function);
  
   
    
}

function kpi_update(data){
 var cd = 24 * 60 * 60 * 1000;
var card_page_date_diff =  new Date(today) - new Date(data[0].kpi_page_last_update) ;
var diff = Math.floor(card_page_date_diff/ cd);
if(diff <= 1){

 document.getElementById("card_page_circle").style.backgroundColor="#50f442";
 document.getElementById("card_page_circle").innerHTML="<24 Hours";
}
else if(diff <= 2){

 document.getElementById("card_page_circle").style.backgroundColor="#f4f442";
 document.getElementById("card_page_circle").innerHTML="<48 Hours";
}
else{

 document.getElementById("card_page_circle").style.backgroundColor="#f94c43";
 document.getElementById("card_page_circle").innerHTML="48+ Hours";
}
}
// dataset

function dataset_update(data){


var cd = 24 * 60 * 60 * 1000;
var dataset_date_diff = new Date(today) -  new Date(data[0].dataset_last_update) ;
var diff = Math.floor(dataset_date_diff/cd);
if(diff <= 1){

 document.getElementById("dataset_circle").style.backgroundColor="#50f442";
 document.getElementById("dataset_circle").innerHTML="<24 Hours";
}
else if(diff <= 2){

 document.getElementById("dataset_circle").style.backgroundColor="#f4f442";
 document.getElementById("dataset_circle").innerHTML="<48 Hours";
}
else{

 document.getElementById("dataset_circle").style.backgroundColor="#f94c43";
 document.getElementById("dataset_circle").innerHTML="48+ Hours";
}
}

// kpi views
function kpi_views_function(data){

  var cd = 24 * 60 * 60 * 1000;

var card_views_date_diff = new Date(today) - new Date(data[0].kpi_view_last_update) ;

var diff= Math.floor(card_views_date_diff/cd);
if(diff <= 1){

 document.getElementById("card_views_circle").style.backgroundColor="#50f442";
 document.getElementById("card_views_circle").innerHTML="<24 Hours";
}
else if(diff <= 2){

 document.getElementById("card_views_circle").style.backgroundColor="#f4f442";
 document.getElementById("card_views_circle").innerHTML="<48 Hours";
}
else{

 document.getElementById("card_views_circle").style.backgroundColor="#f94c43";
  document.getElementById("card_views_circle").innerHTML="48+ Hours";
}
}
// user logins

function user_login_function(data){

  var cd = 24 * 60 * 60 * 1000;

var user_logins_date_diff = new Date(today) - new Date(data[0].user_login_last_update) ;
var diff = Math.floor(user_logins_date_diff/cd);

if(diff <= 1){

 document.getElementById("user_login_circle").style.backgroundColor="#50f442";
 document.getElementById("user_login_circle").innerHTML="<24 Hours";
}
else if(diff <= 2){

 document.getElementById("user_login_circle").style.backgroundColor="#f4f442";
 document.getElementById("user_login_circle").innerHTML="<48 Hours";
}
else{

 document.getElementById("user_login_circle").style.backgroundColor="#f94c43";
 document.getElementById("user_login_circle").innerHTML="48+ Hours";
}
}





// When changing search for instance/environment hide all tabs

function closeMetrics(){
$(".tablinks").removeClass("active");
$(".tablinks_2").removeClass("active");
console.log('start dropping displays');
Card_Information.style.display = "none";
console.log('drop cardinfo');
page_information.style.display = "none";
console.log('drop page');
dataset_information.style.display = "none";
console.log('drop dataset');
Dataflow_information.style.display = "none";
console.log('drop df');
User_information.style.display = "none";
console.log('drop user');
common_information.style.display = "none";
console.log('drop common_information');
kpi_no_views.style.display = "none";
console.log('drop kip no view');
dataset_no_table.style.display = "none";
console.log('drop dataset no');
kpi_orphaned_table.style.display = "none";
console.log('drop orphan');
user_no_login.style.display = "none";
console.log('drop user no');
    document.getElementById("cloader").style.display = "none";
    console.log('drop cloader');
    document.getElementById("myDivc").style.display = "none";
    console.log('drop mydivc');
    document.getElementById("nodata").style.display = "none";
    console.log('drop nodata');
    document.getElementById("man").style.display = "none";
    console.log('drop man');
    document.getElementById("eye-l").style.display = "none";
    console.log('drop eye-l');
    document.getElementById("eye-r").style.display = "none";
    console.log('drop eye-r');
    document.getElementById("nose").style.display = "none";
    console.log('drop nose');
    document.getElementById("mouth").style.display = "none";
    console.log('drop mouth');
console.log('end dropping');

}

// show/hide pages
function showDiv(){
  document.getElementById('start').style.display='none'
  document.getElementById('page2').style.display='inline'
}
///////////////////////////////////////////////////////////////////////////
// tabing

function openMetrics(evt, metricName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(metricName).style.display = "block";
    evt.currentTarget.className += " active";
}
/////////////////////////
// tabing 2

function openMetrics_2(evt, metricName) {
    // Declare all variables
    var i, tabcontent_2, tablinks_2;

    // Get all elements with class="tabcontent_2" and hide them
    tabcontent_2 = document.getElementsByClassName("tabcontent_2");
    for (i = 0; i < tabcontent_2.length; i++) {
        tabcontent_2[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks_2 = document.getElementsByClassName("tablinks_2");
    for (i = 0; i < tablinks_2.length; i++) {
        tablinks_2[i].className = tablinks_2[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(metricName).style.display = "block";
    evt.currentTarget.className += " active";
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


// SEARCHES

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Card Name Search

// card name card table 
function fitlerCardName() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("CNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// card name kpi no view table 
function fitlerCardNameKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("CNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// card name orphaned table 
function fitlerCardNameO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("CNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Card ID Search 

// on card information 
function fitlerCardId() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("CIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// kpi id kpin no views
function fitlerCardIdKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("CIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// kpi id orphaned
function fitlerCardIdO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("CIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Page ID Search 

// page id in card table 
function fitlerPageIdCT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// page id on page table 
function fitlerPageIdPT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("page_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// page id on parent page id
function fitlerPageIdPTP() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("page_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// page id on kpi now view
function fitlerPageIdKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// page id on kpi orphaned view
function fitlerPageIdO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// NEED TO ADD ******* ON PAGE LEVEL, parent page as well   ****
// Page Id Search on Page metrics
// HOW TO DO TWO FILTERS ON SAME FUNCTION??? 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// page name search

// page name on page table 
function fitlerPageName() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("page_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// page name on card table 
function fitlerPageNameCT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[10];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// page name on kpi no table 
function fitlerPageNameKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[10];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// page name orphaned table 
function fitlerPageNameO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[10];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function fitlerPageNamePA() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("PNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("page_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// NEED TO ADD ** Parent page name *** LINK TO PAGE ID?? 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DATASET id search

// datset id on card table 
function fitlerdatasetIdCT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


// DATASET id dataset table
function fitlerdatasetIdDT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// DATASET id dataflow table
function fitlerdatasetIdDFT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Dataflow_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// DATASET id kpi no view table
function fitlerdatasetIdKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// DATASET id dataset no kpi or df table
function fitlerdatasetIdDNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_no_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// DATASET id orphaned table
function fitlerdatasetIdO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSIDSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}



// NEED TO ADD *** ON DATASET LEVEL, DATAFLOW, PAGE?
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// dataset name search

// dataset name on dataset table
function fitlerdatasetname() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// dataset name on dataflow table
function fitlerdatasetnameDF() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Dataflow_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// dataset name on dataset no kpi or df table
function fitlerdatasetnameDNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_no_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// dataset name on card table
function fitlerdatasetnameCT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[9];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// dataset name on kpi no table
function fitlerdatasetnameKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[9];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// dataset name on orphaned table
function fitlerdatasetnameO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DSNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[9];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// NEED TO ADD** to dataflow, card, page? ** LInk to dataset id? 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// owner name search

// owner name card table 
function fitlerownernameCT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner name page table
function fitlerownernamePT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("page_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner name dataset table 
function fitlerownernameDT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// owner name user table 
function fitlerownernameUT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("User_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// owner name kpi no view table 
function fitlerownernameKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// owner name dataset no kpi or df table 
function fitlerownernameDNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_no_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// owner name orphaned table 
function fitlerownernameO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// owner name user no login table 
function fitlerownernameUNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("UNSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("user_no_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// NEED TO ADD *** ON DATASET LEVEL, user level, Page, Link Email and id? 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Dataflow ID
function filterDataflowId() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("DFSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Dataflow_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// owner email search

// owner email user table
function fitlerowneremail() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("User_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// owner email user no login table 
function fitlerowneremailUNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("user_no_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// owner email  card table 
function fitlerowneremailCT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("Card_Information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[11];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner email  kpi no table 
function fitlerowneremailKNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_no_views");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[11];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner email  orphaned table 
function fitlerowneremailO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("kpi_orphaned");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[11];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner email page page table 
function fitlerowneremailPT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("page_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner email parent page table 
function fitlerowneremailPPT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("page_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner email datasource table 
function fitlerowneremailDT() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_information");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
// owner email dataset no table 
function fitlerowneremailDNO() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("OESearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataset_no_card_no_dataflow");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


// ** LInk to owner name**

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Card Sort
 function sortTable(){
  var rows = $('#cardtable tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#cardtable').children('tbody').append(row);
  });
}
/////////////////////////
// Page Sort
function sortTable(){
  var rows = $('#pagetable tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#pagetable').children('tbody').append(row);
  });
}
/////////////////////////
// Dataset Sort
function sortTable(){
  var rows = $('#datasettable tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#datasettable').children('tbody').append(row);
  });
}
/////////////////////////
// Dataflow Sort
function sortTable(){
  var rows = $('#dataflowtable tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#dataflowtable').children('tbody').append(row);
  });
}
/////////////////////////
// User Sort
function sortTable(){
  var rows = $('#usertable tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#usertable').children('tbody').append(row);
  });
}
/////////////////////////
// kpi no views
function sortTable(){
  var rows = $('#kpi_no_views_table tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#kpi_no_views_table').children('tbody').append(row);
  });
}
/////////////////////////
// dataset no cards/dataflows
function sortTable(){
  var rows = $('#dataset_no_table tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#dataset_no_table').children('tbody').append(row);
  });
}
/////////////////////////
// dataflow no input/output sort
function sortTable(){
  var rows = $('#dataflow_no_table tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#dataflow_no_table').children('tbody').append(row);
  });
}
/////////////////////////
// User no login sort
function sortTable(){
  var rows = $('#user_no_table tbody  tr').get();

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().toUpperCase();
  var B = $(b).children('td').eq(1).text().toUpperCase();

  if(A < B) {
    return -1;
  }

  if(A > B) {
    return 1;
  }

  return 0;

  });

  $.each(rows, function(index, row) {
    $('#user_no_table').children('tbody').append(row);
  });
}


