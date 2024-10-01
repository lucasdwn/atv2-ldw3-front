import Listagem from "../listagem";

const ListasCompartilhadasPage: React.FC = () => {
    return <Listagem title="Listas Compartilhadas Comigo" fetchUrl="getListsSharedWithMe" IsShared={true} />;
};

export default ListasCompartilhadasPage;
