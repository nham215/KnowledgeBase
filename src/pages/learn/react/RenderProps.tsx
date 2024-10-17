import React, { useState } from 'react';

// Component MouseTracker nhận một prop là một hàm `render`
interface MouseTrackerProps {
    render: (mouse: { x: number; y: number }) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    return <div onMouseMove={handleMouseMove}>{render(mousePosition)}</div>;
};

export default MouseTracker;
