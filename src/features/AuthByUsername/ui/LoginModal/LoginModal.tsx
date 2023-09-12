import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginForm } from "../LoginForm/LoginForm";

import styles from "./LoginModal.module.scss";

interface ILoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const LoginModal = ({ isOpen, onClose, className }: ILoginModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(styles.loginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
