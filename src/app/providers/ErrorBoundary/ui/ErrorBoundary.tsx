import React, { ErrorInfo, ReactNode, Suspense } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        // logErrorToMyService(error, info.componentStack);
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    Какая-то ошибка
                    {/* <UnexpectedError /> */}
                </Suspense>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
