import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import loadLaunchesData from '../../Store/Actions/launchesActions';

const mapStateToProps = (state) => {
  return {
    reducerData: state.launchesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ loadLaunchesData }, dispatch),
  };
};

class Launches extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    reducerData: PropTypes.object,
  }

  static defaultProps = {
    reducerData: {},
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.loadLaunchesData();
  }

  render() {
    const { launchesDataSet } = this.props.reducerData ;
  // console.log(this.props)
    return (
      <div className='homepage-wrapper'>
  <table>
      <tbody>{launchesDataSet.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.flight_number}</td>
                      {/* <td>{item.d.launch_year}</td> */}
                      <td>{item.rocket.rocket_name}</td>
                      <td>{item.details}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
