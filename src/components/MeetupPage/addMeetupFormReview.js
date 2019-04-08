// import _ from 'lodash';
// import React from 'react';
// import { connect } from 'react-redux';
// import formFields from './formFields';
// import { withRouter } from 'react-router-dom';
// import * as actions from '../../actions';

// const addMeetupFormReview = ({ onCancel, formValues, submitMeetup, history }) => {
//   const reviewFields = _.map(formFields, ({ subject, time, place }) => {
//     return (
//       <div key={subject}>
//         <label>{label}</label>
//         <div>
//           {formValues[subject]}
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <h4>Please confirm your entires</h4>
//       {reviewFields}
//       <button 
//         className="cancelButton" onClick={onCancel}>
//         Back
//       </button>
//       <button
//         className="submitButton"
//         onClick={() => submitMeetup(formValues, history)}>
//         Submit
//       </button>
//     </div>
//   );
// };

// function mapStateToProps(state) {
//   return { formValues: state.form.addMeetupForm.values };
// }

// export default connect(mapStateToProps, actions)(withRouter(AddMeetupFormReview));