<template>
  <main>
    <div class="overlay">
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
      <header>
        <h1>Notes</h1>
        <button>+</button>
      </header>

      <div class="card-container">
        <div class="card">
          <p class="card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nobis consequuntur quaerat praesentium blanditiis corrupti!
          </p>
          <p class="card__date">02.03.2024</p>
        </div>
        <div class="card">
          <p class="card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nobis consequuntur quaerat praesentium blanditiis corrupti!
          </p>
          <p class="card__date">02.03.2024</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 75px;
  font-weight: bold;
  margin-bottom: 25px;
}

header button {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: #666666;
  color: #ffffff;
  font-size: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  font-size: 0.8rem;
}

.card__text {
  flex-grow: 1;
  padding: 10px;
  color: #000000;
}

.card__date {
  padding: 5px 10px 7px;
  background-color: #000000;
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
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
