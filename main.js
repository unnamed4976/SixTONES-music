'use strict';

{

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const results = ['ST', 'NAVIGATOR', 'Special Order', 'NEW ERA', 'Curtain Call', 'Dance All Night','S.I.X', 'Coffee & Cream', 'Imitation Rain', 'Lifetime', 'この星のHIKARI', 'BE CRAZY', 'Laugh In the LIFE', 'Rollin`', 'RAM-PAM-PAM'];

  const n = Math.floor(Math.random() * results.length);

  result.textContent = results[n];

  // switch(n) {
  //   case 0:
  //     result.textContent = '大吉';
  //     break;
  //   case 1:
  //     result.textContent = '中吉';
  //     break;
  //   case 2:
  //     result.textContent = '凶';
  //     break;
  // }

});

}



