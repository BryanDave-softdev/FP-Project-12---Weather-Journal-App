function trackMood() {
  const mood = document.getElementById("moodInput") .value.toLowerCase();
  const response = document.getElementById("response");

  if (mood === "happy") {
    response.textContent = "😊 Keep smiling! Today is a good day!";
  } else if (mood === "sad") {
    response.textContent = "😢 It's okay to feel sad. Better days are coming.";
  } else if ( mood === "tired") {
    response.textContent = "😴 Don't forget to rest and recharge.";
  } else if (mood === "excited") {
    response.textContent = "🎉 Woohoo1 Go chase your goals today!";
  }else if (mood === "angry") {
    response.textContent = "😡 Breathe in... breathe out. You've got this.";
  } else {
    response.textContent = "🤔 Thanks for sharing. Keep going!"; 
  }

document.getElementById("moodInput").value = "";
}