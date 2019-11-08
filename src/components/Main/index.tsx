import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import DetailModal from 'components/DetailModal';
import Router from 'components/Router';
import { Loader } from 'components/Loader';
import GDPR from 'components/GDPR';

import './index.scss';
import { dictionaryUrl } from 'consts';
import { fetchDictionary } from 'actions';

interface IMainProps {
    isLoading: boolean;
    loadDictionary: () => void;
}

class Main extends React.Component<IMainProps> {
    constructor(props) {
        super(props);
        this.props.loadDictionary();
    }

    public render() {
        return (
            <>
                <GDPR/>
                <Loader title={'Loading dictionary'} isLoading={this.props.isLoading}/>
                <Header/>
                <DetailModal/>
                <Router/>
            </>
        );
    }
}

function mapStateToProps({ isLoading }) {
    return { isLoading };
}

function mapDispatchToProps(dispatch) {
    return {
        loadDictionary: () => fetchDictionary(dictionaryUrl)(dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
