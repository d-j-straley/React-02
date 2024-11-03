import Banner from './banner';

const App = () => {

    const jsx = <div>Hello World</div>;

    return (

    <div>
        {jsx}
        <Banner>Every house comes with a helicopter pad!</Banner>
    </div>
    );
};

export default App;