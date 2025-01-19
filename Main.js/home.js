// helps reveal what is hidden i.e(<div> row1)
document.getElementById ("reveal-button").addEventListener("click", function() {
    var row1 = document.getElementById ("row1");
        if (row1.style.display === "none" || row1.style.display === "") {
            row1.style.display = "block";
        } else {
            row1.style.display ="none";
        }
    })

    const row1 = document.getElementById("row1");
    const revealButton = document.getElementById("reveal-button");
    
    const items = row1.children; // Get all <li> items
    const itemWidth = items[0].getBoundingClientRect().width; // Get the width of one item
    const totalItems = items.length;
    
    // Clone the first few items to the end for seamless looping
    for (let i = 0; i < totalItems; i++) {
      const clone = items[i].cloneNode(true);
      row1.appendChild(clone);
    }
    
    // Initial state
    let currentIndex = 0;
    
    // Move the carousel on button click
    revealButton.addEventListener("click", () => {
      currentIndex++;
      row1.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
      row1.style.transition = "transform 0.5s ease-in-out";
    
      // Loop back when reaching the end
      if (currentIndex === totalItems) {
        setTimeout(() => {
          row1.style.transition = "none"; // Disable animation
          currentIndex = 0; // Reset index
          row1.style.transform = "translateX(0)"; // Jump to the start
        }, 500); // Match the transition duration
      }
    });
                