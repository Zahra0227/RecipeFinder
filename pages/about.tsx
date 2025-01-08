import Layout from "../components/layout/Layout";

const About: React.FC = () => {
    return (
        <Layout title="About">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">About Recipe Finder</h1>
                <p className="text-gray-700">
                    Recipe Finder is your ultimate companion for exploring delicious recipes.
                    Search by ingredients, diet, or keywords to find the perfect dish for any occasion.
                    Save your favorites and get cooking today!
                </p>
            </div>
        </Layout>
    );
};

export default About;
