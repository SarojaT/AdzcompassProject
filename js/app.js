function dropdown(){

     var data = '[{"Id": "0001","Name": "Ampa Crystal Inn","Address": {"line1": "Old No. 349, New No. 623","line2": "Poonamallee High Road, Aminjikarai"},"City": "Chennai","State": "Tamil Nadu","pincode": "600029","phone": "044-23741999","Type": "Budget","Rooms": "49","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0002","Name": "Hotel Devi Prema Palace","Address": {"line1": "47,Ponamalle High Road","line2": "Everest Hotel Building"},"City": "Chennai","State": "Tamil Nadu","pincode": "600003","phone": "044-42042715","Type": "Budget","Rooms": "48","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0003","Name": "Hotel Mgm Grand","Address": {"line1": "31, Santhome High Road","line2": "Mylapore"},"City": "Chennai","State": "Tamil Nadu","pincode": "600004","phone": "044-24980320,24980399","Type": "Budget","Rooms": "26","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0004","Name": "Hotel Sree Krishna","Address": {"line1": "No. 274/159","line2": "Peters Road"},"City": "Bangalore","State": "Karnataka","pincode": "900086","phone": "088-28522897,28525147","Fax": "088-28525037","Type": "Budget","Rooms": "13","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0005","Name": "Krishna Residency","Address": {"line1": "No. 37,Opposite To Kabaleeshwarar Koil","line2": "South Mada Street, Mylapore"},"City": "Cochin","State": "Kerala","pincode": " 900004","phone": "048-24643617,24641223","Type": "Budget","Rooms": " 24","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0006","Name": "L R Swami Hotels Pvt Ltd","Address": {"line1": "105, Usman Road","line2": "Thyagaraya Nagar"},"City": "Chennai","State": "Tamil Nadu","pincode": "600017","phone": "044-24339769","Type": "Budget","Rooms": "19","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0007","Name": "Picnic Hotel Pvt Ltd","Address": {"line1": "1132/2, P H Road","line2": "Park Town"},"City": "Coimbatore","State": "Tamil Nadu","pincode": "600003","phone": "044-66785888,66785889","Type": "Budget","Rooms": "57","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0008","Name": "Sudha Inn Pvt Ltd","Address": {"line1": "New No. 111, (Old No.97)","line2": "High Road"},"City": "Tirchy","State": "Tamil Nadu","pincode": "600084","phone": "044-28252255","Email": "hotelsudhainn@yahoo.co.in","Website": "www.hotelsudha.in","Type": "Budget","Rooms": "60","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0009","Name": "Tourist Home","Address": {"line1": "45, Gandhi Irwin Road","line2": "Egmore"},"City": "Chennai","State": "Tamil Nadu","pincode": "600008","phone": "044-28194679 , 42146471","Type": "Budget","Rooms": " 64","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0010","Name": "Hotel Mars Classic","Address": {"line1": "8, GST Road","line2": "Pallavaram"},"City": "Chennai","State": "Tamil Nadu","pincode": "600043","phone": "044-42076706,42076707,42076708,42076709","Email": "reservation@hotelmars.net","Website": "www.marshotels.in","Type": "1 Star","Rooms": "36","MaxPrice": "INR 2000","MinPrice": "INR 1300"},{"Id": "0011","Name": "Hotel New Park","Address": {"line1": "136 & 137, Bells Road","line2": "Near MAC, Chepauk"},"City": "Chennai","State": "Tamil Nadu","pincode": "600005","phone": "044-28588889","Email": "newparkp@yahoo.co.in","Website": "www.hotelnewpark.co.in","Type": "1 Star","Rooms": " 20","MaxPrice": "INR 2000","MinPrice": "INR 1000"},{"Id": "0012","Name": "Hotel Nirmala Dakshin","Address": {"line1": "811, Vummidiars Shopping Centre","line2": "Anna Salai, Mount Road"},"City": "Chennai","State": "Tamil Nadu","pincode": "600002","phone": "044-28520578, 28520577","Email": "nirmaladakshin@hotelschennai.com","Type": "1 Star","Rooms": "49","MaxPrice": "INR 800","MinPrice": "INR 1200"}]';

    var mydata = JSON.parse(data);


    var sel = document.getElementById('pincode');
    for(var i = 0; i < mydata.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = mydata[i].pincode;
        opt.value = mydata[i].pincode;
        sel.appendChild(opt);
    }

    var selElement = document.getElementById('type');
    var type=["Type","Budget","1 Star"];
    for(var i = 0; i < type.length; i++) {
        var optElement = document.createElement('option');
        optElement.innerHTML = type[i];
        optElement.value = type[i];
        selElement.appendChild(optElement);
    }
}


function load() 
{

    var data = '[{"Id": "0001","Name": "Ampa Crystal Inn","Address": {"line1": "Old No. 349, New No. 623","line2": "Poonamallee High Road, Aminjikarai"},"City": "Chennai","State": "Tamil Nadu","pincode": "600029","phone": "044-23741999","Type": "Budget","Rooms": "49","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0002","Name": "Hotel Devi Prema Palace","Address": {"line1": "47,Ponamalle High Road","line2": "Everest Hotel Building"},"City": "Chennai","State": "Tamil Nadu","pincode": "600003","phone": "044-42042715","Type": "Budget","Rooms": "48","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0003","Name": "Hotel Mgm Grand","Address": {"line1": "31, Santhome High Road","line2": "Mylapore"},"City": "Chennai","State": "Tamil Nadu","pincode": "600004","phone": "044-24980320,24980399","Type": "Budget","Rooms": "26","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0004","Name": "Hotel Sree Krishna","Address": {"line1": "No. 274/159","line2": "Peters Road"},"City": "Bangalore","State": "Karnataka","pincode": "900086","phone": "088-28522897,28525147","Fax": "088-28525037","Type": "Budget","Rooms": "13","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0005","Name": "Krishna Residency","Address": {"line1": "No. 37,Opposite To Kabaleeshwarar Koil","line2": "South Mada Street, Mylapore"},"City": "Cochin","State": "Kerala","pincode": " 900004","phone": "048-24643617,24641223","Type": "Budget","Rooms": " 24","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0006","Name": "L R Swami Hotels Pvt Ltd","Address": {"line1": "105, Usman Road","line2": "Thyagaraya Nagar"},"City": "Chennai","State": "Tamil Nadu","pincode": "600017","phone": "044-24339769","Type": "Budget","Rooms": "19","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0007","Name": "Picnic Hotel Pvt Ltd","Address": {"line1": "1132/2, P H Road","line2": "Park Town"},"City": "Coimbatore","State": "Tamil Nadu","pincode": "600003","phone": "044-66785888,66785889","Type": "Budget","Rooms": "57","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0008","Name": "Sudha Inn Pvt Ltd","Address": {"line1": "New No. 111, (Old No.97)","line2": "High Road"},"City": "Tirchy","State": "Tamil Nadu","pincode": "600084","phone": "044-28252255","Email": "hotelsudhainn@yahoo.co.in","Website": "www.hotelsudha.in","Type": "Budget","Rooms": "60","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0009","Name": "Tourist Home","Address": {"line1": "45, Gandhi Irwin Road","line2": "Egmore"},"City": "Chennai","State": "Tamil Nadu","pincode": "600008","phone": "044-28194679 , 42146471","Type": "Budget","Rooms": " 64","MaxPrice": "INR 1200","MinPrice": "INR 500"},{"Id": "0010","Name": "Hotel Mars Classic","Address": {"line1": "8, GST Road","line2": "Pallavaram"},"City": "Chennai","State": "Tamil Nadu","pincode": "600043","phone": "044-42076706,42076707,42076708,42076709","Email": "reservation@hotelmars.net","Website": "www.marshotels.in","Type": "1 Star","Rooms": "36","MaxPrice": "INR 2000","MinPrice": "INR 1300"},{"Id": "0011","Name": "Hotel New Park","Address": {"line1": "136 & 137, Bells Road","line2": "Near MAC, Chepauk"},"City": "Chennai","State": "Tamil Nadu","pincode": "600005","phone": "044-28588889","Email": "newparkp@yahoo.co.in","Website": "www.hotelnewpark.co.in","Type": "1 Star","Rooms": " 20","MaxPrice": "INR 2000","MinPrice": "INR 1000"},{"Id": "0012","Name": "Hotel Nirmala Dakshin","Address": {"line1": "811, Vummidiars Shopping Centre","line2": "Anna Salai, Mount Road"},"City": "Chennai","State": "Tamil Nadu","pincode": "600002","phone": "044-28520578, 28520577","Email": "nirmaladakshin@hotelschennai.com","Type": "1 Star","Rooms": "49","MaxPrice": "INR 800","MinPrice": "INR 1200"}]';

    var mydata = JSON.parse(data);

    var e = document.getElementById("pincode");
    var d = document.getElementById("type");
    var strUser = e.options[e.selectedIndex].value;
    var strType = d.options[d.selectedIndex].value;
    var div = document.getElementById('data');
    var name = document.getElementById("name").value;
    for(var i = 0;i < mydata.length; i++)
    {
		if((mydata[i].City.toUpperCase()==name.toUpperCase())&&(strUser == mydata[i].pincode || strUser == "Pincode" )&&(strType==mydata[i].Type || strType == "Type"  ))
        {
            div.innerHTML =  div.innerHTML  +"<h><b>Id:</b> "+mydata[i].Id+"</h><br>" + "<h><b>Name: </b>" +mydata[i].Name +"</h ><br>" +"<h><b>City: </b>" + mydata[i].City +"</h><br>" + "<h><b>State: </b>" + mydata[i].State + "</h><br>" + "<h><b>Pincode: </b>" + mydata[i].pincode +"</h><br>"  + "<h><b>Phone Number: </b>" + mydata[i].phone + "</h><br>" + "<h><b>Email: </b><a href= >" + mydata[i].Email + "</a></h><br>" + "<h><b>Type: </b>" + mydata[i].Type + "</h><br>" + "<h><b>Rooms: </b>" + mydata[i].Rooms + "</h><br>" + "<h><b>Maximum Price: </b>" + mydata[i].MaxPrice + "</h><br>"  + "<h><b>Minimum Price: </b>" + mydata[i].MinPrice + "</h><br>" + "<h><b>Address Line1: </b>" + mydata[i].Address.line1 + "</h><br>" + "<h><b>Address Line2: </b>" + mydata[i].Address.line2 + "</h><br>" + "<h><b>Website:</b><a href=>" + mydata[i].Website + "</a></h><br><hr></hr>";

         }
    }

}

 
