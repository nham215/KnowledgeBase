import { useRef, useState } from "react";


export default function UseRef() {
    // State và ref để lưu giá trị và quản lý bộ đếm
    const [count, setCount] = useState<number>(0);
    const countRef = useRef<number>(0);
    const timerIdRef = useRef<number | null>(null);

    // Ref để tham chiếu đến input element
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Hàm để tăng giá trị của countRef
    const incrementCountRef = () => {
        countRef.current += 1;
        console.log("CountRef hiện tại:", countRef.current);
    };

    // Hàm để focus vào input khi người dùng bấm nút
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Hàm để bắt đầu bộ đếm thời gian
    const startTimer = () => {
        if (!timerIdRef.current) {
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
    };

    // Hàm để dừng bộ đếm thời gian
    const stopTimer = () => {
        if (timerIdRef.current) {
            clearInterval(timerIdRef.current);
            timerIdRef.current = null; // Đặt lại để có thể khởi động lại
        }
    };

    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            gap: 10,
            width: 1000
        }}>
            <h1>useRef</h1>

            {/* Phần 1: Sử dụng countRef để tăng giá trị mà không làm render lại */}
            <div>
                <p>Giá trị của countRef (không render lại): {countRef.current}</p>
                <button onClick={incrementCountRef}>Tăng countRef</button>
            </div>


            {/* Phần 2: Sử dụng useRef để tham chiếu đến input */}
            <div>
                <input ref={inputRef} type="text" placeholder="Nhập gì đó..." />
                <button onClick={focusInput}>Focus Input</button>
            </div>


            {/* Phần 3: Sử dụng useRef để quản lý timer */}
            <div>
                <p>Timer count (render lại mỗi giây): {count}</p>
                <button onClick={startTimer}>Bắt đầu Timer</button>
                <button onClick={stopTimer}>Dừng Timer</button>
            </div>
        </div>
    )
}
