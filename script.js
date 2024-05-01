let hour = document.getElementsByTagName("select")[0];

for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", i);
  option.innerHTML = i;
  hour.appendChild(option);
}

let minute = document.getElementsByTagName("select")[1];

for (let i = 1; i <= 59; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", i);
  option.innerHTML = i;
  minute.appendChild(option);
}

let btn = document.querySelector("button");

let butn = document.createElement('button');
      butn.innerHTML = 'Alarm Off';
      document.getElementsByClassName('submit')[0].appendChild(butn);
      butn.style.display = 'none';
let get_user_data = () => {
  user_hour = hour.value;
  user_hour = parseInt(user_hour);
  user_min = minute.value;
  user_min = parseInt(user_min);
  let user_time = document.getElementsByTagName("select")[2].value;
  let user_data = { user_hour, user_min, user_time };
  return user_data;
};

let real_hour = (user) => {
  let interval = setInterval(() => {
    let real_hour = new Date().getHours();
    let real_min = new Date().getMinutes();
    real_hour = parseInt(real_hour);

    let user_val = user();
    let { user_hour, user_min, user_time } = user_val;
    
    if(user_time == 'PM'){
        user_hour +=12;
         if(user_hour > real_hour && user_min > real_min){
            let minute = user_min - real_min;
            let hour = user_hour - real_hour;
                
            console.log(`There is still ${hour} hour and ${minute} minute left`);
         }
         else if(user_hour > real_hour && user_min < real_min){
             user_hour -=1;
             user_min += 60;
             let hour = user_hour -real_hour;
             let min = user_min - real_min;
             console.log(`There is still ${hour} hour and ${min} minutes left`);
         }
         else if(real_hour > user_hour && real_min > user_min){
            user_hour +=24;
            user_min +=60;
            let hour = user_hour - real_hour;
            let min = user_min - real_min;
            console.log(`There is still ${hour} hour and ${min} minutes left`);
         }
         else if(real_hour > user_hour && real_min < user_min){
            user_hour += 23;
            let hour = user_hour - real_hour;
            let min = user_min - real_min;
            console.log(`There is still ${hour} hour and ${min} minutes left`);
         }
         else if( real_hour == user_hour && real_min < user_min){
          let hour = 0;
          let min = user_min - real_min;
          console.log(`There is still ${hour} hour and ${min} minutes left`);
         }
         else if( real_hour == user_hour && real_min > user_min){
          let hour = 23;
            user_min += 60;
          let min = user_min - real_min;
          console.log(`There is still ${hour} hour and ${min} minutes left`);
         }
         else if(real_hour == user_hour && real_min == user_min){
          var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/4383');
          audio.play();
          btn.remove();
          butn.style.display = 'block'
           butn.addEventListener('click',()=>{
            audio.pause();
       
           })
         }
         else{
          console.log("There are still some bugs")
         }
    }
    else{
      if(user_hour > real_hour && user_min > real_min){
        let minute = user_min - real_min;
        let hour = user_hour - real_hour;
            
        console.log(`There is still ${hour} hour and ${minute} minute left`);
     }
     else if(user_hour > real_hour && user_min < real_min){
         user_hour -=1;
         user_min += 60;
         let hour = user_hour -real_hour;
         let min = user_min - real_min;
         console.log(`There is still ${hour} hour and ${min} minutes left`);
     }
     else if(real_hour > user_hour && real_min > user_min){
        user_hour +=23;
        user_min +=60;
        let hour = user_hour - real_hour;
        let min = user_min - real_min;
        console.log(`There is still ${hour} hour and ${min} minutes left`);
     }
     else if(real_hour > user_hour && real_min < user_min){
        user_hour += 23;
        let hour = user_hour - real_hour;
        let min = user_min - real_min;
        console.log(`There is still ${hour} hour and ${min} minutes left`);
     }
     else if( real_hour == user_hour && real_min < user_min){
      let hour = 0;
      let min = user_min - real_min;
      console.log(`There is still ${hour} hour and ${min} minutes left`);
     }
     else if( real_hour == user_hour && real_min > user_min){
      let hour = 23;
        user_min += 60;
      let min = user_min - real_min;
      console.log(`There is still ${hour} hour and ${min} minutes left`);
     }
     else if(real_hour == user_hour && real_min == user_min){
      var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/4383');
      audio.play();
      btn.remove();
      butn.style.display = 'block';
      butn.addEventListener('click',()=>{
        audio.pause()
        clearInterval(interval)
       })
     }
    }
  }, 1000);
};

btn.addEventListener("click", () => {
  real_hour(get_user_data);
});
