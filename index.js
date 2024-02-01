
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)




var tl = gsap.timeline({ scrollTrigger: {
    trigger: 'body',
    start: '15% 20%',
    end: '28% 80%',
    scrub: true,
 markers:true

  }});
  


tl.to('.text-area-hover', {
  width: '100%',
  
  ease: "expo.easeInOut"
})









document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".logo", {
      opacity: 0,
      x: -100,
      duration:0.7,
      ease: "expo.easeInOut"
    });

    gsap.from("div a", {
      opacity: 0,
      y: -20,
      duration:1,
      delay:0.4,
      ease: "expo.easeInOut"
    });

    gsap.from(".user-circle", {
      opacity: 0,
      x: -20,
      delay: 0.5,
      ease: "expo.easeInOut"
    });

    gsap.from(".fa-shopping-cart", {
      opacity: 0,
      x: -20,
      delay: 0.6,
      ease: "expo.easeInOut"
    });

    gsap.from(".titles h2", {
      opacity: 0,
      y: 20,
      delay: 1.1,
      ease: "expo.easeInOut"
    });
    gsap.from(".titles h1", {
      opacity: 0,
      y: 20,
      delay: 1.4,
      ease: "expo.easeInOut"
    });

    gsap.from(".titles button", {
      opacity: 0,
      y: 20,
      delay: 1.7,
      ease: "expo.easeInOut"
    });

    gsap.from(".line-one", {
      opacity: 0,
      y: -800,
      delay: 2,
      ease: "expo.easeInOut"
    });

    gsap.from(".line-two", {
      opacity: 0,
      y: -800,
      delay: 2.4,
      ease: "expo.easeInOut"
    });

    gsap.from(".sec-1-img", {
      opacity: 0,
      y: -800,
      delay: 2.7,
      duration:1.5,
      ease: "expo.easeInOut"
    });
  });
  function closeBtn(){
    var ProfileTOggle= document.getElementsByClassName('profile-toggle')[0];

  
  
  }



  // table database work
var mainTable = document.getElementsByTagName('table')[0];
// Wait for the HTML content to be fully loaded before trying to access and modify it
var tableData = [{
  Title: "ALL",
  time: ['07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'],
  monday: ['FITNESS CLASS', 'OPEN GYM', '', 'CARDIO BOX', ''],
  tuesday: ['', 'BODY BALANCE', 'CROSS FIT', 'FITNESS CLASS', ''],
  wednesday: ['FITNESS CLASS', 'OPEN GYM', '', 'CARDIO BOX', ''],
  thursday: ['CARDIO BOX', '', 'OPEN GYM', '', 'CARDIO BOX'],
  friday: ['INTENSE BODYBUILDING', '', 'BODY BALANCE', 'CARDIO BOX', ''],
},{
Title: "BodyBuilding",
time: ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 1:00'],
monday: ['', '', '', '', ''],
tuesday: ['', ' ', ' ', '', 'BODY PUMP'],
wednesday: [' ', ' ', '', ' ', ''],
thursday: [' ', '', ' ', '', ' '],
friday: ['BODY PUMP', '', ' ', ' ', ''],
},{
  Title: "Cardio",
  time: ['07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'],
  monday: ['FITNESS CLASS', '', '', 'CARDIO BOX', ''],
  tuesday: ['', ' ', ' ', ' ', ''],
  wednesday: [' ', ' ', 'CROSSFIT', 'FITNESS CLASS', ''],
  thursday: ['CARDIO BOX', '', ' ', '', 'CARDIO BOX'],
  friday: [' ', '', ' ', 'CARDIO BOX', ''],
  },
  {
    Title: "Cardio",
    time: ['07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'],
    monday: [' ', 'OPEN GYM', '', ' ', ''],
    tuesday: ['OPEN GYM', ' ', ' ', ' ', ''],
    wednesday: [' ', ' ', '', ' ', ''],
    thursday: [' ', '', 'OPEN GYM ', '', 'CARDIO BOX'],
    friday: [' ', 'OPEN GYM', ' ', 'OPEN GYM', ''],
    },{
      Title: "PowerLifting",
      time: ['07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'],
      monday: [' ', '', '', ' ', ''],
      tuesday: ['', ' ', ' ', ' INTENSE BODYBUILDING', ''],
      wednesday: [' ', 'INTENSE BODYBUILDING ', '', ' ', ''],
      thursday: ['INTENSE BODYBUILDING', '', ' ', '', 'BODY BALANCE'],
      friday: [' ', '', ' ', 'INTENSE BODYBUILDING', ''],
      }
];
document.addEventListener('DOMContentLoaded', function() {
  allTable(); // Call the function you want to display initially
  
});

// Optionally, you can add a refresh event listener to update the table when the page is refreshed
window.addEventListener('beforeunload', function() {
  // You can perform some actions here before the page is unloaded (e.g., save data).
});

var tableBody = document.getElementById('table-body');

function allTable(){
  mainTable.style.opacity='0';
  setTimeout(()=>{
    mainTable.style.opacity='1';
  }
  ,500)
  tableBody.innerHTML="";
    for (let i = 0; i < tableData[0].time.length; i++) {
      tableBody.innerHTML += `
          <tr>
              <th scope='row' class='last-row'>${tableData[0].time[i]}</th>
              <td>${tableData[0].monday[i]}</td>
              <td>${tableData[0].tuesday[i]}</td>
              <td>${tableData[0].wednesday[i]}</td>
              <td>${tableData[0].thursday[i]}</td>
              <td class='first-row'>${tableData[0].friday[i]}</td>
          </tr>`;
  }
}
function bodyTable(){
mainTable.style.opacity='0';
setTimeout(()=>{
  mainTable.style.opacity='1';
}
,500)

  tableBody.innerHTML="";
  for (let i = 0; i <= 4; i++) {
    tableBody.innerHTML += `
        <tr>
            <th scope='row' class='last-row'>${tableData[1].time[i]}</th>
            <td>${tableData[1].monday[i]}</td>
            <td>${tableData[1].tuesday[i]}</td>
            <td>${tableData[1].wednesday[i]}</td>
            <td>${tableData[1].thursday[i]}</td>
            <td class='first-row'>${tableData[1].friday[i]}</td>
            
        </tr>`;
}
}
function cardioTable(){
  mainTable.style.opacity='0';
  setTimeout(()=>{
    mainTable.style.opacity='1';
  }
  ,500)
  tableBody.innerHTML="";
  for (let i = 0; i <= 4; i++) {
    tableBody.innerHTML += `
        <tr>
            <th scope='row' class='last-row'>${tableData[2].time[i]}</th>
            <td>${tableData[2].monday[i]}</td>
            <td>${tableData[2].tuesday[i]}</td>
            <td>${tableData[2].wednesday[i]}</td>
            <td>${tableData[2].thursday[i]}</td>
            <td class='first-row'>${tableData[2].friday[i]}</td>
            
        </tr>`;
}
}
function gymTable(){
  mainTable.style.opacity='0';
  setTimeout(()=>{
    mainTable.style.opacity='1';
  }
  ,400)
  tableBody.innerHTML="";
  for (let i = 0; i <= 4; i++) {
    tableBody.innerHTML += `
        <tr>
            <th scope='row' class='last-row'>${tableData[3].time[i]}</th>
            <td>${tableData[3].monday[i]}</td>
            <td>${tableData[3].tuesday[i]}</td>
            <td>${tableData[3].wednesday[i]}</td>
            <td>${tableData[3].thursday[i]}</td>
            <td class='first-row'> ${tableData[3].friday[i]}</td>
            
        </tr>`;
}
}
function powerTable(){
  mainTable.style.opacity='0';
  setTimeout(()=>{
    mainTable.style.opacity='1';
  }
  ,400)
  tableBody.innerHTML="";
  for (let i = 0; i < 5; i++) {
    tableBody.innerHTML += `
        <tr>
            <th scope='row' class='last-row'>${tableData[4].time[i]}</th>
            <td>${tableData[4].monday[i]}</td>
            <td>${tableData[4].tuesday[i]}</td>
            <td>${tableData[4].wednesday[i]}</td>
            <td>${tableData[4].thursday[i]}</td>
            <td class='first-row'> ${tableData[4].friday[i]}</td>
            
        </tr>`;
}
}






 
 