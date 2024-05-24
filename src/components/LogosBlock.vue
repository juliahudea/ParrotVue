<template>
  <div class="flex flex-col items-center mx-auto max-w-full px-4 pt-16 pb-4 lg:pt-20 lg:pb-16 justify-center">
    <div class="logos-container grid grid-cols-5 items-center">
      <img class="logo inner-french col-span-1 max-h-14 w-full object-contain" src="../assets/innerFrench.png" alt="InnerFrench" />
      <img class="logo mrbeast col-span-1 max-h-16 w-full object-contain" src="../assets/MrBeast-Logo.png" alt="MrBeast" />
      <img class="logo youtube-logo col-span-1 max-h-16 w-full object-contain" src="../assets/yt_logo.png" alt="YouTube"/>
      <img class="logo lucy-logo col-span-1 max-h-16 w-full object-contain" src="../assets/lucy-logo.png" alt="Lucy" />
      <img class="logo langfocus-logo col-span-1 max-h-16 w-full object-contain" src="../assets/langfocus.png" alt="LangFocus" />
    </div>
    <p class="mt-6 text-center text-lg leading-8 text-gray-700" style="font-family: 'Poppins', sans-serif;">
      Learn languages with any YouTube channel.
    </p>
  </div>
</template>

<style scoped>
.logos-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1024px) {
  .logos-container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30%;
    row-gap: 0;
    align-items: center;
  }

  .logo {
    max-width: 25%;
    justify-self: center;
  }
  
  .youtube-logo {
    grid-column: 1 / -1;
    max-width: 25%;
    justify-self: center;
  }
}
</style>
