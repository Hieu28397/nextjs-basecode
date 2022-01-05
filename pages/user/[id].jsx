import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

// import { GET_USERS } from '../../src/redux/actionTypes';

import * as actionGetUser from '../../src/redux/actions/index';

function UserDetail(props) {
  const { userState, getUsers } = props;

  console.log('userState========>', userState);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) getUsers(id);
  }, [id, getUsers]);

  return (
    <div>
      <p>
        {userState.loading ? 'loading...' : `name: ${userState.data.name}`};
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userState,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (payload) => dispatch(actionGetUser.actionGetUsers(payload)),
});

UserDetail.propTypes = {
  userState: PropTypes.instanceOf(Object).isRequired,
  getUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
