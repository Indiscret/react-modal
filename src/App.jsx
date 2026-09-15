import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <h1>React Modal</h1>
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Employee Created">

        <p>Employee has been sucessfully created</p>
      </Modal>
    </main>
  )
}

export default App;