/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}

// para fazer mais de uma requisicao simultanea sem usar o axios basta utilizar
// const [nome das requisiçoes] = await Promise.all([requisicoes])

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues([response.data]);
        });
    }, [params.repository]);

    return (
        <>
            <Header>
                <img src={logoImg} alt="logo" />
                <Link to="/">
                    Voltar
                    <FiChevronRight size={16} />
                </Link>
            </Header>

            {repository && (
                <RepositoryInfo>
                    <header>
                        <img src={repository?.owner.avatar_url} alt="img" />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>issues</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
                {issues.map((issue) => (
                    <a key={issue.id} href={issue.html_url}>
                        <div key={issue.title}>
                            <strong>{issue.title}</strong>
                            <p>{issue.user}</p>
                        </div>

                        <FiChevronRight size={18} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;
