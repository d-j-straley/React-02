import Banner from './banner';

const App = () => {

    const abc = <div>Top Secret Clearance Required</div>;

    return (

    <div>
            {abc}
            <Banner>
                <h2>
                    Every house comes with a helicopter pad!
                </h2>
            </Banner>
    </div>
    );
};

export default App;