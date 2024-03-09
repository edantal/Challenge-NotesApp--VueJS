<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <main class="w-full h-full">
    <div
      v-if="showModal"
      class="absolute w-[100%] h-[100%] flex items-center justify-center bg-[rgba(0,0,0,.77)] z-10"
    >
      <div
        class="w-[750px] bg-white rounded-[10px] p-[30px] relative flex flex-col"
      >
        <button
          @click="showModal = false"
          class="absolute -top-2 -right-2 w-[30px] h-[30px] bg-black rounded-full text-white text-xl -leading-0 cursor-pointer"
        >
          ×
        </button>
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Add your note here"
          class="min-w-[100%] max-w-[100%] border border-[#000000] rounded-[10px] outline-none p-[10px] placeholder:text-sm placeholder:italic"
        ></textarea>
        <div class="flex flex-row items-center justify-center gap-x-5 mt-5">
          <button class="btn bg-green-700 text-white hover:bg-green-950">
            Add Note
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <header class="flex justify-between items-center">
        <h1 class="font-bold text-6xl mb-8">Notes</h1>
        <button
          @click="showModal = true"
          class="w-[50px] h-[50px] border-none rounded-full cursor-pointer bg-[#666666] text-[#ffffff] text-3xl leading-5 tracking-normal"
        >
          +
        </button>
      </header>

      <div class="flex flex-wrap gap-5">
        <div
          class="w-[225px] h-[225px] bg-[rgb(237,182,44)] rounded-[15px] flex flex-col justify-between overflow-hidden text-xs"
        >
          <p class="flex-1 p-[10px] text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nobis consequuntur quaerat praesentium blanditiis corrupti!
          </p>
          <p
            class="py-[5px] px-[10px] bg-black text-[11px] font-light text-white"
          >
            02.03.2024
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}
</style>
