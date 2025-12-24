document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  // ✅ Kill existing smoother (important for reloads / HMR)
  ScrollSmoother.get()?.kill();

  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

  // -----------------------------
  // FORCE SCROLL TO TOP ON RELOAD
  // -----------------------------
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  window.scrollTo(0, 0);

  // -----------------------------
  // ELEMENTS
  // -----------------------------
  const loader = document.querySelector(".loader");
  const loadingPercentage = document.querySelector(".loadingPercentage");
  const loadingText = document.querySelector(".loadingText");
  const loadTexts = document.querySelectorAll(".loadText");

  // -----------------------------
  // SPLIT LOADER TEXT (WORDS)
  // -----------------------------
  const loaderSplit = new SplitText(loadingText, { type: "words" });
  const loaderWords = loaderSplit.words;

  // Initial state
  gsap.set(loaderWords, {
    y: 40,
    opacity: 0,
  });

  // -----------------------------
  // LOOPING LOADER TEXT ANIMATION
  // -----------------------------
  let loaderTextTL = gsap.timeline({ repeat: -1, paused: true });

  function animateLoaderText() {
    loaderTextTL.clear();

    loaderTextTL
      .to(loaderWords, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.12,
          from: "random",
        },
        ease: "power3.out",
      })
      .to(
        loaderWords,
        {
          y: -40,
          opacity: 0,
          duration: 0.6,
          stagger: {
            each: 0.1,
            from: "random",
          },
          ease: "power3.in",
        },
        "+=0.4"
      );
  }

  animateLoaderText();
  loaderTextTL.play();

  // -----------------------------
  // FAKE LOADING LOGIC (GENUINE FEEL)
  // -----------------------------
  let load = 0;

  const loadingInterval = setInterval(() => {
    load += Math.floor(Math.random() * 6) + 1;

    if (load >= 100) {
      load = 100;
      clearInterval(loadingInterval);
      finishLoading();
    }

    loadingPercentage.textContent = `${load}%`;
  }, 120);

  // -----------------------------
  // FINISH LOADING
  // -----------------------------
  function finishLoading() {
    loaderTextTL.kill();

    gsap.to(loader, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        loader.style.display = "none";
        revealContent();
      },
    });
  }

  // -----------------------------
  // SPLIT & ANIMATE MAIN CONTENT
  // -----------------------------
  function revealContent() {
    loadTexts.forEach((el) => {
      const split = new SplitText(el, { type: "words" });

      gsap.set(split.words, {
        y: 60,
        opacity: 0,
      });

      gsap.to(split.words, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: {
          each: 0.08,
          from: "random",
        },
        ease: "power4.out",
        delay: 0.2,
      });
    });
  }

  const video = document.getElementById("scrollVideo");
  const videoParas = gsap.utils.toArray(".videoPara");

  let targetTime = 0;

  video.pause();
  video.muted = true;

  // ✅ PROMISE: video metadata (reload-safe)
  const videoReady =
    video.readyState >= 1
      ? Promise.resolve()
      : new Promise((res) =>
          video.addEventListener("loadedmetadata", res, { once: true })
        );

  // ✅ PROMISE: fonts
  const fontsReady = document.fonts.ready;

  // ✅ WAIT FOR BOTH
  Promise.all([videoReady, fontsReady]).then(() => {
    // 🔤 Split text ONCE
    const splitParas = videoParas.map((para) => {
      const split = new SplitText(para, { type: "words" });
      const words = gsap.utils.shuffle(split.words.slice());

      gsap.set(words, { opacity: 0, y: 20 });

      return { words };
    });

    // ✅ CREATE SCROLLTRIGGER ONCE
    ScrollTrigger.create({
      trigger: ".video-section",
      start: "top top",
      end: "top -1500%",
      scrub: true,
      pin: true,

      onUpdate: (self) => {
        // 🎥 video sync
        targetTime = self.progress * video.duration;

        // 📝 text sync
        splitParas.forEach(({ words }, index) => {
          const section = 1 / splitParas.length;
          const start = index * section;
          const mid = start + section / 2;
          const end = start + section;

          if (self.progress < start || self.progress > end) {
            gsap.set(words, {
              opacity: 0,
              y: self.progress > end ? -20 : 20,
            });
            return;
          }

          if (self.progress < mid) {
            const p = (self.progress - start) / (mid - start);

            words.forEach((word, i) => {
              const wp = gsap.utils.clamp(0, 1, p * words.length - i);
              gsap.set(word, {
                opacity: wp,
                y: 20 * (1 - wp),
              });
            });
          } else {
            const p = (self.progress - mid) / (end - mid);
            gsap.set(words, {
              opacity: 1 - p,
              y: -20 * p,
            });
          }
        });

        // FOOTER SYNC LOGIC
        const footerStart = 0.99; // scroll progress (92%) when footer starts appearing

        if (self.progress > footerStart) {
          // Calculate normalized progress from footerStart → 100%
          const p = gsap.utils.clamp(
            0,
            1,
            (self.progress - footerStart) / (1 - footerStart)
          );

          // Zeigarnik appears first
          gsap.set(footerCredit, {
            opacity: gsap.utils.clamp(0, 1, p * 2), // appears faster
            y: 40 * (1 - gsap.utils.clamp(0, 1, (p * 1) / 2)), // from bottom
          });

          // Your name appears slightly later
          gsap.set(footerName, {
            opacity: gsap.utils.clamp(0, 1, (p - 0.4) * 2), // delay
            y: 20 * (1 - gsap.utils.clamp(0, 1, (p - 0.4) * 2)),
          });
        } else {
          gsap.set([footerCredit, footerName], { opacity: 0 });
        }
      },
    });

    ScrollTrigger.refresh();
  });

  // ✅ SMOOTH VIDEO TICKER
  gsap.ticker.add(() => {
    video.currentTime += (targetTime - video.currentTime) * 0.1;
  });
});
