document.getElementById("cardForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get input values
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
  
    // Update card preview
    document.getElementById("cardName").textContent = name;
    document.getElementById("cardTitle").textContent = title || "No Title Provided";
    document.getElementById("cardPhone").textContent = phone;
    document.getElementById("cardEmail").textContent = email;
    document.getElementById("cardWebsite").textContent = website || "No Website Provided";
  
    // Show the preview and the download button
    document.getElementById("cardPreview").style.display = "block";
    document.getElementById("downloadBtn").style.display = "inline-block";
  });
  
  // Function to download the card as an image (screenshot of the card)
  document.getElementById("downloadBtn").addEventListener("click", function() {
    const card = document.getElementById("previewCard");
    
    // Create a canvas element to capture the card content
    html2canvas(card).then(function(canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "digital_visiting_card.png";
      link.click();
    });
  });
  