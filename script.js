const submitBtn = document.getElementById('submitBtn');
const entriesDiv = document.getElementById('entries');

submitBtn.addEventListener("click",() => {
  const date = document.getElementById('date').value;
  const mood = document.getElementById('mood').value;
  const temperature = document.getElementById('temperature').value;
  const notes = document.getElementById('notes').value;  

  if (!date || !mood || !temperature || !notes) {
    alert("Please fill in all fields.");
    return;
  }

  const entry = document.createElement('div');
  entry.classList.add('entry');
  entry.innerHTML = `
    <strong>Date:</strong> ${date}<br>
    <strong>Mood:</strong> ${mood}<br>
    <strong>Temperature:</strong> ${temperature}°C<br>
    <strong>Notes:</strong> ${notes}';
    
    entriesDiv.prepend(entry); 
    
document.getElementById('date').value = "";
document.getElementById('mood').value = "";
document.getElementById('temperature').value = "";
document.getElementById('notes').value = "";
});
