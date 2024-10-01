import Listagem from "../listagem";

const MinhasListasPage: React.FC = () => {
    return <Listagem title="Minhas Listas" fetchUrl="getListsUser" IsShared={false} />;
};

export default MinhasListasPage;
