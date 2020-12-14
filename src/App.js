import AnimationWrapper from "./Components/AnimationWrapper";
// Root Compoment

import palm_bg1 from "./Assets/palm_bg1.png";
import palm2_bg1 from "./Assets/palm2_bg1.png";
import pawn_bg1 from "./Assets/pawn_bg1.png";
import rock_bg1 from "./Assets/rock_bg1.png";

import knight_bg2 from "./Assets/knight_bg2.png";
import palm1_small from "./Assets/palm1_small.png";
import pawn_bg2 from "./Assets/pawn_bg2.png";
import rock2_bg2 from "./Assets/rock2_bg2.png";

import alice from "./Assets/alice.png";
import { useEffect, useRef, useState } from "react";

function App() {
  const aliceRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    const alice = aliceRef.current;
    const sceneRef = bgRef.current;

    const aliceAnim = alice.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
      {
        duration: 1000,
        iterations: Infinity,
        easing: "steps(7,end)",
      }
    );

    const sceneAnim = sceneRef.animate(
      [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
      {
        duration: 15000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    sceneAnim.pause();
  }, []);

  const onAliceClickHandler = () => {
    const [aliceAnim, sceneAnim] = document.getAnimations();
    const alicePR = aliceAnim.playbackRate + 0.15;
    aliceAnim.updatePlaybackRate(alicePR);
    aliceAnim.play();

    const scenePR = sceneAnim.playbackRate + 0.5;
    sceneAnim.updatePlaybackRate(scenePR);
    sceneAnim.play();

    setTimeout(() => {
      const aliceDecPR = aliceAnim.playbackRate - 0.15;
      const sceneDecPR = sceneAnim.playbackRate - 0.35;
      aliceAnim.updatePlaybackRate(aliceDecPR);
      sceneAnim.updatePlaybackRate(sceneDecPR);
      if (sceneDecPR == 1) {
        sceneAnim.pause();
      }
    }, 3600);
  };
  return (
    <div className="App" onClick={onAliceClickHandler}>
      <AnimationWrapper>
        <div className="sky" />
        <div className="earth">
          <div className="alice_wrapper">
            <img className="alice_sprite" src={alice} ref={aliceRef} />
          </div>

          <div className="scenery" ref={bgRef}>
            <img className="bg1  palm_bg1" alt="palm_bg1" src={palm_bg1} />
            <img className="bg1 palm2_bg1" alt="palm_bg1" src={palm2_bg1} />
            <img className="bg1  pawn_bg1" alt="pawn_bg1" src={pawn_bg1} />
            <img className="bg1  rock_bg1" alt="rock_bg1" src={rock_bg1} />

            <img
              className="bg2  knight_bg2"
              alt="knight_bg2"
              src={knight_bg2}
            />
            <img
              className="bg2  palm1_small"
              alt="palm1_small"
              src={palm1_small}
            />
            <img className="bg2  pawn_bg2" alt="pawn_bg2" src={pawn_bg2} />
            <img className="bg2 rock2_bg2" alt="rock2_bg2" src={rock2_bg2} />
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
}

export default App;
