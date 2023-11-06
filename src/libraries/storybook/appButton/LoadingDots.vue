<template>
  <div class="loading-dots">
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
  </div>
</template>

<style lang="scss" scoped>
.loading-dots {
  height: 21px;
  padding: 0 var(--unit);
  display: flex;
  align-items: center;

  .dot {
    width: 4px;
    height: 4px;
    margin: 0 4px;
    background-color: white;
    border-radius: 50%;
    animation: loading-dots 0.6s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes loading-dots {
  0%,
  20%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
}
</style>
