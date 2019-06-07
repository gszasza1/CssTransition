import React from 'react';
import './First.css'



class First extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log(this.state.isOpen);
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const Open = this.state.isOpen ? "square square_v2fadein" : "square square_v2fadeout"
        return (
            <div className="all_padding">
                <span className="all_title">Fading</span>
                <ul className="square_list">
                    <li>
                        <span>Hover</span>
                        <div className="square_v1"></div>
                    </li>
                    <li>
                        <span>Click</span>
                        <div onClick={this.handleChange} className={Open}></div>
                    </li>
                </ul>
            </div>
        );
    }

}
export default First;