import { useEffect, useRef, useId } from "react";
import "./Modal.css";

/**
 * Accessible and reusable modal dialog component.
 *
 * The modal can be closed by pressing Escape, clicking the overlay,
 * or using the close button. Keyboard focus is trapped inside the modal
 * while it is open and restored to the previously focused element when closed.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls whether the modal is visble.
 * @param {() => void} props.onClose - Callback called when the modal should close.
 * @param {import("react").ReactNode} props.children - Content displayed inside the modal.
 * @param {string} [props.title] - Optional title displayed at the top of the modal.
 * @returns {import("react").ReactElement|null} The modal element or null when closed.
 */

function Modal({ isOpen, onClose, children, title }) {

    const modalRef = useRef(null);
    const previousActiveElement = useRef(null);
    const modalId = useId();

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key === "Tab") {
                const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );

                if (!focusableElements?.length) {
                    return;
                }

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }

                if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }

        if (isOpen) {
            previousActiveElement.current = document.activeElement;

            document.addEventListener("keydown", handleKeyDown);
            modalRef.current?.focus();
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);

            previousActiveElement.current?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="modal" ref={modalRef} tabIndex="-1" role="dialog" aria-modal="true" aria-labelledby={title ? modalId : undefined}>
                {title && <h2 id={modalId}>{title}</h2>}
                <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;