import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginForm } from "../LoginForm/LoginForm";

interface ILoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => (
    <Modal className={classNames("", {}, [className])} isOpen={isOpen} onClose={onClose}>
        <LoginForm />
    </Modal>
);
