import { Outlet } from 'react-router-dom'
import withAuth from '../../learn/react/hoc';

type DashboardProps = {
    isAuthenticated: boolean;
}

const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div>
            <h1>Welcome to the Dashboard!</h1>
            <Outlet /> {/* Nơi hiển thị route con */}
        </div>
    )
};

// Sử dụng HOC để tạo một component được bảo vệ
export default withAuth(Dashboard);
