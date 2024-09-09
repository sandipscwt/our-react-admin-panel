import Card from "../../components/Card";
import { PieChart } from '@mui/x-charts/PieChart';
const Dashboard = () => {
    return (
        <div className="dashboardWrapper">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-6 pl-2 pr-2">
                            <Card title="Total Users" value="100" bgColor="red" iconName="FaUser" link="https://www.google.com/" />
                        </div>
                        <div className="col-6 pl-2 pr-2">
                            <Card title="Total Users" value="100" bgColor="orange" iconName="FaHome" link="https://in.search.yahoo.com/?fr2=inr" />
                        </div>
                        <div className="col-6 pl-2 pr-2">
                            <Card title="Total Users" value="100" bgColor="magenta" iconName="FaUserGraduate" link="https://chat.openai.com/" />
                        </div>
                        <div className="col-6 pl-2 pr-2">
                            <Card title="Total Users" value="100" bgColor="#fd7e14" iconName="FaAppleAlt" link="https://chat.openai.com/" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="chart_area">
                        <h4>Total Sales</h4>
                        <h2>$3,787,681.00</h2>
                        <p>$3,578.90 in last month</p>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                            width={350}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;