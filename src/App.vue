<template>
  <main class="w-full h-full">
    <div class="hidden">
      <div class="modal">
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Add your note here"
        ></textarea>
        <button>Add Note</button>
        <button class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header class="flex justify-between items-center">
        <h1 class="font-bold text-6xl mb-8">Notes</h1>
        <button
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

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
}
.modal {
  width: 750px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.modal textarea {
  min-width: 100%;
  max-width: 100%;
  border: 1px solid #000000;
  border-radius: 10px;
  outline: none;
  padding: 10px;
}
.modal button {
  padding: 10px 20px;
  margin-top: 15px;
  font-size: 20px;
  width: 100%;
  background-color: green;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  cursor: pointer;
}
.modal button.close {
  margin-top: 7px;
  background-color: red;
}
</style>
