import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { setPageAction } from 'actions';
import Table from 'components/Table';

interface IGrammarProps {
    close: () => void;
    isVisible: boolean;
}

class Grammar extends React.Component<IGrammarProps> {
    public render() {
        const tableAbeceda =
            [
                [
                    'a@bb',
                    'b@bb',
                    'c@bb',
                    'č@bb',
                    'd@bb',
                    'dj@bb',
                    'dž@bb',
                    'e@bb',
                    'ě@bb',
                    'f@bb',
                    'g@bb',
                    'h@bb',
                    'i@bb',
                    'j@bb',
                    'ja@bb',
                    'ju@bb',
                    'k@bb',
                    'l@bb',
                    'lj@bb',
                ],
                [
                    '{а}r@bt;s',
                    '{б}r@bt;s',
                    '{ц}r@bt;s',
                    '{ч}r@bt;s',
                    '{д}r@bt;s',
                    '{дь}r@bt;s',
                    '{дж}r@bt;s',
                    '{е}r@w=2;bt;s',
                    '{ф}r@bt;s',
                    '{г}r@bt;s',
                    '{х}r@bt;s',
                    '{и}r@bt;s',
                    '{j}r@bt;s',
                    '{я}r@bt;s',
                    '{ю}r@bt;s',
                    '{к}r@bt;s',
                    '{л}r@bt;s',
                    '{ль}r@bt;s',
                ],
                [
                    'm@bb',
                    'n@bb',
                    'nj@bb',
                    'o@bb',
                    'p@bb',
                    'q@bb',
                    'r@bb',
                    's@bb',
                    'š@bb',
                    'šč@bb',
                    't@bb',
                    'tj@bb',
                    'u@bb',
                    'v@bb',
                    'w@bb',
                    'x@bb',
                    'y@bb',
                    'z@bb',
                    'ž@bb',
                ],
                [
                    '{м}r@bt;s',
                    '{н}r@bt;s',
                    '{нь}r@bt;s',
                    '{о}r@bt;s',
                    '{п}r@bt;s',
                    '{к}r@bt;s',
                    '{р}r@bt;s',
                    '{с}r@bt;s',
                    '{ш}r@bt;s',
                    '{щ}r@bt;s',
                    '{т}r@bt;s',
                    '{ть}r@bt;s',
                    '{у}r@bt;s',
                    '{в}r@w=2;bt;s',
                    '{кс}r@bt;s',
                    '{ы}r@bt;s',
                    '{з}r@bt;s',
                    '{ж}r@bt;s',
                ],
            ];

        const tableBrat =
            [
                [
                    '&nbsp@bt;bl',
                    'jednina@w=2;d',
                    'množina@w=2;d',
                    'dvojina@w=2;d',
                ],
                [
                    'N@d;bb',
                    'brat@br',
                    'grad@bb;bl',
                    'brat-{i}b@br;s',
                    'grad-{y}b@bb;bl;s',
                    'brat-{a}r@br;bb',
                    'grad-{a}r@bl;bb',
                ],
                [
                    'A@d;bb',
                    'brat-{a}r@bb;b',
                    'grad@bt',
                    'brat-{o}pv@bb;B',
                    'grad-{y}b@bt;s',
                    'brat-{u}p@br;bt',
                    'grad-{a}r@bl;bt',
                ],
                [
                    'G@d;bb',
                    'brat-{a}r@br;b',
                    'grad-{a}r@bl;b',
                    'brat-{o}pv@br;B',
                    'grad-{o}pv@bl;B',
                    'brat-{u}p@br;bb;b',
                    'grad-{u}p@bl;bb;b',
                ],
                [
                    'L@d;bb',
                    'brat-{u}p@br;bb;g',
                    'grad-{u}p@bl;bb;g',
                    'brat-{a}rh@br;G',
                    'grad-{a}rh@bl;G',
                    'brat-{u}p@br;bt;b',
                    'grad-{u}p@bl;bt;b',
                ],
                [
                    'D@d;bb',
                    'brat-{u}p@br;bt;g',
                    'grad-{u}p@bl;bt;g',
                    'brat-{a}rm@br;R;bb',
                    'grad-{a}rm@bl;R;bb',
                    'brat-{a}rm{a}r@br;bb;r',
                    'grad-{a}rm{a}r@bl;bb;r',
                ],
                [
                    'I@d;bb',
                    'brat-{o}pm@br;r',
                    'grad-{o}pm@bl;r',
                    'brat-{a}rm{i}b@br;R;bt',
                    'grad-{a}rm{i}b@bl;R;bt',
                    'brat-{a}rm{a}r@br;bt;r',
                    'grad-{a}rm{a}r@bl;bt;r',
                ],
                [
                    'V@d',
                    'brat-{e}g{!}s@br;s',
                    'grad-{e}g{!}s@bl;s',
                    'brat-{i}b{!}s@br;S',
                    'grad-{y}b{!}s@bl;S',
                    'brat-{a}r{!}s@br;s',
                    'grad-{a}r{!}s@bl;s',
                ],
            ];

        const tableMuz =
            [
                [
                    '&nbsp@bt;bl',
                    'jednina@w=2;d',
                    'množina@w=2;d',
                    'dvojina@w=2;d',
                ],
                [
                    'N@d;bb',
                    'muž@br',
                    'nož@bl;bb',
                    'muž-{i}b@br;s',
                    'nož-{e}g@bl;bb;s',
                    'muž-{a}r@br;bb',
                    'nož-{a}r@bl;bb',
                ],
                [
                    'A@d;bb',
                    'muž-{a}r@bb;b',
                    'nož@bt',
                    'muž-{e}gv@bb;B',
                    'nož-{e}g@bt;s',
                    'muž-{u}p@br;bt',
                    'nož-{a}r@bl;bt',
                ],
                [
                    'G@d;bb',
                    'muž-{a}r@br;bt;b',
                    'nož-{a}r@bl;b',
                    'muž-{e}gv@br;bt;B',
                    'nož-{e}gv@bl;B',
                    'muž-{u}p@br;bb;b',
                    'nož-{u}p@bl;bb;b',
                ],
                [
                    'L@d;bb',
                    'muž-{u}p@br;bb;g',
                    'nož-{u}p@bl;bb;g',
                    'muž-{a}rh@br;G',
                    'nož-{a}rh@bl;G',
                    'muž-{u}p@br;bt;b',
                    'nož-{u}p@bl;bt;b',
                ],
                [
                    'D@d;bb',
                    'muž-{u}p@br;bt;g',
                    'nož-{u}p@bl;bt;g',
                    'muž-{a}rm@br;R;bb',
                    'nož-{a}rm@bl;R;bb',
                    'muž-{a}rm{a}r@br;bb;r',
                    'nož-{a}rm{a}r@bl;bb;r',
                ],
                [
                    'I@d;bb',
                    'muž-{e}gm@br;r',
                    'nož-{e}gm@bl;r',
                    'muž-{a}rm@br;bt;R',
                    'nož-{a}rm@bl;bt;R',
                    'muž-{a}rm{a}r@br;bt;r',
                    'nož-{a}rm{a}r@bl;bt;r',
                ],
                [
                    'V@d',
                    'muž-{u}p{!}s@br;s',
                    'nož-{u}p{!}s@bl;s',
                    'muž-{i}b{!}s@br;S',
                    'nož-{e}g{!}s@bl;S',
                    'muž-{a}r{!}s@br;s',
                    'nož-{a}r{!}s@bl;s',
                ],
            ];

        const tableZena =
            [
                [
                    '&nbsp@bt;bl',
                    'jednina@w=2;d',
                    'množina@w=2;d',
                    'dvojina@w=2;d',
                ],
                [
                    'N@d;bb',
                    'žen-{a}r@br',
                    'duš-{a}r@bl',
                    'žen-{y}g@br;bb;s',
                    'duš-{e}g@bl;bb;s',
                    'žen-{ě}g@br;bb',
                    'duš-{i}b@bl;bb',
                ],
                [
                    'A@d;bb',
                    'žen-{u}p@br;r',
                    'duš-{u}p@bl;r',
                    'žen-{y}b@br;bt;s',
                    'duš-{e}g@bl;bt;s',
                    'žen-{ě}g@br;bt;bt',
                    'duš-{i}b@bl;bt;bt',
                ],
                [
                    'G@d;bb',
                    'žen-{y}b@br;b',
                    'duš-{e}g@bl;b',
                    'žen@br;B',
                    'duš{(-}s{e}gj{)}s@bl;B',
                    'žen-{u}p@br;bb;b',
                    'duš-{u}p@bl;bb;b',
                ],
                [
                    'L@d;bb',
                    'žen-{ě}g@br;bb;g',
                    'duš-{i}b@bl;bb;g',
                    'žen-{a}rh@br;G',
                    'duš-{a}rh@bl;G',
                    'žen-{u}p@br;bt;b',
                    'duš-{u}p@bl;bt;b',
                ],
                [
                    'D@d;bb',
                    'žen-{ě}g@br;bt;g',
                    'duš-{i}b@bl;bt;g',
                    'žen-{a}rm@br;bb;R',
                    'duš-{a}rm@bl;bb;R',
                    'žen-{a}rm{a}r@br;bb;r',
                    'duš-{a}rm{a}r@bl;bb;r',
                ],
                [
                    'I@d;bb',
                    'žen-{oju}p@br;r',
                    'duš-{e}g{ju}p@bl;r',
                    'žen-{a}rm{i}b@br;R',
                    'duš-{a}rm{i}b@bl;R',
                    'žen-{a}rm{a}r@br;r',
                    'duš-{a}rm{a}r@bl;r',
                ],
                [
                    'V@d',
                    'žen-{o}p{!}s@br;s',
                    'duš-{e}g{!}s {(-}so{!}p{)}s@bl;s',
                    'žen-{y}b{!}s@br;S',
                    'duš-{e}g{!}s@bl;S',
                    'žen-{ě}g{!}s@br;s',
                    'duš-{i}b{!}s!@bl;s',
                ],
            ];

        const tableKost =
            [
                [
                    '&nbsp@bt;bl',
                    'jednina@w=2;d',
                    'množina@w=2;d',
                    'dvojina@d',
                ],
                [
                    'N@d;bb',
                    'kost@br;bb',
                    'deset@bl;bb',
                    'kost-{i}gg@br;bb;s',
                    'oč-{i}g@bl;bb;s',
                    'kost-{i}gg@bb',
                ],
                [
                    'A@d;bt',
                    'kost@br;bt',
                    'deset@bl;bt',
                    'kost-{i}g@br;bt;s',
                    'oč-{i}g@bl;bt;s',
                    'kost-{i}g@bt',
                ],
                [
                    'G@d;bb',
                    'kost-{i}b@br;b',
                    'deset-{i}b@bl;b',
                    'kost-{ij}g@br;B',
                    'oč-{ij}g@bl;B',
                    'kost-{ju}p@bb;b',
                ],
                [
                    'L@d;bb',
                    'kost-{i}b@br;bb;g',
                    'deset-{i}b@bl;bb;g',
                    'kost-{ja}rh@br;G',
                    'oč-{a}rh@bl;G',
                    'kost-{ju}p@bt;b',
                ],
                [
                    'D@d;bb',
                    'kost-{i}b@br;bt;g',
                    'deset-{i}b@bl;bt;g',
                    'kost-{ja}rm@br;bb;R',
                    'oč-{a}rm@bl;bb;R',
                    'kost-{ja}rm{a}r@bb;r',
                ],
                [
                    'I@d;bb',
                    'kost-{ju}p@br;r',
                    'deset-{ju}p@bl;r',
                    'kost-{ja}rm{i}b@br;bt;R',
                    'oč-{a}rm{i}r@bl;bt;R',
                    'kost-{ja}rm{a}r@bt;r',
                ],
                [
                    'V@d',
                    'kost-{i}b{!}s@br;s',
                    'deset-{i}b{!}s@bl;s',
                    'kost-{i}b{!}s@br;S',
                    'oč-{i}b{!}s@bl;S',
                    'kost-{i}g{!}s@s',
                ],
            ];

        const tableSelo =
            [
                [
                    '&nbsp@bt;bl',
                    'jednina@w=2;d',
                    'množina@w=2;d',
                    'dvojina@w=2;d',
                ],
                [
                    'N@d;bb',
                    'sěl-{o}p@br;bb',
                    'polj-{e}g@bl;bb',
                    'sěl-{a}r@br;bb;s',
                    'polj-{a}r@bl;bb;s',
                    'sěl-{ě}g@br;bb',
                    'polj-{i}b@bl;bb',
                ],
                [
                    'A@d;bb',
                    'sěl-{o}p@br;bt',
                    'polj-{e}g@bl;bt',
                    'sěl-{a}r@br;bt;s',
                    'polj-{a}r@bl;bt;s',
                    'sěl-{ě}g@br;bt',
                    'polj-{i}b@bl;bt',
                ],
                [
                    'G@d;bb',
                    'sěl-{a}r@br;b',
                    'polj-{a}r@bl;b',
                    'sěl@br;B',
                    'polj{(-}s{e}gj{)}s@bl;B',
                    'sěl-{u}p@br;bb;b',
                    'polj-{u}p@bl;bb;b',
                ],
                [
                    'L@d;bb',
                    'sěl-{u}p@br;bb;g',
                    'polj-{u}p@bl;bb;g',
                    'sěl-{a}rh@br;G',
                    'polj-{a}rh@bl;G',
                    'sěl-{u}p@br;bt;b',
                    'polj-{u}p@bl;bt;b',
                ],
                [
                    'D@d;bb',
                    'sěl-{u}p@br;bt;g',
                    'polj-{u}p@bl;bt;g',
                    'sěl-{a}rm@br;bb;R',
                    'polj-{a}rm@bl;bb;R',
                    'sěl-{a}rm{a}r@br;bb;r',
                    'polj-{a}rm{a}r@bl;bb;r',
                ],
                [
                    'I@d;bb',
                    'sěl-{o}pm@br;r',
                    'polj-{e}gm@bl;r',
                    'sěl-{a}rm{i}b@br;bt;R',
                    'polj-{a}rm{i}b@bl;bt;R',
                    'sěl-{a}rm{a}r@br;bt;r',
                    'polj-{a}rm{a}r@bl;bt;r',
                ],
                [
                    'V@d',
                    'sěl-{o}p{!}s@br;s',
                    'polj-{e}g{!}s@bl;s',
                    'sěl-{a}r{!}s@br;S',
                    'polj-{a}r{!}s@bl;S',
                    'sěl-{ě}g{!}s@br;s',
                    'polj-{i}b{!}s@bl;s',
                ],
            ];
        const tableDen =
            [
                [
                    '&nbsp@bt;bl',
                    'jednina@w=4;d',
                ],
                [
                    'N@d;bb',
                    'den@bb',
                    'im-{e}g@bb',
                    'mat-{i}b@bb',
                    'dět-{e}g@bb',
                ],
                [
                    'A@d;bb',
                    'den@bt',
                    'im-{e}g@bt',
                    'mat-{i}b@bt',
                    'dět-{e}g@bt',
                ],
                [
                    'G@d;bb',
                    'dn-{e}g@b',
                    'im-{e}gn-{e}g@b',
                    'mat-{e}gr-{e}g@b',
                    'dět-{e}gt-{e}g@b',
                ],
                [
                    'L@d;bb',
                    'dn-{i}b@bb;g',
                    'im-{e}gn-{i}b@bb;g',
                    'mat-{e}gr-{i}b@bb;g',
                    'dět-{e}gt-{i}b@bb;g',
                ],
                [
                    'D@d;bb',
                    'dn-{i}b@bt;g',
                    'im-{e}gn-{i}b@bt;g',
                    'mat-{e}gr-{i}b@bt;g',
                    'dět-{e}gt-{i}b@bt;g',
                ],
                [
                    'I@d;bb',
                    'dn-{e}gm@p',
                    'im-{e}gn-{e}gm@p',
                    'mat-{e}gr-{ju}p@p',
                    'dět-{e}gt-{e}gm@p',
                ],
                [
                    'V@d',
                    'dn-{i}b{!}s@br;s',
                    'im-{e}g{!}s@bl;s',
                    'mat-{i}b{!}s@br;s',
                    'dět-{e}g{!}s@bl;s',
                ],
            ];

        const tableNauc =
            [
                [
                    'zapis@d',
                    'etymologija iz PSL@d',
                ],
                [
                    'ę@s',
                    'nasal Ѧ',
                ],
                [
                    'ų@s',
                    'nasal Ѫ',
                ],
                [
                    'ò@s',
                    'vokalizovany Ъ',
                ],
                [
                    'è@s',
                    'vokalizovany Ь',
                ],
                [
                    'å@s',
                    'О → А (napr. kråva)',
                ],
                [
                    'ć@s',
                    'redukovany Щ',
                ],
                [
                    'ď@s',
                    'ДЬ',
                ],
                [
                    'ť@s',
                    'ТЬ',
                ],
                [
                    'ň@s',
                    'НЬ',
                ],
                [
                    'ľ@s',
                    'ЛЬ',
                ],
            ];

        const tableKir =
            [
                [
                    'lat.@d',
                    'kirilica@d;w=2',
                ],
                [
                    'ě@s',
                    'Е',
                    'Ѣ',
                ],
                [
                    'šč@s',
                    'ШЧ',
                    'Щ',
                ],
                [
                    'ja@s',
                    'ЈА',
                    'Я',
                ],
                [
                    'ju@s',
                    'ЈУ',
                    'Ю',
                ],
            ];

        const tableMest =
            [
                [
                    '&nbsp@bt;bl',
                    'ja@d',
                    'ty@d',
                    'se@d',
                    'my@d',
                    'vy@d',
                    'na@d',
                    'va@d',
                    'kto@d',
                    'čto@d',
                ],
                [
                    'N@d;bb',
                    'ja {(}saz{)}s',
                    'ty',
                    '&nbsp@d',
                    'my',
                    'vy',
                    'na@bb',
                    'va@bb',
                    'kto',
                    'čto@bb',
                ],
                [
                    'A@d;bb',
                    'mene@bb;b',
                    'tebe@bb;b',
                    'sebe@bb;b',
                    'nas@bb;B',
                    'vas@bb;B',
                    'na@bt',
                    'va@bt',
                    'kogo@bb;b',
                    'čto@bt',
                ],
                [
                    'G@d;bb',
                    'mene@bt;b',
                    'tebe@bt;b',
                    'sebe@bt;b',
                    'nas@bb;bt;B',
                    'vas@bb;bt;B',
                    'naj@bb;b',
                    'vaj@bb;b',
                    'kogo@bt;b',
                    'čego@bt;b',
                ],
                [
                    'L@d;bb',
                    'mně@bb;g',
                    'tobě@bb;g',
                    'sobě@bb;g',
                    'nas@bt;B',
                    'vas@bt;B',
                    'naj@bt;b',
                    'vaj@bt;b',
                    'kom@bb;g',
                    'čem@bb;g',
                ],
                [
                    'D@d;bb',
                    'mně@bt;g',
                    'tobě@bt;g',
                    'sobě@bt;g',
                    'nam@bb;R',
                    'vam@bb;R',
                    'nama@bb;r',
                    'vama@bb;r',
                    'komu@bt;g',
                    'čemu@bt;g',
                ],
                [
                    'I@d;bb',
                    'mnoju@r',
                    'toboju@r',
                    'soboju@r',
                    'nami@bt;R',
                    'vami@bt;R',
                    'nama@bt;r',
                    'vama@bt;r',
                    'kym@r',
                    'čim@r',
                ],
                [
                    'V@d',
                    '&nbsp@d',
                    'ty{!}s@s',
                    '&nbsp@d',
                    'my{!}s@s',
                    'vy{!}s@s',
                    'na{!}s@s',
                    'va{!}s@s',
                    '&nbsp@d',
                    '&nbsp@d',
                ],
            ];
        const tableTojTaTo =
            [
                [
                    '&nbsp@bt;bl',
                    'm.ž. jedn.@d',
                    'm.n. jedn.@d',
                    'ž. jedn.@d',
                    's. jedn.@d',
                    'm.ž.m.@d',
                    'm.n.m. ž.m. s.m.@d',
                    'dvojina@d',
                ],
                [
                    'N@d;bb',
                    't-{o}pj@w=2',
                    't-{a}r',
                    't-{o}p@',
                    't-{i}b@s',
                    't-{e}g@bb;s',
                    't-{e}g@bb',
                ],
                [
                    'A@d;bb',
                    't-{o}pg{o}p@bb;b',
                    't-{o}pj@bt',
                    't-{u}p@s',
                    't-{o}p@bt;s',
                    't-{y}bh@bb;B',
                    't-{e}g@bt;s',
                    't-{e}g@bt',
                ],
                [
                    'G@d;bb',
                    't-{o}pg{o}p@w=2;b',
                    't-{o}pj@bt;b',
                    't-{o}pg{o}p@b',
                    't-{y}bh@w=2;bb;B',
                    't-{u}p@bb;b',
                ],
                [
                    'L@d;bb',
                    't-{o}pm@w=2;bb;g',
                    't-{o}pj@bb;g',
                    't-{o}pm@bb;g',
                    't-{y}bh@w=2;bt;B',
                    't-{u}p@bt;b',
                ],
                [
                    'D@d;bb',
                    't-{o}pm{u}p@w=2;bt;g',
                    't-{o}pj@bt;g',
                    't-{o}pm{u}p@bt;g',
                    't-{y}bm@w=2;bb;R',
                    't-{y}bm{a}r@bb;r',
                ],
                [
                    'I@d;bb',
                    't-{y}bm@w=2;r',
                    't-{o}pj{u}p@r',
                    't-{y}bm@r',
                    't-{y}bm@w=2;bt;R',
                    't-{y}bm{a}r@bt;r',
                ],
                [
                    'V@d',
                    'ty{!}s@w=4;s',
                    'vy{!}s@w=2;S',
                    'va{!}s@s'
                ],
            ];
        return (
            <div className={'container grammar' + (this.props.isVisible ? ' show' : '')}>
                <h4>MEDŽUSLOVJANSKY JEZYK</h4>
                <p>abeceda i pravopisanje</p>
                <Table data={tableAbeceda} />
                <Table data={tableBrat} />
                <Table data={tableMuz} />
                <Table data={tableZena} />
                <Table data={tableKost} />
                <Table data={tableSelo} />
                <Table data={tableDen} />
                <Table data={tableNauc} />
                <Table data={tableKir} />
                <Table data={tableMest} />
                <Table data={tableTojTaTo} />
            </div>
        );
    }
}

function mapStateToProps({page, isLoading}) {
    return {
        isVisible: page === 'grammar' && !isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        close: () => dispatch(setPageAction('translator')),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grammar);
