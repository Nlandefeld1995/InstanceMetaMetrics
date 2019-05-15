


function loader(){
        document.getElementById("cloader").style.display = "none";
        document.getElementById("myDivc").style.display = "inline";
}


// card data
function card_data_pull() {

    document.getElementById("cloader").style.display = "inline";
    document.getElementById("myDivc").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";


    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

    domo.get('/data/v1/card_dataset?filter=instance_name='+y+',environment='+b , {format: 'array-of-objects'}).then(card1);
    console.log('/data/v1/card_dataset?filter=instance_name='+y+',environment='+b);

}

function card1(data){ console.log('card',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("cloader").style.display = "none";
    document.getElementById("myDivc").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:200px\">"+data[i].kpi_title+"</td>";
        html+="<td style=\"width:100px\">"+data[i].kpi_id+"</td>";
        html+="<td style=\"width:100px\">"+data[i].page_id+"</td>";
        html+="<td style=\"width:100px\">"+data[i].kpi_type+"</td>";
        html+="<td style=\"width:200px\">"+data[i].data_source_id+"</td>";
        html+="<td style=\"width:200px\">"+data[i].kpi_responsible_user_name+"</td>";
        html+="<td style=\"width:130px\">"+data[i].kpi_views_last_30_days+"</td>";
        html+="<td style=\"width:130px\">"+data[i].kpi_views_last_12_months+"</td>";
        html+="<td style=\"width:130px\">"+data[i].kpi_views_all_time+"</td>";
        html+="<td style=\"display:none\">"+data[i].data_source_name+"</td>";
        html+="<td style=\"display:none\">"+data[i].page_title+"</td>";
        html+="<td style=\"display:none\">"+data[i].kpi_responsible_user_email+"</td>";
        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("card_tbody").innerHTML = html;

    document.getElementById("cloader").style.display = "none";
    document.getElementById("myDivc").style.display = "inline";
}
}


// page data
function page_data_pull() {
    document.getElementById("ploader").style.display = "inline";
    document.getElementById("myDivp").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";

    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

        domo.get('/data/v1/page_dataset?filter=instance_name='+y+',environment='+b , {format: 'array-of-objects'}).then(page1);
        console.log('/data/v1/page_dataset?filter=instance_name='+y+',environment='+b );
    
}

function page1(data){ console.log('page',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("ploader").style.display = "none";
    document.getElementById("myDivp").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:200px\">"+data[i].page_title+"</td>";
        html+="<td style=\"width:200px\">"+data[i].page_id+"</td>";
        html+="<td style=\"width:200px\">"+data[i].page_type+"</td>";
        html+="<td style=\"width:200px\">"+data[i].parent_page_title+"</td>";
        html+="<td style=\"width:200px\">"+data[i].parent_page_id+"</td>";
        html+="<td style=\"width:200px\">"+data[i].page_responsible_user_name+"</td>";
        html+="<td style=\"display:none\">"+data[i].page_responsible_user_email+"</td>";
        html+="<td style=\"display:none\">"+data[i].parent_page_responsible_user_email+"</td>";

        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("page_tbody").innerHTML = html;
    document.getElementById("ploader").style.display = "none";
    document.getElementById("myDivp").style.display = "inline";
}
}

// Dataset data

function dataset_data_pull() {
    document.getElementById("dloader").style.display = "inline";
    document.getElementById("myDivd").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";


    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

        domo.get('/data/v1/dataset_dataset?filter=instance_name='+y+',environment='+b, {format: 'array-of-objects'}).then(dataset1);
        console.log('/data/v1/dataset_dataset?filter=instance_name='+y+',environment='+b);
    
}

function dataset1(data){ console.log('dataset',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("dloader").style.display = "none";
    document.getElementById("myDivd").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:250px\">"+data[i].data_source_name+"</td>";
        html+="<td style=\"width:250px\">"+data[i].data_source_id+"</td>";
        html+="<td style=\"width:200px\">"+data[i].data_source_type+"</td>";
        html+="<td style=\"width:200px\">"+data[i].number_of_cards+"</td>";
        html+="<td style=\"width:200px\">"+data[i].dataset_linked_to_dataflow+"</td>";
        html+="<td style=\"width:200px\">"+data[i].data_source_responsible_user_name+"</td>";
        html+="<td style=\"display:none\">"+data[i].data_source_responsible_user_email+"</td>";
        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("dataset_tbody").innerHTML = html;
    document.getElementById("dloader").style.display = "none";
    document.getElementById("myDivd").style.display = "inline";
}
}
// Dataflow data

function dataflow_data_pull() {
    document.getElementById("dfloader").style.display = "inline";
    document.getElementById("myDivdf").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";

    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

        domo.get('/data/v1/dataflow_dataset?filter=instance_name='+y+',environment='+b, {format: 'array-of-objects'}).then(dataflow1);
        console.log('/data/v1/dataflow_dataset?filter=instance_name='+y+',environment='+b);
    
}

function dataflow1(data){ console.log('dataflow',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("dfloader").style.display = "none";
    document.getElementById("myDivdf").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:300px\">"+data[i].dataflow_id+"</td>";
        html+="<td style=\"width:300px\">"+data[i].df_input_output+"</td>";
        html+="<td style=\"width:300px\">"+data[i].data_source_id+"</td>";
        html+="<td style=\"width:300px\">"+data[i].data_source_name+"</td>";
        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("dataflow_tbody").innerHTML = html;
    document.getElementById("dfloader").style.display = "none";
    document.getElementById("myDivdf").style.display = "inline";
}
}

// User data

function user_data_pull() {
    document.getElementById("uloader").style.display = "inline";
    document.getElementById("myDivu").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";

    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

        domo.get('/data/v1/user_dataset?filter=instance_name='+y+',environment='+b, {format: 'array-of-objects'}).then(user1);
        console.log('/data/v1/user_dataset?filter=instance_name='+y+',environment='+b);
    
}

function user1(data){ console.log('user',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("uloader").style.display = "none";
    document.getElementById("myDivu").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:200px\">"+data[i].user_name+"</td>";
        html+="<td style=\"width:250px\">"+data[i].user_email_address+"</td>";
        html+="<td style=\"width:180px\">"+data[i].user_role+"</td>";
        html+="<td style=\"width:200px\">"+data[i].login_count+"</td>";
        html+="<td style=\"width:200px\">"+data[i].num_kpi+"</td>";
        html+="<td style=\"width:200px\">"+data[i].num_page+"</td>";
        html+="<td style=\"width:200px\">"+data[i].num_dataset+"</td>";
        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("user_tbody").innerHTML = html;
    document.getElementById("uloader").style.display = "none";
    document.getElementById("myDivu").style.display = "inline";
}
}
/////////////////////////

// kpi no views
function card_no_views_data_pull() {
    document.getElementById("cnoloader").style.display = "inline";
    document.getElementById("myDivcno").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";

    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

        domo.get('/data/v1/card_no_views_dataset?filter=instance_name='+y+',environment='+b, {format: 'array-of-objects'}).then(card2);
        console.log('/data/v1/card_no_views_dataset?filter=instance_name='+y+',environment='+b);
    
}

function card2(data){ console.log('no_kpi_views',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("cnoloader").style.display = "none";
    document.getElementById("myDivcno").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:200px\">"+data[i].kpi_title+"</td>";
        html+="<td style=\"width:100px\">"+data[i].kpi_id+"</td>";
        html+="<td style=\"width:100px\">"+data[i].page_id+"</td>";
        html+="<td style=\"width:100px\">"+data[i].kpi_type+"</td>";
        html+="<td style=\"width:200px\">"+data[i].data_source_id+"</td>";
        html+="<td style=\"width:200px\">"+data[i].kpi_responsible_user_name+"</td>";
        html+="<td style=\"width:130px\">"+data[i].kpi_views_last_30_days+"</td>";
        html+="<td style=\"width:130px\">"+data[i].kpi_views_last_12_months+"</td>";
        html+="<td style=\"width:130px\">"+data[i].kpi_views_all_time+"</td>";
        html+="<td style=\"display:none\">"+data[i].data_source_name+"</td>";
        html+="<td style=\"display:none\">"+data[i].page_title+"</td>";
        html+="<td style=\"display:none\">"+data[i].kpi_responsible_user_email+"</td>";
        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("Kpi_no_view_tbody").innerHTML = html;
    document.getElementById("cnoloader").style.display = "none";
    document.getElementById("myDivcno").style.display = "inline";
}
}

/////////
// dataset no cards not attached to dataflow




function dataset_no_kpi_flow_data_pull() {
    document.getElementById("dnoloader").style.display = "inline";
    document.getElementById("myDivdno").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";

    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

        domo.get('/data/v1/dataset_no_card_no_flow_dataset?filter=instance_name='+y+',environment='+b, {format: 'array-of-objects'}).then(dataset2);
        console.log('/data/v1/dataset_no_card_no_flow_dataset?filter=instance_name='+y+',environment='+b);
    
}

function dataset2(data){ console.log('dataset_no_kpi_flow',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("dnoloader").style.display = "none";
    document.getElementById("myDivdno").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:250px\">"+data[i].data_source_name+"</td>";
        html+="<td style=\"width:250px\">"+data[i].data_source_id+"</td>";
        html+="<td style=\"width:200px\">"+data[i].data_source_type+"</td>";
        html+="<td style=\"width:200px\">"+data[i].number_of_cards+"</td>";
        html+="<td style=\"width:200px\">"+data[i].dataset_linked_to_dataflow+"</td>";
        html+="<td style=\"width:200px\">"+data[i].data_source_responsible_user_name+"</td>";
        html+="<td style=\"display:none\">"+data[i].data_source_responsible_user_email+"</td>";
        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("dataset_no_card_flow_tbody").innerHTML = html;
    document.getElementById("dnoloader").style.display = "none";
    document.getElementById("myDivdno").style.display = "inline";
}
}


//////////////////////////////
// orphaned Kpi list
function orphaned_kpi_data_pull() {
    document.getElementById("kpiorphloader").style.display = "inline";
    document.getElementById("myDivdKO").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";


    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

        domo.get('/data/v1/orphaned_kpi_data_pull?filter=instance_name='+y+',environment='+b, {format: 'array-of-objects'}).then(cardorph);
        console.log('/data/v1/orphaned_kpi_data_pull?filter=instance_name='+y+',environment='+b);
    
}

function cardorph(data){ console.log('hit second function');console.log('kpi_orphaned',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("kpiorphloader").style.display = "none";
    document.getElementById("myDivdKO").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:200px\">"+data[i].kpi_title+"</td>";
        html+="<td style=\"width:100px\">"+data[i].kpi_id+"</td>";
        html+="<td style=\"width:100px\">"+data[i].page_id+"</td>";
        html+="<td style=\"width:100px\">"+data[i].kpi_type+"</td>";
        html+="<td style=\"width:200px\">"+data[i].data_source_id+"</td>";
        html+="<td style=\"width:100px\">"+data[i].kpi_responsible_user_name+"</td>";
        html+="<td style=\"width:130px\">"+data[i].kpi_views_last_30_days+"</td>";
        html+="<td style=\"width:130px\">"+data[i].card_has_owner+"</td>";
        html+="<td style=\"width:130px\">"+data[i].exists_on_page+"</td>";
        html+="<td style=\"display:none\">"+data[i].data_source_name+"</td>";
        html+="<td style=\"display:none\">"+data[i].page_title+"</td>";
        html+="<td style=\"display:none\">"+data[i].kpi_responsible_user_email+"</td>";
        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("kpi_orphaned_tbody").innerHTML = html;
    document.getElementById("kpiorphloader").style.display = "none";
    document.getElementById("myDivdKO").style.display = "inline";
}
}

/////////////////
// user <= 5 logins last 30 days


function user_no_login_data_pull() {
    document.getElementById("unoloader").style.display = "inline";
    document.getElementById("myDivuno").style.display = "none";
    document.getElementById("nodata").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("eye-l").style.display = "none";
    document.getElementById("eye-r").style.display = "none";
    document.getElementById("nose").style.display = "none";
    document.getElementById("mouth").style.display = "none";

   
    var x = document.getElementById("InstanceSearch");
    var a = document.getElementById("EnvironmentSearch");
    var def = x.defaultValue;
    var defa = a.defaultValue;
    var cur = x.value;
    var cura = a.value;
    if (def == cur){
        var y;
        y=def
    }
    else {
        var y;
        y=cur;
    }
    if (defa==cura){
        var b;
        b = defa;
    }
    else{
        var b;
        b = cura;
    }

       domo.get('/data/v1/user_no_logins_dataset?filter=instance_name='+y+',environment='+b, {format: 'array-of-objects'}).then(user2);
       console.log('/data/v1/user_no_logins_dataset?filter=instance_name='+y+',environment='+b);

    
}

function user2(data){ console.log('user_no_logins',data); 
if (data.length<1){
        console.log('no data');
    document.getElementById("unoloader").style.display = "none";
    document.getElementById("myDivuno").style.display = "none";
    document.getElementById("nodata").style.display = "block";
    document.getElementById("man").style.display = "block";
    document.getElementById("eye-l").style.display = "block";
    document.getElementById("eye-r").style.display = "block";
    document.getElementById("nose").style.display = "block";
    document.getElementById("mouth").style.display = "block";
}
else{
 var html = "<table><tbody>";
    for (var i = 0; i < data.length; i++) {
        html+="<tr>";
        html+="<td style=\"width:200px\">"+data[i].user_name+"</td>";
        html+="<td style=\"width:250px\">"+data[i].user_email_address+"</td>";
        html+="<td style=\"width:180px\">"+data[i].user_role+"</td>";
        html+="<td style=\"width:200px\">"+data[i].login_count+"</td>";
        html+="<td style=\"width:200px\">"+data[i].num_kpi+"</td>";
        html+="<td style=\"width:200px\">"+data[i].num_page+"</td>";
        html+="<td style=\"width:200px\">"+data[i].num_dataset+"</td>";

        html+="</tr>";

    }
    html+="</tbody></table>";

    document.getElementById("user_no_login_tbody").innerHTML = html;
    document.getElementById("unoloader").style.display = "none";
    document.getElementById("myDivuno").style.display = "inline";
}
}