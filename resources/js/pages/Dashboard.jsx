import Layout from '../component/Layout';

const Dashboard = function () {

  return (
    <>
      Dashboard Content Here
    </>
  );
}

Dashboard.layout = page => <Layout children={page} openedMenu={'Dashboard'} openedSubMenu={''} />

export default Dashboard;