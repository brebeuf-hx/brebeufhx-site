function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake absolute text-white text-xl opacity-0 animate-snowfall';
  snowflake.style.left = Math.random() * 100 + '%';
  snowflake.style.animationDelay = Math.random() * 10 + 's';
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
  snowflake.innerHTML = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
  this.querySelector('#snowflakes').appendChild(snowflake);

  setTimeout(() => {
      snowflake.parentNode?.removeChild(snowflake);
  }, 10e3); // 10s
}

export function createSnowflakes() {
    const snowflakeCount = 50;
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }
    setInterval(createSnowflake, 500);
}
