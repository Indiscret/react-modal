# @indiscret/react-modal

A reusable and accessible React modal component.


## Installation

Install the package with npm:

```bash
npm install @indiscret/react-modal
```

## Requirements

- React `^19.2.8`
- React DOM `^19.2.8`

## Usage

Import the `Modal` component from the package:

```jsx
import { useState } from "react";
import { Modal } from "@indiscret/react-modal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>
                Open Modal
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Employee created"
            >
                <p>The employee has been successfully created.</p>
            </Modal>
        </>
    );
}

export default App;
```

## Props

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | Yes | Controls whether the modal is visible. |
| `onClose` | `() => void` | Yes | Callback called when the modal should close. |
| `children` | `ReactNode` | Yes | Content displayed inside the modal. |
| `title` | `string` | No | Optional title displayed at the top of the modal. |

## Features

- Close the modal using the close button.
- Close the modal by pressing `Escape`.
- Close the modal by clicking the overlay.
- Trap keyboard focus inside the modal while it is open.
- Restore focus to the previously focused element when the modal closes.
- Accessible dialog semantics.
- Optional modal title.

## License

MIT


