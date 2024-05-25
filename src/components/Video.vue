<template>
  <div class="video-container">
    <video
      src="../assets/Parrot Demo Video Looped.mp4"
      autoplay="autoplay"
      playsinline
      muted
      loop
      alt="App Video Demo"
      class="video-style"
    />
  </div>
</template>

<script setup>
</script>

  
  <style scoped>
.video-container {
  margin: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4px;
  border-radius: 10px; /* Consistent with lg styling */
  background-color: rgba(74, 85, 104, 0.2); /* Lighter background for contrast */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  border: 1px solid rgba(31, 41, 55, 0.1);
}

.video-style {
  width: 100%; /* Ensures video expands to fill container */
  height: auto; /* Maintains aspect ratio */
  border-radius: 8px; /* Rounded corners for the video itself */
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3); /* More prominent shadow */
  border: 1px solid rgba(31, 41, 55, 0.1);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .video-container {
    margin: -30px; 
    padding: 2px;
    margin-top: 4px;
  }
}
</style>
