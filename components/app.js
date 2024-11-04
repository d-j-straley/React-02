import Banner from './banner';
import HouseList from './houseList';

const App = () => {

    const abc = <div>Top Secret Clearance Required</div>;

    return (

    <>
            {abc}
            <Banner>
                <h2>
                    Every house comes with a helicopter pad!
                </h2>
            </Banner>
            <HouseList />
    </>
    );
};

export default App;