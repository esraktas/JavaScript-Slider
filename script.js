var models = [
  {
    name: "bmw",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/3-serisi/2022/320i-1-6-sport-line",
  },
  {
    name: "skoda",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda/scala/2022/1-0-comfort-dsg",
  },
  {
    name: "mercedes",
    image: "img/mercedes.jpg",
    link: "http://www.arabalar.com.tr/mercedes/g-serisi/2014/g-350-bluetec",
  },
  {
    name: "audi",
    image: "img/audi.jpg",
    link: "http://www.arabalar.com.tr/audi/q2/2022/1-5-tfsi",
  },
  {
    name: "volvo",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo/s90/2020/2-0-d5-inscription-plus",
  },
];

var index = 0;
var slaytCount = models.length;

//random durumdayken aynı zamanda kullanıcının da istediği arabaya oklarla gidebilmesi için
var interval;

//random slide ve slider geçiş süresi ayarı 
var settings={
  duration : "1500",
  random : true
}

rastgele(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

//random durumdayken aynı zamanda kullanıcının da istediği arabaya oklarla gidebilmesi için,
//her ikisi için (sağ ve sol okları) de clearInterval olayını gerçekleştirdik.
document.querySelectorAll('.fa').forEach(function(item){
  item.addEventListener('mouseenter',function(){
    clearInterval(interval);
  })
})

//mouseenter olayından sonra random slide işlemi duruyor. bunun olmaması için;
document.querySelectorAll(".fa").forEach(function(item){
  item.addEventListener("mouseleave", function(){
    rastgele(settings);
  })
})

function rastgele(settings){

  //üst üste aynı indexi yazdırmaması için, do-while döngüsü kullanıldı.
  var prev;


  interval = setInterval(function(){

    if(settings.random){
      //random index şeklinde

      do{

        index = Math.floor(Math.random() *slaytCount) // 0 ile 4 arasında sayı üretir(0-4 dahil)
      }while(index==prev)
      
     
      
    }else{
      //artan şekilde

      if(slaytCount == index+1){
        index = -1;
      }
      index++;
      showSlide(index);


    
    }
    showSlide(index);



  }, settings.duration)
}

function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

