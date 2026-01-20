/**
 * Animated Shiki Ryougi Cursors
 * Cycles through cursor frames for smooth animation
 */

(function() {
  'use strict';
  
  const cursorFrames = {
    default: [
      'url("/images/cursor/normalselector_oyanko_frame00.png"), auto',
      'url("/images/cursor/normalselector_oyanko_frame01.png"), auto',
      'url("/images/cursor/normalselector_oyanko_frame02.png"), auto'
    ],
    pointer: [
      'url("/images/cursor/linkselector_oyanko_frame00.png"), pointer',
      'url("/images/cursor/linkselector_oyanko_frame01.png"), pointer',
      'url("/images/cursor/linkselector_oyanko_frame02.png"), pointer'
    ],
    text: [
      'url("/images/cursor/helpselector_oyanko_frame00.png"), text',
      'url("/images/cursor/helpselector_oyanko_frame01.png"), text',
      'url("/images/cursor/helpselector_oyanko_frame02.png"), text'
    ]
  };
  
  let currentFrame = {
    default: 0,
    pointer: 0,
    text: 0
  };
  
  // Animation interval in milliseconds (500ms = 0.5 second per frame)
  const FRAME_INTERVAL = 500;
  
  function updateCursors() {
    // Update default cursor
    currentFrame.default = (currentFrame.default + 1) % cursorFrames.default.length;
    document.documentElement.style.setProperty('--cursor-default', cursorFrames.default[currentFrame.default]);
    
    // Update pointer cursor
    currentFrame.pointer = (currentFrame.pointer + 1) % cursorFrames.pointer.length;
    document.documentElement.style.setProperty('--cursor-pointer', cursorFrames.pointer[currentFrame.pointer]);
    
    // Update text cursor  
    currentFrame.text = (currentFrame.text + 1) % cursorFrames.text.length;
    document.documentElement.style.setProperty('--cursor-text', cursorFrames.text[currentFrame.text]);
  }
  
  // Initialize cursors
  function initCursors() {
    // Set initial frames
    document.documentElement.style.setProperty('--cursor-default', cursorFrames.default[0]);
    document.documentElement.style.setProperty('--cursor-pointer', cursorFrames.pointer[0]);
    document.documentElement.style.setProperty('--cursor-text', cursorFrames.text[0]);
    
    // Start animation
    setInterval(updateCursors, FRAME_INTERVAL);
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursors);
  } else {
    initCursors();
  }
})();
