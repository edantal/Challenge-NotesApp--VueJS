<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const newNote = ref('')
const errMsg = ref('')
const notes = ref([])

const noteBackgrounds = ['#fff740', '#feff9c', '#7afcff', '#ff65a3', '#ff7eb9']

const addNote = () => {
  if (newNote.value.length < 10) {
    errMsg.value = 'Note must contain more than 10 chracters'
    return
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    bgColor: noteBackgrounds[Math.floor(Math.random() * 5)],
  })

  showModal.value = false
  newNote.value = ''
  errMsg.value = ''
}

const removeNote = (note) => {
  notes.value.splice(notes.value.indexOf(note), 1)
}
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
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Add your note here"
          class="min-w-[100%] max-w-[100%] border border-black rounded-[10px] outline-none p-[10px] placeholder:text-sm placeholder:italic"
          v-model.trim="newNote"
        ></textarea>
        <p
          v-if="errMsg"
          class="flex flex-row items-center text-xs text-red-700 px-2 mt-1 gap-x-1"
        >
          <i class="ri-error-warning-fill text-lg"></i>
          Error: {{ errMsg }}
        </p>
        <div class="flex flex-row items-center justify-between gap-x-5 mt-5">
          <button
            @click="addNote"
            class="btn bg-green-700 text-white hover:bg-green-950"
          >
            Add Note
          </button>
          <i
            @click="showModal = false"
            class="ri-close-circle-fill text-black text-3xl cursor-pointer hover:text-red-700 transition-all duration-500 ease-out"
          ></i>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <header class="flex justify-between items-center">
        <h1 class="font-primary font-bold text-6xl mb-8">Notes App</h1>
        <button
          @click="showModal = true"
          class="cursor-pointer transition-all duration-500 ease-out"
        >
          <i
            class="ri-add-circle-fill text-4xl text-black hover:text-sky-700"
            aria-label="Add note"
            title="Add note"
          ></i>
        </button>
      </header>

      <div class="flex flex-wrap gap-5">
        <div
          v-for="note in notes"
          :key="note.id"
          class="note__card w-[225px] h-[225px] rounded-t-lg flex flex-col justify-between overflow-hidden text-xs shadow-note"
          :style="{ backgroundColor: note.bgColor }"
        >
          <p class="flex-1 p-[10px] text-black font-writing">
            {{ note.text }}
          </p>
          <div
            class="flex flex-row justify-between items-center py-[5px] px-[10px] bg-black font-primary font-light text-white"
          >
            <p class="text-[11px]">
              {{ note.date.toLocaleDateString('de-DE') }}
            </p>
            <i
              class="ri-delete-bin-6-line text-lg hover:text-red-700"
              aria-label="Delete note"
              title="Delete note"
              @click="removeNote(note)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1000px;
  padding: 20px 10px;
}
</style>
