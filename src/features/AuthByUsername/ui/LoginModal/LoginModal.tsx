import { Modal } from "@/shared/ui/deprecated/Modal";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Suspense } from "react";
import { LoginFormLazy } from "../LoginForm/LoginForm.async";
import { Loader } from "@/shared/ui/deprecated/Loader";

interface ILoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => (
    <Modal className={classNames("", {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>
            <LoginFormLazy onSuccess={onClose} />
        </Suspense>
    </Modal>
);
