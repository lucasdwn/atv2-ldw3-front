import Listagem from "../../../../components/listas/listagem";

const ListasCompartilhadasPage: React.FC = () => {
    return <Listagem title="Listas Compartilhadas Comigo" fetchUrl="getListsSharedWithMe" IsShared={true} />;
};

export default ListasCompartilhadasPage;
