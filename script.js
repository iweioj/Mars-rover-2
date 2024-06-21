document.addEventListener('DOMContentLoaded', () => {
    const parts = document.querySelectorAll('.part');
    const dropAreas = document.querySelectorAll('.drop-area');
    const overlay = document.getElementById('overlay');
    const modalText = document.getElementById('modal-text');
    const nextButton = document.getElementById('next-button');
    const closeButton = document.getElementById('close-button');
    const welcomeMessage = "Welcome to the model of Perseverance, the newest model of Mars rover. Match the images to the correct dropbox and learn about the different parts of the rover!";

    let currentDraggedElement = null;
    let completedCount = 0;

    // Function to show the initial overlay with the welcome message
    function showWelcomeOverlay() {
        modalText.textContent = welcomeMessage;
        overlay.style.display = 'flex';
    }

    // Show the welcome overlay when the page is loaded
    showWelcomeOverlay();

    // Event listeners for drag and drop functionality
    parts.forEach(part => {
        part.addEventListener('dragstart', () => {
            currentDraggedElement = part;
        });
    });

    dropAreas.forEach(dropArea => {
        dropArea.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        dropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            if (dropArea.id === `drop-${currentDraggedElement.id}`) {
                dropArea.innerHTML = '';
                currentDraggedElement.style.width = '100%';
                currentDraggedElement.style.height = '100%';
                currentDraggedElement.style.objectFit = 'cover';
                dropArea.appendChild(currentDraggedElement);
                completedCount++;
                console.log(`Completed Count: ${completedCount}`);
                showOverlay(dropArea.id);
            }
        });
    });

    // Event listener for the "Next" button
    nextButton.addEventListener('click', hideOverlay);

    // Event listener for the "Close" button
    closeButton.addEventListener('click', hideOverlay);

    // Function to display the overlay with the part description
    function showOverlay(dropAreaId) {
        let partName = dropAreaId.split('-')[1];
        let partDescription;

        switch (partName) {
            case 'mast':
                partDescription = "Congratulations! You have just assembled the Mast, a crucial structure that supports the advanced scientific apparatus of the rover. One of these is the SuperCam, which studies the chemical composition of rocks remotely by combining laser-induced breakdown spectroscopy with remote micro-imaging. High-resolution, three-dimensional images and videos of the Martian landscape are provided by the Mastcam-Z, another vital instrument on the Mast. This helps scientists understand the geology of Mars and choose which exploration sites to pursue. The Mast can capture fine close-ups and panoramic photos of interesting areas because to its tilt and rotate capabilities. Since the Mast enables precise distant sensing and photography, it is essential to advancing our understanding of geology, climate history of Mars, and potential for past microbial life.";
                break;
            case 'body':
                partDescription = "Congratulations! You have put together the body. Made up of components that are critical to Perseverance, the body has a sturdy construction. The multi-mission radioisotope thermoelectric generator (MMRTG), which powers the rovers internal power supply, produces the heat and energy needed to run its systems in the abrasive Martian climate. The rovers computer and communications system, which are housed inside its body, are in charge of organizing and sending the data that the spacecrafts scientific sensors acquire back to Earth. Additionally, the body shields delicate sensors from Martian radiation, intense heat, and dust storms. The body preserves Perseverance vital systems in order to support long-term exploration and scientific study on the Red Planet.";
                break;
            case 'arm':
                partDescription = "Congratulations! You have put together The Arm, an incredibly clever and adaptable apparatus that has all the scientific instruments needed for the Mars mission. A drill has been placed in the turret assembly, located at the end of the arm, to gather core samples of Martian rock and soil. This makes it easier for scientists to thoroughly explore the surface of Mars and learn more about the composition and abundance of the minerals. In-depth analysis and close-up photos can be taken with the high-resolution cameras and instruments, which offer important new insights into the Martian geology and possible traces of ancient life. Perseverance may also undertake substantial scientific investigation and cover a vast range of terrain because the arm has the ability to grow.";
                break;
            case 'wheel':
                partDescription = "Congratulations! You have just finished assembling the Wheel, a crucial part of the Perseverance rover built to withstand the harsh terrain of Mars. Every wheel on Perseverance is composed of sturdy metal and has a diameter of approximately 52.5 centimeters (20.7 inches). They have cleats that increase durability and offer traction, allowing the rover to navigate a variety of surfaces with ease. There are six wheels on Perseverance, and each one is driven and controlled separately. Because of its construction, the rover can move very precisely and dependably over rocks, through sand, and up slopes. The wheels are designed to withstand the severe elements of Mars, including as its high temperatures and jagged rocks, so long as it is on the planet. These wheels are essential for the ability to reach its exploration objectives, collect important scientific data, and contribute to our understanding of the Red Planet because they enable reliable and effective mobility across the Martian terrain.";
                break;
        }

        modalText.textContent = partDescription;
        overlay.style.display = 'flex';

        // After showing the part description, check if all parts are completed
        if (completedCount === 4) {
            nextButton.removeEventListener('click', hideOverlay);
            nextButton.addEventListener('click', showImprovementOverlay);
        } else {
            nextButton.removeEventListener('click', showImprovementOverlay);
            nextButton.addEventListener('click', hideOverlay);
        }
    }

    // Function to display the improvement summary overlay
    function showImprovementOverlay() {
        const improvementMessage = "The Perseverance model can make use of nuclear batteries, which will contribute to a steady power supply that is necessary for the mission to operate continuously on Mars. Improved movement over the Martian terrain, better access to places, and enhanced research are all made possible by the suspension system. A navigation system powered by artificial intelligence might be advantageous for cutting-edge technologies. By relying less on humans, this will improve obstacle handling and rover maneuvering by reducing communication lag with Earth. Finally, research efficiency would increase with the use of 3D printing technology. Using printable parts that are produced immediately adds longevity to the mission and makes the rover "self-efficient" when portions of the model are damaged or require repair.  These combined technology will help create a lower cost, more stable and efficient rover model.";
        modalText.textContent = improvementMessage;
        overlay.style.display = 'flex';

        // Event listener to show thank you message after improvement message
        nextButton.removeEventListener('click', showImprovementOverlay);
        nextButton.addEventListener('click', showThankYouOverlay);
    }

    // Function to hide overlay
    function hideOverlay() {
        overlay.style.display = 'none';
    }

    // Function to display the thank you message
    function showThankYouOverlay() {
        const thankYouMessage = "Thank you for visiting the Mars Rover Space Museum! We hope you learned a lot and enjoyed assembling the Perseverance rover. Safe travels on your journey through space exploration!";
        modalText.textContent = thankYouMessage;
        overlay.style.display = 'flex';

        // Event listener to close the overlay after thank you message
        nextButton.removeEventListener('click', showThankYouOverlay);
        nextButton.addEventListener('click', hideOverlay);
    }
});
