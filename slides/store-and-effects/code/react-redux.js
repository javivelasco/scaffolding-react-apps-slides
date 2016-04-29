import { connect } from 'react-redux';
import { exportToPDF } from '../actions/reports';
import Report from '../components/Reports/Report.js';

const mapStateToProps = (state, props) => ({
  report: state.reports[props.params.id],
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  exportToPDF: id => dispatch(exportToPDF(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);
