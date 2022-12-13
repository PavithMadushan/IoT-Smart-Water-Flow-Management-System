import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CalculateIcon from '@mui/icons-material/Calculate';
import RouterIcon from '@mui/icons-material/Router';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentsIcon from '@mui/icons-material/Payments';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';


const Sidebar=()=>{

    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">Aqua App</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon/>
                        <span>Home</span>
                    </li>
                    <li>
                        <ReceiptIcon/>
                        <span>Billing</span>
                    </li>
                    <li>
                        <CalculateIcon/>
                        <span>Complaints</span>
                    </li>
                    <li>
                        <RouterIcon/>
                        <span>Live Meter</span>
                    </li>
                    <li>
                        <SettingsInputComponentIcon/>
                        <span>Devices</span>
                    </li>
                    <li>
                        <PaymentsIcon/>
                        <span>Payments</span>
                    </li>
                    <li>
                        <SubscriptionsIcon/>
                        <span>Subscriptions</span>
                    </li>
                    <li>
                        <SettingsIcon/>
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption">color options</div>
                <div className="colorOption">color options</div>
                </div>
        </div>
    )

}

export default Sidebar;