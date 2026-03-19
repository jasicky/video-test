<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">
        <span class="gradient-text">Video Gallery</span>
      </h1>
      <p class="hero-subtitle">精选视频展示平台</p>
      <p class="hero-description">选择一个视频开始观看</p>
    </div>

    <div class="video-menu">
      <!-- 左边：数字人 -->
      <router-link to="/digital-human" class="video-link digital-human">
        <div class="link-content">
          <div class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2>数字人</h2>
          <p>探索数字人类的未来</p>
          <span class="arrow">→</span>
        </div>
      </router-link>

      <!-- 中间：运动康复视频 -->
      <router-link to="/running" class="video-link running">
        <div class="link-content">
          <div class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <h2>运动康复视频</h2>
          <p>科学康复，恢复活力</p>
          <span class="arrow">→</span>
        </div>
      </router-link>

      <!-- 右边：气脉同康操 -->
      <router-link to="/sport" class="video-link sport">
        <div class="link-content">
          <div class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A4 4 0 0 0 10 8"></path>
              <path d="M14 10V6"></path>
              <path d="M10 14V10"></path>
              <path d="M6 14a4 4 0 0 0 8 0"></path>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h2>气脉同康操</h2>
          <p>调理气脉，健康养生</p>
          <span class="arrow">→</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  overflow: hidden;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.gradient-text {
  background: linear-gradient(135deg, #4ecca3 0%, #7fffd4 50%, #4ecca3 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
}

.hero-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
}

.video-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1000px;
  width: 100%;
}

.video-link {
  text-decoration: none;
  border-radius: 20px;
  padding: 30px 25px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  transition: opacity 0.3s ease;
}

.video-link.digital-human {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
}

.video-link.digital-human::before {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.video-link.running {
  background: linear-gradient(135deg, rgba(240, 147, 251, 0.3) 0%, rgba(245, 87, 108, 0.3) 100%);
}

.video-link.running::before {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.video-link.sport {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.3) 0%, rgba(0, 242, 254, 0.3) 100%);
}

.video-link.sport::before {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.video-link:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.video-link:hover::before {
  opacity: 0.25;
}

.link-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.link-icon {
  margin-bottom: 15px;
  color: #fff;
  opacity: 0.9;
}

.link-content h2 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 600;
}

.link-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.arrow {
  display: inline-block;
  font-size: 1.3rem;
  color: #4ecca3;
  transition: transform 0.3s ease;
}

.video-link:hover .arrow {
  transform: translateX(10px);
}

@media (max-width: 900px) {
  .video-menu {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .video-menu {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .video-link {
    padding: 25px 20px;
  }
}
</style>
