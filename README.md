
Some code provided in demo and used here

1. Provide a way to select a disc from the top of a tower
    1. click handler on each tower

      tower.addEventListener("click", ___) 

    2. "pick up" the topmost disc on the tower??
    how do we pick up the topmost disc?
2. Provide a way to "drop" the disk on top of another tower, if     the rules allow  
    1. click handler on each tower
    2. see if the disc to drop is smaller than the topmost disc
    on the tower
    ?? how do we get the top disc?
    ?? how do we compare the widths of two discs??

          disc1.dataset.width < disc3.dataset.width

    3. if so, add the disc to the tower

          tower.appendChild(disc)  
          
3. check to see if the game is over--"winning condition"
    1. if all four discs are in the third tower, game over
