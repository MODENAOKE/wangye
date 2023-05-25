function gopage(pno,psize){
  
  var dzz5 = document.getElementsByClassName("dzz5");
  var num = dzz5.length;//表格所有行数(所有记录数)
  var totalpage = 0;//总页数
  var pagesize = psize;//每页显示行数
  //总共分几页
  if(num/pagesize > parseInt(num/pagesize)){
      totalpage=parseInt(num/pagesize)+1;
    }else{
      totalpage=parseInt(num/pagesize);
    }
  var currentpage = pno;//当前页数
  var startrow = (currentpage - 1) * pagesize+1;//开始显示的行 31
    var endrow = currentpage * pagesize;//结束显示的行  40
    endrow = (endrow > num)? num : endrow;  //40
   
    //遍历显示数据实现分页
  for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startrow && i<=endrow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    }
  }
  
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage("+(currentpage+1)+","+psize+")\">下一页</a>";
    tempStr4= "<a href=\"#\" class=\"fanye\" onClick=\"gopage("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
} 
function gopageo(pno,psize){
  document.getElementById("ay").style.color="#3ee3ca";
  document.getElementById("a1").style.color="black";
  document.getElementById("a2").style.color="black";
  document.getElementById("a3").style.color="black";
  document.getElementById("a4").style.color="black";
  document.getElementById("a5").style.color="black";
  document.getElementById("a6").style.color="black";
  var dzz5 = document.getElementsByClassName("dzz5");
  var num = dzz5.length;//表格所有行数(所有记录数)
  var totalpage = 0;//总页数
  var pagesize = psize;//每页显示行数
  //总共分几页
  if(num/pagesize > parseInt(num/pagesize)){
      totalpage=parseInt(num/pagesize)+1;
    }else{
      totalpage=parseInt(num/pagesize);
    }
  var currentpage = pno;//当前页数
  var startrow = (currentpage - 1) * pagesize+1;//开始显示的行 31
    var endrow = currentpage * pagesize;//结束显示的行  40
    endrow = (endrow > num)? num : endrow;  //40
   
    //遍历显示数据实现分页
  for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startrow && i<=endrow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    }
  }
  
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopageo("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopageo("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopageo("+(currentpage+1)+","+psize+")\">下一页</a>";
    tempStr4= "<a href=\"#\" class=\"fanye\" onClick=\"gopageo("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
} 
function gopage1(pno,psize){
  document.getElementById("ay").style.color="black";
  document.getElementById("a1").style.color="#3ee3ca";
  document.getElementById("a2").style.color="black";
  document.getElementById("a3").style.color="black";
  document.getElementById("a4").style.color="black";
  document.getElementById("a5").style.color="black";
  document.getElementById("a6").style.color="black";
  $("div.envi").hide();
  $("div.cityengine").hide();
  $("div.c").hide();
  $("div.sqlserver").hide();
  $("div.other").hide();
    var dzz5=document.getElementsByClassName("gis");
    var num=dzz5.length;
    var totalpage=0;
    var pagesize=psize;
    if(num/pagesize>parseInt(num/pagesize)){
        totalpage=parseInt(num/pagesize)+1;
    }
    else{
        totalpage=parseInt(num/pagesize);
    }
    var currentpage=pno;
    var startRow = (currentpage - 1) * pagesize+1;
    var endRow = currentpage * pagesize;
    endRow = (endRow > num)? num : endRow;
    for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startRow && i<=endRow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    
    }
  }
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage1("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage1("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage1("+(currentpage+1)+","+psize+")\">下一页></a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage1("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
}
function gopage2(pno,psize){
  document.getElementById("ay").style.color="black";
  document.getElementById("a1").style.color="black";
  document.getElementById("a2").style.color="#3ee3ca";
  document.getElementById("a3").style.color="black";
  document.getElementById("a4").style.color="black";
  document.getElementById("a5").style.color="black";
  document.getElementById("a6").style.color="black";
  $("div.gis").hide();
  $("div.cityengine").hide();
  $("div.c").hide();
  $("div.sqlserver").hide();
  $("div.other").hide();
    var dzz5=document.getElementsByClassName("envi");
    var num=dzz5.length;
    var totalpage=0;
    var pagesize=psize;
    if(num/pagesize>parseInt(num/pagesize)){
        totalpage=parseInt(num/pagesize)+1;
    }
    else{
        totalpage=parseInt(num/pagesize);
    }
    var currentpage=pno;
    var startRow = (currentpage - 1) * pagesize+1;
    var endRow = currentpage * pagesize;
    endRow = (endRow > num)? num : endRow;
    for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startRow && i<=endRow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    
    }
  }
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage2("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage2("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage2("+(currentpage+1)+","+psize+")\">下一页></a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage2("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
}
function gopage3(pno,psize){
  document.getElementById("ay").style.color="black";
  document.getElementById("a1").style.color="black";
  document.getElementById("a2").style.color="black";
  document.getElementById("a3").style.color="#3ee3ca";
  document.getElementById("a4").style.color="black";
  document.getElementById("a5").style.color="black";
  document.getElementById("a6").style.color="black";
  $("div.gis").hide();
  $("div.cityengine").hide();
  $("div.envi").hide();
  $("div.sqlserver").hide();
  $("div.other").hide();
    var dzz5=document.getElementsByClassName("c");
    var num=dzz5.length;
    var totalpage=0;
    var pagesize=psize;
    if(num/pagesize>parseInt(num/pagesize)){
        totalpage=parseInt(num/pagesize)+1;
    }
    else{
        totalpage=parseInt(num/pagesize);
    }
    var currentpage=pno;
    var startRow = (currentpage - 1) * pagesize+1;
    var endRow = currentpage * pagesize;
    endRow = (endRow > num)? num : endRow;
    for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startRow && i<=endRow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    
    }
  }
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage3("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage3("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage3("+(currentpage+1)+","+psize+")\">下一页></a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage3("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
}
function gopage4(pno,psize){
  document.getElementById("ay").style.color="black";
  document.getElementById("a1").style.color="black";
  document.getElementById("a2").style.color="black";
  document.getElementById("a3").style.color="black";
  document.getElementById("a4").style.color="#3ee3ca";
  document.getElementById("a5").style.color="black";
  document.getElementById("a6").style.color="black";
  $("div.gis").hide();
  $("div.c").hide();
  $("div.envi").hide();
  $("div.sqlserver").hide();
  $("div.other").hide();
    var dzz5=document.getElementsByClassName("cityengine");
    var num=dzz5.length;
    var totalpage=0;
    var pagesize=psize;
    if(num/pagesize>parseInt(num/pagesize)){
        totalpage=parseInt(num/pagesize)+1;
    }
    else{
        totalpage=parseInt(num/pagesize);
    }
    var currentpage=pno;
    var startRow = (currentpage - 1) * pagesize+1;
    var endRow = currentpage * pagesize;
    endRow = (endRow > num)? num : endRow;
    for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startRow && i<=endRow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    
    }
  }
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage4("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage4("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage4("+(currentpage+1)+","+psize+")\">下一页></a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage4("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
}
function gopage5(pno,psize){
  document.getElementById("ay").style.color="black";
  document.getElementById("a1").style.color="black";
  document.getElementById("a2").style.color="black";
  document.getElementById("a3").style.color="black";
  document.getElementById("a4").style.color="black";
  document.getElementById("a5").style.color="#3ee3ca";
  document.getElementById("a6").style.color="black";
  $("div.gis").hide();
  $("div.cityengine").hide();
  $("div.envi").hide();
  $("div.c").hide();
  $("div.other").hide();
    var dzz5=document.getElementsByClassName("sqlserver");
    var num=dzz5.length;
    var totalpage=0;
    var pagesize=psize;
    if(num/pagesize>parseInt(num/pagesize)){
        totalpage=parseInt(num/pagesize)+1;
    }
    else{
        totalpage=parseInt(num/pagesize);
    }
    var currentpage=pno;
    var startRow = (currentpage - 1) * pagesize+1;
    var endRow = currentpage * pagesize;
    endRow = (endRow > num)? num : endRow;
    for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startRow && i<=endRow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    
    }
  }
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage5("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage5("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage5("+(currentpage+1)+","+psize+")\">下一页></a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage5("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
}
function gopage6(pno,psize){
  document.getElementById("ay").style.color="black";
  document.getElementById("a1").style.color="black";
  document.getElementById("a2").style.color="black";
  document.getElementById("a3").style.color="black";
  document.getElementById("a4").style.color="black";
  document.getElementById("a5").style.color="black";
  document.getElementById("a6").style.color="#3ee3ca";
  $("div.gis").hide();
  $("div.cityengine").hide();
  $("div.envi").hide();
  $("div.c").hide();
  $("div.sqlserver").hide();
    var dzz5=document.getElementsByClassName("other");
    var num=dzz5.length;
    var totalpage=0;
    var pagesize=psize;
    if(num/pagesize>parseInt(num/pagesize)){
        totalpage=parseInt(num/pagesize)+1;
    }
    else{
        totalpage=parseInt(num/pagesize);
    }
    var currentpage=pno;
    var startRow = (currentpage - 1) * pagesize+1;
    var endRow = currentpage * pagesize;
    endRow = (endRow > num)? num : endRow;
    for(var i=1;i<(num+1);i++){
    var irow = dzz5[i-1];
    if(i>=startRow && i<=endRow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    
    }
  }
  if(currentpage>1){
    tempStr1 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage6("+(1)+","+psize+")\">首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage6("+(currentpage-1)+","+psize+")\">上一页</a>"
  }else{
    tempStr1 = "<a href=\"#\" class=\"fanye\" >首页</a>";
    tempStr2 = "<a href=\"#\" class=\"fanye\">上一页</a>";
  }
  if(currentpage<totalpage){
    tempStr3 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage6("+(currentpage+1)+","+psize+")\">下一页></a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" onClick=\"gopage6("+(totalpage)+","+psize+")\">尾页</a>";
  }else{
    tempStr3 = "<a href=\"#\" class=\"fanye\" >下一页</a>";
    tempStr4 = "<a href=\"#\" class=\"fanye\" >尾页</a>";
  }
  document.getElementById("barcon1").innerHTML = currentpage;
  document.getElementById("barcon2").innerHTML = totalpage;
  document.getElementById("bar1").innerHTML = tempStr1;
  document.getElementById("bar2").innerHTML = tempStr2;
  document.getElementById("bar3").innerHTML = tempStr3;
  document.getElementById("bar4").innerHTML = tempStr4; 
}