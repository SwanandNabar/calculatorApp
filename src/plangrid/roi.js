import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Roi extends Component {

    constructor(props) {
        // this.typeOfForm = this.props.typeOfFirm;
        // this.hourlyRate = this.props.hourlyRate;
        // this.numberofTeamMembers = this.props.numberofTeamMembers;


        this.handleChange = this.props.handleChange.bind(this);
        // this.state = this.state
    }

    typeOfFirm = {
        "Subcontractor": 6.57,
        "GeneralContractor": 6.45,
        "Designer": 5.46,
        "Owner": 6.72
    }

    handleChange(e) {

    }

    totalSavings() {
        if (this.typeOfFirm.Subcontractor) {
            return this.typeOfFirm.Subcontractor * this.hourlyRate * this.numberofTeamMembers;
        } else if (this.typeOfFirm.GeneralContractor) {
            return this.typeOfFirm.GeneralContractor * this.hourlyRate * this.numberofTeamMembers;
        }else if (this.typeOfFirm.Designer) {
            return this.typeOfFirm.Designer * this.hourlyRate * this.numberofTeamMembers;
        } else {
            return this.typeOfFirm.Owner * this.hourlyRate * this.numberofTeamMembers;   
        }
    }
    render() {
        return (
            <div>
                <h3>What type of firm are you</h3>
                <select>
                    <option>Select Type</option>
                    <option value="Subcontractor">Subcontractor</option>
                    <option value="GeneralContractor">General contractor</option>
                    <option value="Designer">Designer</option>
                    <option value="Owner">Owner</option>
                </select>

                <input />


            </div>
        );
    }
}

ReactDOM.render(
    <Roi />,
    document.getElementById('root')
);