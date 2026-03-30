import Layout from '../component/Layout';

const Teacher = function () {

    return (
        <>
            Teacher List
        </>
    );
}

Teacher.layout = page => <Layout children={page} openedMenu={'Teachers'} openedSubMenu={'Teachers List'} />

export default Teacher;