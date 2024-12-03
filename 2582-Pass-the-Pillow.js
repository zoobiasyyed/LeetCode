/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
   const fullRounds = Math.floor(time / (n - 1));
   const timeLeft = time % (n -1); 
   if (fullRounds % 2 === 0){
    return timeLeft +1;
   } else {
    return n - timeLeft; 
   }
   return -1; 
};