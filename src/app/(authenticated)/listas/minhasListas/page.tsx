import Listagem from "../../../../components/listas/listagem";

const MinhasListasPage: React.FC = () => {
    return <Listagem title="Minhas Listas" fetchUrl="getListsUser" IsShared={false} />;
};

export default MinhasListasPage;
