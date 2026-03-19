<template>
  <div class="video-page">
    <video
      ref="videoPlayer"
      src="/video/running.mp4"
      controls
      class="video-player"
    ></video>

    <div class="overlay-controls">
      <router-link to="/digital-human" class="control-btn prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </router-link>

      <div class="video-info">
        <span class="category-badge">Sports</span>
        <h1 class="video-title">Running</h1>
      </div>

      <router-link to="/sport" class="control-btn next">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Running'
}
</script>

<style scoped>
.video-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.overlay-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-page:hover .overlay-controls {
  opacity: 1;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: rgba(78, 204, 163, 0.8);
  transform: scale(1.1);
}

.video-info {
  text-align: center;
}

.category-badge {
  display: inline-block;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: #fff;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.video-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .overlay-controls {
    padding: 15px 20px;
  }

  .control-btn {
    width: 40px;
    height: 40px;
  }

  .video-title {
    font-size: 1.1rem;
  }
}
</style>
