// list of allowed/secret words
    const SECRET_WORDS = ['thanks','thank you','dhonnobad','thanks ','thank you ','dhonnobad ']; // add more: ['banana', 'pumpkin', 'apple']

    const input       = document.getElementById('wordInput');
    const checkBtn    = document.getElementById('checkBtn');
    const correctOv   = document.getElementById('correctOverlay');
    const wrongOv     = document.getElementById('wrongOverlay');
    const allOverlays = [correctOv, wrongOv];

    function hideAllOverlays() {
      allOverlays.forEach(o => o.style.display = 'none');
    }

    checkBtn.addEventListener('click', () => {
      const value = input.value.trim().toLowerCase();

      hideAllOverlays();

      if (!value) return;

      // true if value is exactly one of the secret words
      const isSecret = SECRET_WORDS.includes(value);

      if (isSecret) {
        correctOv.style.display = 'flex';
      } else {
        wrongOv.style.display = 'flex';
      }
    });

    // Close overlays on button click or background click
    allOverlays.forEach(ov => {
      ov.addEventListener('click', e => {
        if (e.target === ov || e.target.classList.contains('closeBtn')) {
          ov.style.display = 'none';
        }
      });
    });
