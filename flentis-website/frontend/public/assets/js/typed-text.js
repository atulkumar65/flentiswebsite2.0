//typed-text
		const typedTextSpan = document.querySelector(".typed-text");
		const cursorSpan = document.querySelector(".cursor");

		const textArray = ["Hey,", "Hello,", "Hola,", "Namaste,", "Bonjour,", "Salve,", "Olá,"];
		const typingDelay = 100;
		const erasingDelay = 150;
		const newTextDelay = 800; // Delay between current and next text
		let textArrayIndex = 0;
		let charIndex = 0;

function typeS() {
		  if (charIndex < textArray[textArrayIndex].length) {
			if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
			typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
			charIndex++;
			setTimeout(typeS, typingDelay);
		  } 
		  else {
			cursorSpan.classList.remove("typing");
			setTimeout(erase, newTextDelay);
		  }
		}

		function erase() {
			if (charIndex > 0) {
			if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
			typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
			charIndex--;
			setTimeout(erase, erasingDelay);
		  } 
		  else {
			cursorSpan.classList.remove("typing");
			textArrayIndex++;
			if(textArrayIndex>=textArray.length) textArrayIndex=0;
			setTimeout(typeS, typingDelay + 1600);
		  }
		}

		document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
            if (textArray.length) setTimeout(typeS, newTextDelay + 350);
		});
		//typed-text
