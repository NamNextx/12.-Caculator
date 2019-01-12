/*
function cong() {
    datain=document.getElementById("fnumber").value;
    dataout=document.getElementById("snumber").value;
   // document.write(datain+dataout);
    var int=parseInt(dataout)+parseInt(datain);
    var cong=document.getElementById('idresult');
    cong.innerHTML=int;
}
function tru() {
    datain=parseInt(document.getElementById("fnumber").value);
    dataout=parseInt(document.getElementById("snumber").value);
    // document.write(datain+dataout);
    var int=parseInt(datain- dataout);
    var tru=document.getElementById('idresult');
    tru.innerHTML=int;
}
function nhan() {
    datain=document.getElementById("fnumber").value;
    dataout=document.getElementById("snumber").value;
    // document.write(datain+dataout);
    var int=parseInt(dataout)*parseInt(datain);
    var nhan1=document.getElementById('idresult');
    nhan1.innerHTML=int;
}
function chia() {
    datain=document.getElementById("fnumber").value;
    dataout=document.getElementById("snumber").value;
    // document.write(datain+dataout);
    var int=parseInt(datain) / parseInt(dataout);
    var chia=document.getElementById('idresult');
    chia.innerHTML=int;
}
*/
function tinhToan(clicked_id) {
    datain=parseInt(document.getElementById("fnumber").value);
    dataout=parseInt(document.getElementById("snumber").value);


    if(clicked_id == "idcong" && datain!="NaN"){
        document.write(datain)
        var chia=document.getElementById('idresult');

        var tong= datain + dataout;
        chia.innerHTML="Result:" + tong;
    }
    else if (clicked_id=="idtru"){
        var chia=document.getElementById('idresult');
        var hieu= datain - dataout;
        chia.innerHTML="Result:" + hieu;
    }

}