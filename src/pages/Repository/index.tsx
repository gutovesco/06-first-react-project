/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="logo" />
                <Link to="/dashboard">
                    Voltar
                    <FiChevronRight size={16} />
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="" alt="img" />
                    <div>
                        <strong>{params.repository}</strong>
                        <p>Descricao</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>100</strong>
                        <span>stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>forks</span>
                    </li>
                    <li>
                        <strong>0</strong>
                        <span>isues</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="/">
                    <div>
                        <strong>adwdawda</strong>
                        <p>adwadawfwada</p>
                    </div>

                    <FiChevronRight size={18} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
