import { flavorisationTypeAction } from 'actions';
import { Selector } from 'components/Selector';
import { connect } from 'connect';
import * as React from 'react';
import { t } from 'translations';
import './index.scss';

interface IFlavorisationSelectorProps {
    flavorisationType: string;
    changeFlavorisationType: (flavorisationType: string) => void;
}

const flavorisationTypes = [
    {
        name: 'Etimologičny pravopis',
        value: '2',
    },
    {
        name: 'Medžuslovjansky',
        value: '3',
    },
    {
        name: 'Slovianto',
        value: '4',
    },
    {
        name: 'Sěverny variant',
        value: 'S',
    },
    {
        name: 'Južny variant',
        value: 'J',
    },
];

class FlavorisationSelector extends React.Component<IFlavorisationSelectorProps> {
    public render() {
        return (
            <div className={'flavorisationSelector'}>
                <Selector
                    options={flavorisationTypes}
                    onSelect={(flavorisationType) => this.props.changeFlavorisationType(flavorisationType)}
                    value={this.props.flavorisationType}
                    label={t('flavorisation')}
                />
            </div>
        );
    }
}

function mapStateToProps({flavorisationType}) {
    return {
        flavorisationType,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeFlavorisationType: (flavorisationType) => dispatch(flavorisationTypeAction(flavorisationType)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlavorisationSelector);
